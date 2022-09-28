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
  <div>
    <a class="avatar"><i class="heart icon"></i></a>
    <div class="content">
      <strong class="author" v-if="currentRoute.startsWith('/drinks')">{{ encodedId }}</strong>
      <div class="metadata">
        <div class="date">{{ review.createdAt.substring(0, 10).replaceAll('-', '.') }}</div>
        <div class="rating"><i class="star icon"></i>{{ review.score }}</div>
      </div>
      <div class="text">
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
      encodedId: this.review.memberId?.substring(0, 4).padEnd(this.review.memberId.length, '*'),
    }
  },
  computed: {
    ...mapGetters(['isCurrentUser'])
  },
  methods: {
    ...mapActions('drinks', ['deleteReview'])
  }
}
</script>

<style scoped>
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
button {
  position: absolute;
  right: 0;
  bottom: -1rem;
}
p {
  margin-bottom: 0;
}
.review-row {
  padding: 2%;
} */
</style>