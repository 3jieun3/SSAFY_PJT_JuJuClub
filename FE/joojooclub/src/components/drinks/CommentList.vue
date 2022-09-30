<template>
	<div class="ui comments comment-list">
		<hr>
		<comment-list-item v-for="review in showReviews" :key="review.id" :review="review" class="comment"></comment-list-item>
		<hr>
		<pagination-nav :currentPage="reviewPaging.currentPage"></pagination-nav>
	</div>
</template>

<script>
import CommentListItem from '@/components/drinks/CommentListItem'
import PaginationNav from '@/components/drinks/Pagination'
import { mapGetters } from 'vuex'

export default {
	name: "CommentList",
	components: { 
		CommentListItem,
		PaginationNav
	},
	props: {
		reviews: Array,
	},
	computed: {
		...mapGetters('drinks', ['reviewPaging', 'showReviews'])
	},
}
</script>

<style scoped>
.comment-list {
	max-width: 100%;
}

</style>