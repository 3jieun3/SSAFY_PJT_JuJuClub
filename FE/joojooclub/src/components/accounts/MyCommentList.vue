<template>
	<div class="comment-list">
		<hr>
		<comment-list-item v-for="(comment, index) in comments" :key="index" :comment="comment"></comment-list-item>
		<pagination-nav :currentPage="currentPage" :pageList="pageList"></pagination-nav>
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
	data() {
		return {
			comments: this.currentUser.comments,
		}
	},
	computed: {
		...mapGetters(['currentPage', 'pageList']),
	},
	methods: {
	},
}
</script>

<style>
</style>