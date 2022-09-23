<template>
  <div class="list container" @scroll="handleNotificationListScroll">
    <drink-list-item
    v-for="(drink, index) in drinks"
    :key="index"
    :drink="drink"></drink-list-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DrinkListItem from './DrinkListItem.vue';

export default {
  name: 'DrinkList',
  components: {
    DrinkListItem
  },
  computed: {
    ...mapState('drinks', ['drinks'])
  },
  methods: {
    handleNotificationListScroll(e) {
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
      if(isAtTheBottom) {
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },
    handleLoadMore() {
      console.log("리스트 추가")
      // api를 호출하여 리스트 추가하면 됨, 현재는 pushList에 1개의 index 추가
      this.pushList.push(2)
    }
  }
}
</script>

<style scoped>

  .list{
    height: calc(100vh - 70px);
    overflow: auto;
  }

</style>