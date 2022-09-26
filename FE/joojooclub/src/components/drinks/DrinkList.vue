<template>
  <div class="d-flex flex-column align-items-center">
    <hr>
    <div class="list container">
      <drink-list-item
      v-for="(drink, index) in showPage"
      :key="index"
      :drink="drink"></drink-list-item>
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
import { mapState, mapGetters, mapActions } from 'vuex';
import DrinkListItem from './DrinkListItem.vue';

export default {
  name: 'DrinkList',
  components: {
    DrinkListItem
  },
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
  .pagination {
    margin-top: 50px;
  }

  .page-link {
    border: none;
  }

</style>