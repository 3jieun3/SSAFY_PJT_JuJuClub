<template>
	<div>
		<div><rating v-model.number="score" type="massive star"/></div>
		<div class="review-form">
			<textarea v-model="review" rows="5"></textarea>
			<button type="submit" class="btn btn-light" @click.prevent="onSubmit()">작성</button>
		</div>
	</div>
</template>

<script>
import Rating from "v-rating";
import { mapActions } from 'vuex';

export default {
	name: "CommentForm",
	components: {
		Rating,
	},
	data() {
		return {
			score: 0,
			review: '',
		}
	},
	methods: {
		...mapActions('drinks', ['createReview']),
		onSubmit(){
			const payload = {
				drinkIndex: this.$route.params.drinkPK,
				score: this.score,
				review: this.review,
			}
			this.review = ''
			this.createReview(payload)
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