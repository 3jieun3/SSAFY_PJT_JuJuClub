<template>
	<div>
		<h3>상세 정보</h3>
		<div class="detail-header">
			<drink-detail :drink="drink"></drink-detail>
		</div>
		<div class="detail-body">
			<food-list :foods="drink.foods"></food-list>
			<h4>후기</h4>
			<comment-form v-if="isLoggedIn"></comment-form>
			<comment-list :reviews="reviews"></comment-list>
		</div>
	</div>
</template>

<script>
import DrinkDetail from '@/components/drinks/DrinkDetail'
import FoodList from '@/components/drinks/FoodList'
import CommentForm from '@/components/drinks/CommentForm'
import CommentList from '@/components/drinks/CommentList'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'DrinkDetailView',
	components: {
		DrinkDetail,
		FoodList,
		CommentForm,
		CommentList,
	},
	methods: {
		...mapActions('drinks', ['fetchDrink'])
	},
	computed: {
		...mapGetters(['isLoggedIn']),
		...mapGetters('drinks', ['drink', 'reviews']),
	},
	created() {
		this.fetchDrink(this.$route.params.drinkPK)
	},
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