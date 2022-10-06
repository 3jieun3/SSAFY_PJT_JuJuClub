<template>
  <div class="ui comments comment-list">
    <div v-if="myShowReviews.length">
      <hr>
      <comment-list-item v-for="review in myShowReviews" :key="review.id" :review="review" class="comment"></comment-list-item>
      <hr>
      <pagination-nav :currentPage="myReviewPaging.currentPage"></pagination-nav>
    </div>
    <h3 v-else class="else m-2">작성한 후기가 없어요..</h3>
  </div>
</template>

<script>
import CommentListItem from '@/components/drinks/CommentListItem'
import PaginationNav from '@/components/accounts/Pagination'
import { mapGetters } from 'vuex'

export default {
	name: "CommentList",
	components: { 
		CommentListItem,
		PaginationNav,
	},
	props: {
		currentUser: Object,
	},
	computed: {
    ...mapGetters(['myReviewPaging', 'myShowReviews']),
	},
}
</script>

<style scoped>
.comment-list {
	max-width: 100%;
	padding-right: 5vw;
}

.else {
	font-family: 'NanumSquareRound' !important;
}

</style>