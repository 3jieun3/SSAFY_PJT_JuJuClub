<template>
	<div class="comment-list">
		<hr>
		<comment-list-item v-for="review in showReviews" :key="review.id" :review="review"></comment-list-item>
		<pagination-nav :currentPage="reviewPaging.currentPage"></pagination-nav>
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
    ...mapGetters(['reviewPaging', 'showReviews']),
	},
	methods: {
	},
}
</script>

<style>
</style>