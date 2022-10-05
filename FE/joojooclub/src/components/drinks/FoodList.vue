<template>
	<div>
		<h4>어울리는 음식 추천</h4>
		<hr>
		<div class="food-list">
			<food-list-item v-for="food in foods" :key="food.id" :food="food"></food-list-item>
		</div>
	</div>
</template>

<script>
import FoodListItem from '@/components/drinks/FoodListItem'

export default {
	name: 'FoodList',
	components: {
		FoodListItem,
	},
	props: {
		foods: Array,
	},
}
</script>

<style scoped>

* {
	font-family: 'NanumSquareRound';
}

.food-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
}
</style>