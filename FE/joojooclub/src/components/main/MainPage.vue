<template>
  <div id="app">
    <main-image></main-image>
    <todays-drink-list></todays-drink-list>
  </div>
</template>

<script>
import MainImage from './MainImage.vue';
import TodaysDrinkList from './TodaysDrinkList.vue';

export default {
  name : 'MainPage',
  components : {
    MainImage,
    TodaysDrinkList,
},
}
</script>