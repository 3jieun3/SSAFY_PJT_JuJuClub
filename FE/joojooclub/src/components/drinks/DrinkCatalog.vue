<template>
  <div class="catalog container">
    <div class="search-bar">
		<v-select taggable v-model="selectedDrink" :options="drinkNames" @input="setSelected" label="drinkName" placeholder="전통주명을 검색해보세요."></v-select>
    </div>
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
      <ul v-if="!isDrinkSearched" class="pagination">
        <li class="page-item"><a @click="goFirstPage(1)" class="page-link">«</a></li>
        <li class="page-item"
        :class="{'active': paging.currentPage === n}"
        v-for="(n, index) in paging.pageShow"
        :key="index"><a @click="goSpecPage(n)" class="page-link">{{ n }}</a></li>
        <li class="page-item"><a @click="goLastPage(paging.pageList.length)" class="page-link">»</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import DrinkCards from './DrinkCards.vue';
import DrinkList from './DrinkList.vue';
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'

export default {
  name: 'DrinkCatalog',
  props: {
    drinkNames: Array
  },
  components: {
    DrinkCards,
    DrinkList,
    vSelect
  },
  computed: {
    ...mapState('drinks', ['paging']),
    ...mapGetters('drinks', ['getIsCards', 'isDrinkSearched']),
  },
  methods: {
    ...mapActions('drinks', ['changeCards', 'changeList', 'goFirstPage', 'goLastPage', 'goSpecPage', 'drinkSearch', 'clearSearchDrink']),
    setSelected(){
      if (this.selectedDrink) {
        this.drinkSearch(this.selectedDrink)
      }
      else {
        this.clearSearchDrink()
      }
    }
  },
  data() {
		return {
			selectedDrink: "",
		}
	},
}
</script>

<style scoped>

* {
	font-family: 'NanumSquareRound';
}

  .catalog {
    margin-top: 80px;
  }

  .search-bar {
    padding: 0px 10vw 2rem 10vw;
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