<template>
	<div class="ui comments comment-list">
		<hr>
		<div v-if="showReviews.length">
			<comment-list-item v-for="review in showReviews" :key="review.id" :review="review" class="comment" style="min-height: 50px"></comment-list-item>
		</div>
		<div v-else>작성된 후기가 없습니다</div>
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
	computed: {
		...mapGetters('drinks', ['reviewPaging', 'showReviews'])
	},
}
</script>

<style scoped>

* {
	font-family: 'NanumSquareRound';
}

.comment-list {
	max-width: 100%;
}

</style>