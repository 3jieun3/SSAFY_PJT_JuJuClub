<template>
  <!-- <div>
    <div class="review-box">
      <p class="info-row">
        <span>
          <strong v-if="currentRoute.startsWith('/drinks')">{{ encodedId }}</strong>
          <strong v-else-if="isCurrentUser">{{ review.drink.drinkName }}</strong>
          <span>{{ review.score }}</span>
        </span>
        <small class="date">{{ review.createdAt.substring(0, 10).replaceAll('-', '.') }}</small>
      </p>
      <p class="review-row">{{ review.review }}</p>
      <button class="btn" @click="deleteReview(review.reviewIndex)">삭제</button>
    </div>
    <hr>
  </div> -->
  <div class="m-3">
    <div class="avatar">
      <span class="fa-layers fa-fw">
        <i class="fa-solid fa-star fa-2x">
          <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-8 down-3" style="font-weight:900">5</span>
        </i>
      </span>
    </div>
    <div class="content">
      <strong class="author" v-if="currentRoute.startsWith('/drinks')">{{ encodedId }}</strong>
      <strong class="author" v-else-if="isCurrentUser">{{ review.drink.drinkName }}</strong>
      <div class="metadata">
        <div class="date">{{ review.createdAt.substring(0, 10).replaceAll('-', '.') }}</div>
        <div class="rating"><i class="star icon"></i>{{ review.score }}</div>
      </div>
      <div class="text review-row">
        {{ review.review }}
      </div>
      <button v-if="isCurrentUser && (currentUser.member.memberId === review.memberId)" class="btn btn-light" @click="deleteReview(review.reviewIndex)">삭제</button>
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
      encodedId: this.review.memberId?.substring(0, 4).padEnd(this.review.memberId.length, '*'),
    }
  },
  computed: {
    ...mapGetters(['isCurrentUser', 'currentUser'])
  },
  methods: {
    ...mapActions('drinks', ['deleteReview'])
  },
}
</script>

<style scoped>
button {
  position: absolute;
  right: 0;
  bottom: -1rem;
}
.text {
  text-align: start;
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