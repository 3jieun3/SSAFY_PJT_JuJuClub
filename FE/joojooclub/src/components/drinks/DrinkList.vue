<template>
  <div class="d-flex flex-column align-items-center">
    <hr>
    <div class="list container">
      <drink-list-item
      v-for="(drink, index) in filteredDrink"
      :key="index"
      :drink="drink"></drink-list-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DrinkListItem from './DrinkListItem.vue';

export default {
  name: 'DrinkList',
  components: {
    DrinkListItem
  },
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
  methods: {
    ...mapActions('drinks', ['goPrevPage', 'goNextPage', 'goSpecPage'])
    
  }
}
</script>

<style scoped>
  .pagination {
    margin-top: 50px;
  }

  .page-link {
    border: none;
  }

</style>