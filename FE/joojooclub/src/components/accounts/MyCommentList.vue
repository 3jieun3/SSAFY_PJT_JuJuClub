<template>
	<div class="comment-list">
		<hr>
		<comment-list-item v-for="(review, index) in pageReviews" :key="index" :review="review"></comment-list-item>
		<pagination-nav :currentPage="currentPage"></pagination-nav>
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
		PaginationNav,
	},
	props: {
		currentUser: Object,
	},
	computed: {
    ...mapGetters(['currentPage', 'pageReviews']),
	},
	methods: {
	},
}
</script>

<style>
</style>