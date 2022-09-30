<template>
	<div class="ui search search-bar">
		<div class="ui icon fluid input">
			<input class="prompt" type="text" id="drinkSearch" v-model.trim="newName" @keyup.enter="searchDrink" placeholder="전통주명 검색">
			<i class="search link icon" @click="searchDrink"></i>
		</div>
		<div class="results"></div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'SearchBar',
	props: {
		drinkName: String,
	},
	data() {
		return {
			newName: this.drinkName,
			searched: [],
		}
	},
	computed: {
		...mapGetters('drinks', ['drinkNames', 'searchedDrink']),
	},
	methods: {
		...mapActions('drinks', ['searchDrinkIndex']),
		searchDrink(){
			this.searchDrinkIndex(this.newName)
			if (this.searchedDrink) {
				this.searched.push(this.newName)
				this.newName = ''
			}
		},
	},
}
</script>

<style scoped>

</style>