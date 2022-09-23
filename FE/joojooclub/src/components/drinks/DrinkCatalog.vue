<template>
  <div class="catalog container">
    <div class="btnWrapper d-flex justify-content-end">
      <button class="changeBtn" @click="changeCards">card</button>
      <button class="changeBtn" @click="changeList">list</button>
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
    margin-bottom: 10px;
  }

</style>