<template>
	<div>
		<h3>상세 정보</h3>
		<!-- <div class="detail-header">
			<drink-detail :drink="drink"></drink-detail>
		</div> -->
		<!-- <div class="detail-body">
			<food-list :foods="foods"></food-list>
			<h4>후기</h4>
			<hr>
			<comment-form></comment-form>
			<comment-list :comments="comments"></comment-list>
		</div> -->
	</div>
</template>

<script>
// import DrinkDetail from '@/components/drinks/DrinkDetail'
// import CommentForm from '@/components/CommentForm'
// import CommentList from '@/components/CommentList'
import { mapState } from 'vuex'

export default {
	name: 'DrinkDetailView',
	components: {
		// DrinkDetail,
		// FoodList,
		// CommentForm,
		// CommentList,
	},
	data() {
		return {
			drinkPK: this.$route.params.drinkPK,
		}
	},
	computed: {
		...mapState('drinks', ['drink', 'foods', 'comments']),
		}
}
</script>

<style>
.detail-header {
	margin: 5vh 5vw;
}
.detail-body {
	margin: 5vh 5vw;
}
</style>