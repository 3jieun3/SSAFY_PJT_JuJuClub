<template>
	<div class="card">
		<img :src="require(`@/assets/feed/${food.name}.jpg`)" class="card-img-top" alt="food image">
		<h5>{{ food.name }}</h5>
	</div>
</template>

<script>
export default {
	name: 'FoodListItem',
	props: {
		food: Object,
	}
}
</script>

<style scoped>
img {
	object-fit: cover;
	height: 20vw;
}
h5 {
	margin: 0.5rem;
}
</style>