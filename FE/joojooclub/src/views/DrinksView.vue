<template>
  <div>
    <drink-image :imageTitle="`전통주 찾기`"></drink-image>
    <tag-list></tag-list>
    <drink-catalog v-if="isDrinkNames" :drinkNames="drinkNames"></drink-catalog>
  </div>
</template>

<script>
import DrinkImage from '@/components/drinks/DrinkImage.vue'
import TagList from '@/components/drinks/TagList.vue'
import DrinkCatalog from '@/components/drinks/DrinkCatalog.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  
  name: 'DrinksView',
  components: {
    DrinkImage,
    TagList,
    DrinkCatalog
  },
  computed: {
		...mapGetters('drinks', ['isDrinkNames', 'drinkNames']),
  },
  methods: {
    ...mapActions('drinks', ['getDrinks', 'getCustomTags']),
		...mapActions('drinks', ['fetchDrinkNames']),
  },
  created() {
    this.getDrinks()
    this.getCustomTags()
		this.fetchDrinkNames()
  }
}
</script>

<style>

</style>