<template>
	<div class="comment-form">
		<textarea name="" id="" rows="5"></textarea>
		<button type="submit" class="btn btn-light">작성</button>
	</div>
</template>

<script>
export default {
	name: "CommentForm",
}
</script>

<style>
.comment-form {
	display: grid;
	grid-template-columns: 1.5fr auto;
}
</style>