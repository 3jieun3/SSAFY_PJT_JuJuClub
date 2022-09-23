<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <drink-card-item class="cardItems col-xl-3 col-lg-4 col-md-6 col-12"
      v-for="(drink, index) in drinks"
      :key="index"
      :drink="drink"></drink-card-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DrinkCardItem from './DrinkCardItem.vue'

export default {
  name: 'DrinkCards',
  components: { DrinkCardItem },
  computed: {
    ...mapState('drinks', ['drinks'])
  }
}
</script>

<style>
  .cardItems {
    margin-bottom: 20px;
  }
</style>