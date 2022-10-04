<template>
  <div>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row cardGrid">
        <drink-card-item class="cardItems col-xl-3 col-lg-4 col-md-6 col-12"
        v-for="(drink, index) in filteredDrink"
        :key="index"
        :drink="drink"></drink-card-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DrinkCardItem from './DrinkCardItem.vue'

export default {
  name: 'DrinkCards',
  components: { DrinkCardItem },
  computed: {
    ...mapGetters('drinks', ['showPage', 'isDrinkSearched', 'searchDrink', 'getSetFilteringDrinks']),
    filteredDrink() {
      if (this.isDrinkSearched) {
        return this.getSetFilteringDrinks.filter(drink => drink.drink.drinkName === this.searchDrink[0].drink.drinkName)
      }
      else {
        return this.showPage
      }
    }
  },
}
</script>

<style scoped>

  .cardGrid {
    width: 100%;
  }

  .cardItems {
    margin-bottom: 20px;
  }

  .page-item {
    border: none;
  }

  .pagination {
    margin-top: 50px;
  }

  .page-link {
    border: none;
  }
</style>