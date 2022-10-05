<template>
  <div class="m-3">
    <div class="avatar">
      <span class="fa-layers fa-fw">
        <i class="fa-solid fa-star fa-2x"></i>
          <span class="rating">{{ review.score }}</span>
      </span>
    </div>
    <div class="content d-flex flex-wrap">
      <div class="col-12">
        <strong class="author" v-if="currentRoute.startsWith('/drinks')">{{ encodedId }}</strong>
        <strong class="author" v-else-if="isCurrentUser">{{ review.drink.drinkName }}</strong>
        <div class="metadata">
          <div class="date">{{ createdDate }}</div>
        </div>
      </div>
      <div class="text review-row col-12">
        {{ review.review }}
      </div>
      <button v-if="isCurrentUser && (currentUser.member.id == review.memberId)" class="btn btn-light" @click="onDeleteReview">삭제</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "CommentListItem",
  props: {
    review: Object,
  },
  data() {
    return {
      currentRoute: window.location.pathname.toString(),
    }
  },
  computed: {
    ...mapGetters(['isCurrentUser', 'currentUser']),
    encodedId() {
      return this.review.memberId?.substring(0, 4).padEnd(this.review.memberId.length, '*')
    },
    createdDate() {
      return this.review.createdAt.substring(0, 10).replaceAll('-', '.')
    },
  },
  methods: {
    ...mapActions(['deleteMyReview']),
    ...mapActions('drinks', ['deleteReview']),
    onDeleteReview() {
      if (this.currentRoute.startsWith('/drinks')) {  // 디테일 페이지에서의 후기 삭제
        this.deleteReview(this.review.reviewIndex)
      } else {  // 프로필 페이지에서의 후기 삭제
        this.deleteMyReview(this.review.reviewIndex)
        this.deleteReview(this.review.reviewIndex)
      }
    },
  },
}
</script>

<style scoped>
button {
  position: absolute;
  right: 0;
  bottom: -1rem;
}

.fa-solid {
  color: rgb(236, 236, 67);
}

.content {
  text-align: start;
}

.text {
  text-align: start;
}

.rating {
  font-weight: bold;
}
/* .info-row, .info-row > span:first-child {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  column-gap: 1rem;
}
.review-box {
  position: relative;
  text-align: start;
}
p {
  margin-bottom: 0;
}
.review-row {
  padding: 2%;
} */
</style>