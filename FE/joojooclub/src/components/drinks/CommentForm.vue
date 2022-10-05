<template>
	<div>
		<div><rating v-model.number="score" type="massive star"/></div>
		<p v-if="scoreError" class="sub-error">* 별을 선택해주세요</p>
		<div class="review-form">
			<textarea class="reviewContentq" v-model="review" rows="5"></textarea>
			<button type="submit" class="btn commentBtn" @click.prevent="onSubmit()">작성</button>
		</div>
		<p v-if="nullError" class="sub-error">* 후기를 작성해주세요</p>
		<p v-if="lengthError" class="sub-error">* 200자 이내로 작성해주세요 (현재 : {{review.length}}자)</p>
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
			nullError: false,
			lengthError: false,
			scoreError: false,
			reviewCount: 0,
		}
	},
	watch: {
		review(val) {
			if (val.length >= 1) {
				this.nullError = false
			}
			else if (1 <= val.length <= 200) {
        this.lengthError = false
      }
		},
		score(val) {
			if (val >= 1) {
				this.scoreError = false
			}
		}
	},
	methods: {
		...mapActions('drinks', ['createReview']),
		onSubmit(){
			if(this.isBlank(this.review) || this.review.length < 1){
        this.nullError = true
      } else {this.nullError = false}
			if(this.score < 1){
        this.scoreError = true
      } else {this.scoreError = false}
			if(this.review.length > 200) {
				this.lengthError = true
			} else {this.lengthError = false}

			if (!this.nullError && !this.scoreError && !this.lengthError) {
				const payload = {
					drinkIndex: this.$route.params.drinkPK,
					score: this.score,
					review: this.review,
				}
				this.review = ''
				this.score = null
				this.createReview(payload)
			}
		},
		isBlank(val) {
      if (val === undefined) return true
      else if(val === null) return true
      else if(val === '') return true
      else return false
    },
		checkContent() {
			if (this.review.length > 200) {
				this.lengthError = true
				return this.lengthError
			}
		}
	},
	created() {
		this.checkContent()
	},
	updated() {
		this.checkContent()
	}
}
</script>

<style>
.commentBtn {
	background-color: rgb(233, 187, 131);
}

.review-form {
	display: grid;
	gap: 1rem;
	grid-template-columns: auto 10%;
}
.review-form > button {
	margin: 0;
}
.sub-error {
	margin: min(1vw, 5px) 0;
  color: red;
}
.reviewCount {
	position: absolute;
}
</style>