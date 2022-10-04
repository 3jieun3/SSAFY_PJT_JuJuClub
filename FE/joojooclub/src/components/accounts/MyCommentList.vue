<template>
	<div class="ui comments comment-list">
		<hr>
		<comment-list-item v-for="review in myShowReviews" :key="review.id" :review="review" class="comment"></comment-list-item>
		<hr>
		<pagination-nav :currentPage="myReviewPaging.currentPage"></pagination-nav>
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
}

</style>