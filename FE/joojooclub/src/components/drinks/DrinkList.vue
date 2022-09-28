<template>
  <div class="d-flex flex-column align-items-center">
    <hr>
    <div class="list container">
      <drink-list-item
      v-for="(drink, index) in showPage"
      :key="index"
      :drink="drink"></drink-list-item>
    </div>
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