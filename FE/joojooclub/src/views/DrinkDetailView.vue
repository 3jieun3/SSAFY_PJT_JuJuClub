<template>
	<div>
		<drink-image :imageTitle="drink.drinkName"></drink-image>
		<i class="fa-sharp fa-solid fa-circle-arrow-left fa-2xl" @click="$router.go(-1)"></i>
		<h2>상세 정보</h2>
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
import DrinkImage from '@/components/drinks/DrinkImage.vue'
import DrinkDetail from '@/components/drinks/DrinkDetail'
import FoodList from '@/components/drinks/FoodList'
import CommentForm from '@/components/drinks/CommentForm'
import CommentList from '@/components/drinks/CommentList'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'DrinkDetailView',
	components: {
		DrinkImage,
		DrinkDetail,
		FoodList,
		CommentForm,
		CommentList,
	},
	methods: {
		...mapActions('drinks', ['fetchDrink']),
		goBack() {
			this.router
		}
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

.fa-sharp {
	position: fixed;
	top: 55%;
	left: 2%;
	z-index: 10;
	cursor: pointer;
	
}
</style>