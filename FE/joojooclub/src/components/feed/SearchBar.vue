<template>
	<div class="search-bar">
		<!-- <div class="ui icon fluid input">
			<label for="drinkSearch">전통주명</label>
			<input class="prompt" type="text" id="drinkSearch" v-model.trim="newName" @keyup.enter="searchDrink" placeholder="전통주명 검색">
			<i class="search link icon" @click="searchDrink"></i>
		</div>
		<div class="results"></div> -->
		<!-- <v-select v-model="selectedDrink" :reduce="(option) => option" :options="drinkNames" @input="setSelected" label="name">
		</v-select> -->
		<v-select taggable v-model="selectedDrink" :options="drinkNames" @input="setSelected" label="drinkName" placeholder="전통주명을 검색해보세요.">
		</v-select>
	</div>
</template>

<script>
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'SearchBar',
	components: {
		vSelect,
	},
	props: {
		drinkNames: Array,
	},
	data() {
		return {
			selectedDrink: "",
		}
	},
	computed: {
		...mapGetters('drinks', ['searchedDrink', 'isDrinkNames']),
	},
	methods: {
		...mapActions('drinks', ['setSearchDrink']),
		setSelected(){
			this.setSearchDrink(this.selectedDrink)
		},
	},
}
</script>

<style scoped>
	

</style>