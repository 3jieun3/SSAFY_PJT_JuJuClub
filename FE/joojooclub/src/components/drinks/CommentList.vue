<template>
	<div class="comment-list">
		<hr>
		<comment-list-item v-for="comment in comments" :key="comment.id" :comment="comment"></comment-list-item>
	</div>
</template>

<script>
import CommentListItem from '@/components/drinks/CommentListItem'

export default {
	name: "CommentList",
	components: { 
		CommentListItem,
	},
	props: {
		currentUser: Object,
		comments: Array,
	},
}
</script>

<style>

</style>