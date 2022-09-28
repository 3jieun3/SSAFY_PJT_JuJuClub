<template>
  <div>
    <div class="justify-content-between"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    :class="{'todayRight mx-5' : todayDrink.drinkIndex, 'todayLeft mx-5' : !todayDrink.drinkIndex}">
      <div class="img-wrap col col-xs-12 col-sm-3">
        <img class="drinkImg" :src="todayDrink.drinkImage" alt="">
      </div>
      <div class="drinkInfo mx-5 col col-xs-12 col-sm-7">
        <p class="todayMent">{{ todayDrink.ment }}</p>
        <p class="todayDrinkName">{{ todayDrink.drink }}</p>
        <p class="todayDrinkInfo">{{ todayDrink.info }}</p>
        <p class="todayTags">
          <span v-for="(tag, index) in todayDrink.tags"
          :key="index">#{{ tag }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import "aos/dist/aos.css";

export default {
  name: 'TodaysDrinkListItem',
  props: {
    todayDrink: Object,
  },
  created() {
    AOS.init();
  }
}
</script>

<style scoped>

  .img-wrap {
    width: 30vh;
  }

  .drinkImg {
    width: 100%;
    margin: 0px 20px 0px 20px;
    object-fit: cover;
  }

  .drinkInfo {
    padding-left: 80px;
    text-align: left;
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 50px;
  }

  .todayMent {
    color: red;
  }

  .todayDrinkInfo {
    font-size: smaller;
    font-weight: 400 !important;
  }

  .todayTags {
    font-size: smaller;
  }

</style>