<template>
  <div>
    <!-- 요일별 추천 -->
    <div v-if="todayDrink.weekday" class="d-flex flex-column justify-content-start align-items-center flex-md-row mx-5 align-items-md-start"
    data-aos="fade-right"
    data-aos-duration="1000"
    >
      <div class="img-wrap me-md-5">
        <img @click="goDetail" class="drinkImg" :src="imageUrl" alt="">
      </div>
      <div class="drinkInfo">
        <p class="todayMent">{{ nowDay }} {{ todayDrink.weekday }}, {{ todayDrink.percent }}%의 사람들이 이 술을 선택했습니다</p>
        <div class="todayDrinkTitle">
          <span class="todayDrinkName">{{ drinkName }} | </span>
          <span class="todayDrinkType">{{ drinkType }} ({{ abv }}%)</span>
        </div>
        <br>
        <p class="todayDrinkInfo">{{ description }}</p>
        <p class="todayTags">
          <span v-for="tag in tagList"
          :key="tag.index">#{{ tag }} </span>
        </p>
      </div>
    </div>
    <!-- 날씨별 추천 -->
    <!-- <div v-if="todayDrink.weather" class="row todayLeft mx-5">
      <div class="img-wrap col col-xs-12 col-sm-12 col-md-3">
        <img class="drinkImg" :src="imageUrl" alt="">
      </div>
      <div class="drinkInfo ms-md-5 col col-xs-12 col-sm-12 col-md-7">
        <p class="todayMent">{{ weatherType[todayDrink.weather] }} 날 추천하는 {{ drinkType }}</p>
        <div class="todayDrinkTitle mb-2">
          <span class="todayDrinkName">{{ drinkName }} | </span>
          <span class="todayDrinkType">{{ drinkType }} ({{ abv }}%)</span>
        </div>
        <span class="todayDrinkInfo">{{ description }}</span>
        <p class="todayTags">
          <span v-for="(tag, index) in todayDrink.tags"
          :key="index">#{{ tag }} </span>
        </p>
      </div>
    </div> -->
    <div v-if="todayDrink.weather" class="d-flex flex-column align-items-center flex-md-row-reverse mx-5 align-items-md-start"
    data-aos="fade-left"
    data-aos-duration="1000"
    >
      <div class="img-wrap ms-md-5">
        <img @click="goDetail" class="drinkImg" :src="imageUrl" alt="">
      </div>
      <div class="drinkInfo">
        <p class="todayMent">오늘같이 {{ weatherType[todayDrink.weather] }} 날 추천하는 {{ drinkType }}</p>
        <div class="todayDrinkTitle">
          <span class="todayDrinkName">{{ drinkName }} | </span>
          <span class="todayDrinkType">{{ drinkType }} ({{ abv }}%)</span>
        </div>
        <br>
        <p class="todayDrinkInfo">{{ description }}</p>
        <p class="todayTags">
          <span v-for="tag in tagList"
          :key="tag.index">#{{ tag }} </span>
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
  data() {
    return {
      weatherType: {
        "Thunderstorm": "천둥치는", 
        "Drizzle": "이슬비가 내리는",
        "Rain": "비가 오는",
        "Snow": "눈 오는",
        "Atmosphere": "안개 낀",
        "Clear": "맑은",
        "Clouds": "구름 낀",
      },
      nowDay: '',
      drinkName: this.todayDrink.drink.drinkName,
      drinkIndex: this.todayDrink.drink.drinkIndex,
      drinkType: this.todayDrink.drink.drinkType.drinkType,
      description: this.todayDrink.drink.description,
      imageUrl: this.todayDrink.drink.imageUrl,
      abv: (this.todayDrink.drink.abv * 100).toFixed(2),
      tagList: this.todayDrink.tag,
    }
  },
  methods: {
    goDetail() {
      this.$router.push({name: 'drink', params: {drinkPK: this.drinkIndex}})
    }
  },
  created() {
    AOS.init();
    // console.log(this.todayDrink)
    this.nowDay = new Date().toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
    })
  },
}
</script>

<style scoped>
/* {
  path: '/drinks/:drinkPK',
  name: 'drink',
  component: DrinkDetailView
}, */
/* data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom" */
  .todayLeft {
    /* display: flex;
    justify-content: start;
    align-items: center; */
    margin-top: 100px;
  }
  
  .todayRight {
    /* display: flex;
    flex-direction: row-reverse;
    align-items: center; */
    margin-top: 100px;
  }

  .img-wrap {
    /* width: 30vh; */
    /* width: min(30vh, 500px); */
    /* max-width: 500px; */
  }

  .drinkImg {
    /* width: 100%; */
    /* max-width: 200px; */
    max-height: 300px;
    /* margin: 0px 20px 0 0; */
    object-fit: cover;
  }
  @media (min-width: 700px) {
    .drinkImg {
      /* max-width: 300px; */
      max-height: 400px;
    }
  }
  :hover.drinkImg {
    cursor: pointer;
  }

  .drinkInfo {
    /* padding-left: 80px; */
    text-align: left;
    font-weight: bold;
    font-size: x-large;
  }

  .todayMent {
    margin-top: 50px;
    color: red;
    font-size: min(5vw, 1.5rem);
  }
  
  .todayDrinkName {
    font-size: min(5vw, 1.5rem);
  }

  .todayDrinkType {
    font-size: min(3vw, 1.2rem);
  }

  .todayDrinkInfo {
    /* font-size: smaller; */
    font-size: min(2vw, 1rem);
    font-weight: 400 !important;
  }

  .todayTags {
    font-weight: 400 !important;
    font-size: min(3vw, 1.2rem);
  }

</style>