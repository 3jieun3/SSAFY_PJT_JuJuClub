<template>
  <div class="container">
    <div class="row align-items-center mt-5">
      <h3 class="recommendTitle mb-5">당신에게 어울리는 술은</h3>
      <carousel-3d width="300" height="600" class="carousel3D">
        <slide v-for="(result, index) in recommendDrinks"
          :index="index"
          :key="index">
          <img class="slideImg" :src="result.drink.imageUrl" alt="recommendImg">
          <div class="recommendInfo mt-5">
            <span class="drinkName"> {{ result.drink.drinkName }} </span>
            <span class="drinkType"> | {{ result.drink.drinkType.drinkType }}</span>
            <div class="tags d-flex mt-5">
              <p class="tag" v-for="(tag, index) in result.tags"
              :key="index">#{{ tag }}</p>
            </div>
            <a @click="goDetailPage(result.drink.drinkIndex)" href="">자세히 보기</a>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { mapActions, mapGetters } from 'vuex';
import router from '@/router';

export default {
  name: 'RecommenResult',
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      recommendDrinks: {
        "drink": null,
        "count": null,
        "tags": null,
      },
    }
  },
  computed: {
    ...mapGetters('drinks', ['getRecommendDrinks'])
  },
  methods: {
    ...mapActions('drinks', ['clearRecommend', 'clearChoose']),
    goDetailPage(idx) {
      router.push({ name: 'drink', params: { drinkPK : idx } })
    },
    getRecommendDrink(data) {
      this.recommendDrinks = data
      console.log(data)
    }
  },
  created() {
    this.clearChoose()
    setTimeout(() => this.getRecommendDrink(this.getRecommendDrinks), 3500)
  }
}

</script>

<style scoped>

  .carousel-3d-slide {
      border: none;
      text-align: center;
      background-color: white;
  }

  @media (max-width: 400px){
    .slideImg {
      height: 400px;
      width: 300px;
    }
  }

  .slideImg {
    height: 300px;
    width: 300px;
    object-fit: contain;
  }

  .recommendTitle {
    font-weight: bold;
  }

  .recommendInfo {
    color: black;
    justify-content: center;
    align-items: end;
    /* display: none; */
  }

  .drinkName {
    font-size: large;
    font-weight: bold;
  }

  .drinkType {
    font-size: smaller;
    color: gray;
  }

  .tags {
    justify-content: center;
  }

  .tag {
    margin: 0px 10px 20px 10px;
  }

  .recommendTitle {
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recommendInfo {
    color: black;
    justify-content: center;
    align-items: end;
    /* display: none; */
  }

  .drinkName {
    font-size: large;
    font-weight: bold;
  }

  .drinkType {
    font-size: smaller;
    color: gray;
  }

  .tags {
    justify-content: center;
  }

  .tag {
    margin: 0px 10px 20px 10px;
  }

</style>