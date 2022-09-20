<template>
  <div class="container">
    <div class="row">
      <h2>당신에게 어울리는 술은</h2>
      <carousel-3d :width="300" :height="400">
        <slide v-for="result in recommendResults"
          :index="result.drinkIndex"
          :key="result.drinkIndex">
          <img class="slideImg" :src="result.drinkImg" alt="recommendImg">
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'RecommenResult',
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      recommendResults: [
      {
        drinkIndex: 0,
        drinkName: '걍즐겨',
        tags: ['탁주', '선물', '혼술'],
        drinkKind: '탁주',
        drinkImg: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTRfMjI4/MDAxNTk0NjkwMzcyMjQ5.2uXCYL3hRPeIPi58ZNFXWMoIPe9ZQQdP7IR8WpsB_XEg.U0l_VDHqfsXPCLqvxtzLLN2UbgARJWbwrge8IdOE0Tcg.JPEG.the_sool/SE-9553d9ef-752f-4ae4-b45f-6d7d1a9bbf64.jpg?type=w800',
      },
      {
        drinkIndex: 1,
        drinkName: '딸깅',
        tags: ['과일', '달달', '탁주'],
        drinkKind: '탁주',
        drinkImg: 'https://image.homeplus.kr/td/7578ad53-841d-489e-bc0b-c724658ee317',
      },
      {
        drinkIndex: 2,
        drinkName: '복순도가',
        tags: ['탁주', '인기', '선물'],
        drinkKind: '탁주',
        drinkImg: 'https://crcf.cookatmarket.com/product/images/2021/12/webu_1639466810_4107.jpg',
      }
      ],
      currentDrinkInfo: {

      }
    }
  },
  
}

</script>

<style scoped>

  .carousel-3d-slide {
      border: none;
      text-align: center;
  }

  .slideImg {
    height: 100%;
  }


</style>