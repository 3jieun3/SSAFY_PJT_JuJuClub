<template>
  <div class="m-3">
    <div class="avatar">
      <span class="fa-layers fa-fw">
        <i class="fa-solid fa-star fa-2x"></i>
        <span class="rating">{{ review.score }}</span>
      </span>
    </div>
    <div class="content d-flex flex-column flex-wrap">
      <div class="d-flex justify-content-between">
        <div class="memberInfo">
          <strong class="author" v-if="currentRoute.startsWith('/drinks')">{{ encodedId }}</strong>
          <strong class="author" v-else-if="isCurrentUser">{{ review.drink.drinkName }}</strong>
          <div class="metadata">
            <div class="date">{{ createdDate }}</div>
          </div>
        </div>
        <i v-if="isCurrentUser && (currentUser.member.id == review.memberId)" class="deleteBtn fa-solid fa-trash" @click="onDeleteReview"></i>
      </div>
      <div class="text review-row">
        {{ review.review }}
      </div>
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
.deleteBtn {
  color: #808080 !important;
  /* background-color: rgb(233, 187, 131); */
  font-size: min(1.8vw, 1rem);
  /* padding: min(0.4vw, 5.2px) min(1vw, 10.5px); */
  /* position: absolute;
  right: 0;
  top: 0; */
  /* bottom: -1rem; */
}
:hover.deleteBtn {
  cursor: pointer;
}

.fa-solid {
  color: rgb(243, 243, 83);
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

.memberInfo {
  padding-bottom: 0.5rem;
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