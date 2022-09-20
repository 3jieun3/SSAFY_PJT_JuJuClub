<template>
	<div class="drink-search-bar">
		<input type="text" v-model.trim="drinkName" @keyup.enter="searchDrink" placeholder="전통주명 검색">
		<button @click="searchDrink">검색</button>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	data: function () {
		return {
			drinkName: '',
		}
	},
	methods: {
		searchDrink() {
			this.drinkName = ''	// drinkName 초기화
		}
	}
}
</script>

<style>
</style>