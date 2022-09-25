<template>
  <div class="container d-flex flex-column align-items-center justify-content-center overflow-auto">
    <div class="row">
      <drink-card-item class="cardItems col-xl-3 col-lg-4 col-md-6 col-12"
      v-for="(drink, index) in showPage"
      :key="index"
      :drink="drink"></drink-card-item>
    </div>
    <ul class="pagination">
      <li class="page-item"><a @click="goPrevPage()" class="page-link">Previous</a></li>
      <li class="page-item"
      :class="{'active': paging.currentPage === index+1}"
      v-for="(n, index) in totalPage"
      :key="index"><a @click="goSpecPage(index+1)" class="page-link">{{ index+1 }}</a></li>
      <li class="page-item"><a @click="goNextPage()" class="page-link">Next</a></li>
    </ul>
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