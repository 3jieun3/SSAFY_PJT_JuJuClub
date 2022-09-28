<template>
	<div>
		<div><rating v-model="star" type="massive star"/></div>
		<div class="review-form">
			<textarea rows="5"></textarea>
			<button type="submit" class="btn btn-light ">작성</button>
		</div>
	</div>
</template>

<script>
import Rating from "v-rating";

export default {
	name: "CommentForm",
	components: {
		Rating,
	},
	data() {
		return {
			star: 0,
		}
	},
}
</script>

<style>
.review-form {
	display: grid;
	gap: 1rem;
	grid-template-columns: auto 10%;
}
.review-form > button {
	margin: 0;
}
</style>