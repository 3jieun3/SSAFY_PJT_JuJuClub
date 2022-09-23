<template>
	<div class="card">
		<div class="card-image image-fluid">
			<img :src="require(`@/assets/makgeoli.jpeg`)" alt="drink image">
		</div>
		<div class="card-body">
			<h5 class="card-title">{{ drink.drinkName }}</h5>
			<p><span>주종</span> | {{ drink.drinkType }}</p>
			<p><span>주원료</span> | {{ drink.ingredient }}</p>
			<p><span>도수</span> | {{ drink.abv }}</p>
			<p><span>용량</span> | {{ drink.volume }}</p>
			<p>{{ drink.description }}</p>
			<p><span v-for="tag in drink.tags" :key="tag.id"> #{{ tag }} </span></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DrinkDetail',
	props: {
		drink: Object,
	},
}
</script>

<style scoped>
.card {
	flex-direction: row;
	flex-wrap: wrap;
}
.card-image {
	flex: 1 1 0;
}
.card-body {
	text-align: start;
	flex: 2 0 0;
}
img {
	object-fit: cover;
	width: 20rem;
}
</style>