<template>
  <div>
    <div class="container d-flex align-items-center">
      <div class="row cardGrid">
        <drink-card-item class="cardItems col-xl-3 col-lg-4 col-md-6 col-12"
        v-for="(drink, index) in showPage"
        :key="index"
        :drink="drink"></drink-card-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import DrinkCardItem from './DrinkCardItem.vue'

export default {
  name: 'DrinkCards',
  components: { DrinkCardItem },
  computed: {
    ...mapState('drinks', ['drinks', 'paging']),
    ...mapGetters('drinks', ['totalPage', 'showPage'])
  },
  methods: {
    ...mapActions('drinks', ['goPrevPage', 'goNextPage', 'goSpecPage'])
  }
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