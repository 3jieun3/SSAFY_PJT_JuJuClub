<template>
  <div>
    <!-- 요일별 추천 -->
    <div v-if="todayDrink.weekday" class="todayLeft d-flex flex-column justify-content-start align-items-center flex-md-row mx-5 align-items-md-start"
    data-aos="fade-right"
    data-aos-duration="1500"
    >
      <div class="img-wrap me-md-5">
        <img @click="goDetail" class="drinkImg" :src="imageUrl" alt="">
      </div>
      <div class="drinkInfo">
        <div class="mb-1 mb-md-4">
          <span class="todayMent">{{ nowDay }} {{ todayDrink.weekday }}, </span>
          <span class="todayMent percentage">{{ percent }}</span>
          <span class="todayMent">%의 사람들이 이 술을 선택했습니다</span>
        </div>
        <div class="todayDrinkTitle mb-3 mb-md-4">
          <span class="todayDrinkName">{{ drinkName }} | </span>
          <span class="todayDrinkType">{{ drinkType }} ({{ abv }}%)</span>
        </div>
        <div class="todayDrinkInfo mb-3 mb-md-4">{{ description }}</div>
        <div class="todayTags">
          <span v-for="tag in tagList"
          :key="tag.index">#{{ tag }} </span>
        </div>
      </div>
    </div>
    <!-- 날씨별 추천 -->
    <div v-if="todayDrink.weather" class="todayRight d-flex flex-column align-items-center flex-md-row-reverse mx-5 align-items-md-start"
    data-aos="fade-left"
    data-aos-duration="1500"
    >
      <div class="img-wrap ms-md-5">
        <img @click="goDetail" class="drinkImg" :src="imageUrl" alt="">
      </div>
      <div class="drinkInfo">
        <div class="mb-1 mb-md-4">
          <span class="todayMent">오늘같이 {{ weatherType[todayDrink.weather] }} 날 추천하는 {{ drinkType }}</span>
        </div>
        <div class="todayDrinkTitle mb-3 mb-md-4">
          <span class="todayDrinkName">{{ drinkName }} | </span>
          <span class="todayDrinkType">{{ drinkType }} ({{ abv }}%)</span>
        </div>
        <div class="todayDrinkInfo mb-3 mb-md-4">{{ description }}</div>
        <div class="todayTags">
          <span v-for="tag in tagList"
          :key="tag.index">#{{ tag }} </span>
        </div>
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
        "Snow": "눈이 오는",
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
      percent: this.todayDrink?.percent,
      abv: (this.todayDrink.drink.abv * 100).toFixed(2),
      tagList: this.todayDrink.tag,
    }
  },
  methods: {
    goDetail() {
      this.$router.push({name: 'drink', params: {drinkPK: this.drinkIndex}})
    },
  },
  created() {
    AOS.init();
    this.nowDay = new Date().toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
    })
  },
}
</script>

<style scoped>

  .todayLeft {
    margin-top: 50px;
  }
  
  .todayRight {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .drinkImg {
    max-height: 250px;
    margin-bottom: 10px;
    border-radius: 5px;
    object-fit: cover;
  }
  
  @media (min-width: 700px) {
    .drinkImg {
      max-height: 300px;
      margin-bottom: 0px;
    }
  }
  @media (min-width: 1000px) {
    .drinkImg {
      max-height: 400px;
    }
  }
  :hover.drinkImg {
    cursor: pointer;
  }

  .drinkInfo {
    text-align: left;
    font-weight: bold;
    font-size: x-large;
  }

  .todayMent {
    font-family: 'GongGothicMedium';
    margin-top: 50px;
    color: red;
    font-size: min(4vw, 1.5rem);
  }
  
  .todayDrinkName {
    font-family: 'NanumBarunGothic';
    font-size: min(4vw, 1.5rem);
  }

  .todayDrinkType {
    font-family: 'NanumBarunGothic';
    font-size: min(3vw, 1.2rem);
  }

  .todayDrinkInfo {
    font-family: 'NanumBarunGothic';
    /* font-size: smaller; */
    font-size: min(1.5vw, 1rem);
    font-weight: 400 !important;
  }

  .todayTags {
    font-family: 'NanumBarunGothic';
    font-weight: 400 !important;
    font-size: min(3vw, 1.2rem);
  }

</style>