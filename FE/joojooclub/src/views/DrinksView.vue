<template>
  <div>
    <drink-image></drink-image>
    <tag-list></tag-list>
  </div>
</template>

<script>
import DrinkImage from '@/components/drinks/DrinkImage.vue'
import TagList from '@/components/drinks/TagList.vue'


export default {
  
  name: 'DrinksView',
  components: {
    DrinkImage,
    TagList

  },
}
</script>

<style>

</style>