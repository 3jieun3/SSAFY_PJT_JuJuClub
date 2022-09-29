<template>
  <div>
    <div class="card"  @click="goDetailPage(drink.drink.drinkIndex)">
      <img :src="drink.drink.imageUrl" class="card-img" alt="drinkCard">
      <div class="card-body">
        <h5 class="card-title">{{ drink.drink.drinkName }}</h5>
        <div class="card-text">{{ typeTagList[drink.drink.drinkType.drinkTypeIndex-1].tagName }} | {{ Math.floor((drink.drink.abv)*100) }}%</div>
        <div class="tags d-flex justify-content-center">
          <button class="drinkTag btn btn-sm btn-warning text-nowrap"
          v-for="(tag, index) in drink.tags"
          :key="index">#{{ tag }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DrinkCardItem',
  props: {
    drink: Object
  },
  computed: {
    ...mapState('drinks', ['typeTagList'])
  },
  methods: {
    ...mapActions('drinks', ['goDetailPage']),
    goDetailPage(idx) {
      router.push({ name: 'drink', params: { drinkPK : idx } })
    }
  }
}
</script>

<style scoped>
  .card {
    height: 100%;
  }

  .card-img {
    width: 100%;
    height: 20vw;
    object-fit: contain;
    margin-top: 14px;
    /* padding: min(3vw, 5px); */
  }

  @media (max-width: 450px) {
    .card-img {
      width: 100%;
      height: 30vw;
      object-fit: contain;
    }
  }

  .card-title {
    margin-bottom: 15px;
    font-weight: bold;
  }

  .card-text {
    color: gray;
    margin-bottom: min(2vw, 10px);
  }

  .drinkTag {
    border-radius: 3rem;
    margin: 0 5px;
  }

  :hover.card {
    transform: scale(1.1);
    cursor: pointer;
    z-index: 0;
    overflow: hidden;
  }

  :hover.card-img {
    cursor: pointer;
  }
</style>