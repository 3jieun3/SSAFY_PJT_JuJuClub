<template>
	<!-- <div class="review-list">
		<hr>
		<comment-list-item v-for="review in showReviews" :key="review.id" :review="review"></comment-list-item>
		<pagination-nav :currentPage="reviewPaging.currentPage"></pagination-nav>
	</div> -->
	<div class="ui comments">
		<hr>
		<comment-list-item v-for="review in showReviews" :key="review.id" :review="review" class="comment"></comment-list-item>
		<pagination-nav :currentPage="reviewPaging.currentPage"></pagination-nav>
	</div>
</template>

<script>
import CommentListItem from '@/components/drinks/CommentListItem'
import PaginationNav from '@/components/Pagination'
import { mapGetters } from 'vuex'

export default {
	name: "CommentList",
	components: { 
		CommentListItem,
		PaginationNav
	},
	props: {
		currentUser: Object,
		reviews: Array,
	},
	computed: {
		...mapGetters('drinks', ['reviewPaging', 'showReviews'])
	},
}
</script>

<style>

</style>