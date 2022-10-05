<template>
	<div class="card align-items-center">
		<div class="card-image">
			<img class="drink-image" :src="drink.imageUrl" alt="drink image">
		</div>
		<div class="card-body">
			<h3 class="card-title">{{ drink.drinkName }}</h3>
			<div class="drink-description"><span class="description-type">주종</span> | {{ drink.drinkType }}</div>
			<div class="drink-description"><span class="description-type">주원료</span> | {{ drink.ingredient }}</div>
			<div class="drink-description"><span class="description-type">도수</span> | {{ (drink.abv * 100).toFixed(2) }}도</div>
			<div class="drink-description"><span class="description-type">용량</span> | {{ drink.volume }}</div>
			<div class="drink-description">{{ drink.description }}</div>
			<div class="drink-tag"><span v-for="tag in drink.tags" :key="tag.id"> #{{ tag }} </span></div>
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

* {
	font-family: 'NanumSquareRound';
}

.card {
	flex: 1 1 0;
	flex-direction: row;
	flex-wrap: wrap;
}

.card-image {
	flex: 1 1 0;
	width: 20rem;
}

.drink-image {
	margin: min(2vw, 20px);
	height: 35vw;
	border-radius: 5px;
	min-height: 200px;
	max-height: 250px;
}

.card-body {
	text-align: start;
	flex: 2 0 0;
}

.card-title {
	font-size: min(4vw, 1.4rem);
	margin-bottom: min(2vw, 10px);
}

.drink-description {
	margin-bottom: 5px;
	font-size: min(3vw, 1rem);
}

.description-type {
	font-weight: bold;
}

@media (min-width: 700px) {
	.drink-image {
		max-height: 300px;
	}
	.card-title {
		/* margin-top: min(2vw, 15px); */
		margin-bottom: min(3vw, 15px);
	}
	.drink-description {
		margin-bottom: min(1.5vw, 12px);
		font-size: min(2vw, 1.1rem);
	}
	.drink-tag {
		margin-top: min(2vw, 20px);
		font-size: min(3vw, 1.2rem);
	}
}
@media (min-width: 1000px) {
	.drink-image {
		max-height: 400px;
	}
}
</style>