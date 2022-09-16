<template>
  <div id="app">
    <MainImage></MainImage>
    <TodaysDrinkList></TodaysDrinkList>
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
}
}
</script>