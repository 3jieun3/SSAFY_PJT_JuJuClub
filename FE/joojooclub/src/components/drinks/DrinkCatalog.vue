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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DrinkCards from './DrinkCards.vue';
import DrinkList from './DrinkList.vue';

export default {
  name: 'DrinkCatalog',
  components: {
    DrinkCards,
    DrinkList
  },
  computed: {
    ...mapGetters('drinks', ['getIsCards'])
  },
  methods: {
    ...mapActions('drinks', ['changeCards', 'changeList'])
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

</style>