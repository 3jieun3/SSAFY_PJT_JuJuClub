<template>
	<div class="ui search search-bar">
		<div class="ui icon fluid input">
			<input class="prompt" type="text" id="drinkSearch" v-model.trim="drinkName" @keyup.enter="searchDrink" placeholder="전통주명 검색">
			<i class="search link icon" @click="searchDrink"></i>
		</div>
		<div class="results"></div>
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
	computed: {
	},
	methods: {
		searchDrink() {
			this.drinkName = ''	// drinkName 초기화
		},
	}
}
</script>

<style>

</style>