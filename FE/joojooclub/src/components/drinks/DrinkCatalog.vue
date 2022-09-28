<template>
  <div class="catalog container">
    <div class="btnWrapper d-flex justify-content-end">
      <button class="changeToCardBtn btn btn-white" @click="changeCards">
        <img src="https://img.icons8.com/ios/30/000000/thumbnail-view.png"/>
      </button>
      <button class="changeToListBtn btn btn-white" @click="changeList">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/list--v1.png"/>
      </button>
    </div>
    <component :is="getIsCards ? 'DrinkCards' : 'DrinkList'"></component>
    <div class="pagenationWrap d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item"><a @click="goPrevPage()" class="page-link">Previous</a></li>
        <li class="page-item"
        :class="{'active': paging.currentPage === n}"
        v-for="(n, index) in paging.pageShow"
        :key="index"><a @click="goSpecPage(n)" class="page-link">{{ n }}</a></li>
        <li class="page-item"><a @click="goNextPage()" class="page-link">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import DrinkCards from './DrinkCards.vue';
import DrinkList from './DrinkList.vue';

export default {
  name: 'DrinkCatalog',
  components: {
    DrinkCards,
    DrinkList
  },
  computed: {
    ...mapState('drinks', ['paging']),
    ...mapGetters('drinks', ['getIsCards']),
  },
  methods: {
    ...mapActions('drinks', ['changeCards', 'changeList', 'goPrevPage', 'goNextPage', 'goSpecPage'])
  }
}
</script>

<style scoped>
  .catalog {
    margin-top: 80px;
  }

  .btnWrapper {
    margin-bottom: 30px;
  }

  .changeToCardBtn {
    margin: 0px;
  }

  .changeToListBtn {
    margin: 0px;
  }

  .page-item {
    border: none;
    background-color: bisque;
  }

  .page-item.active > .page-link {
    background-color: bisque;
    color: black;
  }

  .pagination {
    margin-top: 50px;
  }

  .page-link {
    border: none;
    color: black;
    font-weight: bold;
  }

</style>