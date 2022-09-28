<template>
  <div>
    <drink-image></drink-image>
    <tag-list></tag-list>
    <drink-catalog></drink-catalog>
  </div>
</template>

<script>
import DrinkImage from '@/components/drinks/DrinkImage.vue'
import TagList from '@/components/drinks/TagList.vue'
import DrinkCatalog from '@/components/drinks/DrinkCatalog.vue'
import { mapActions } from 'vuex'


export default {
  
  name: 'DrinksView',
  components: {
    DrinkImage,
    TagList,
    DrinkCatalog
  },
  methods: {
    ...mapActions('drinks', ['getDrinks', 'getCustomTags'])
  },
  created() {
    this.getDrinks()
    this.getCustomTags()
  }
}
</script>

<style>

</style>