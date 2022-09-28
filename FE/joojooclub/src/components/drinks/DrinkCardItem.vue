<template>
  <div>
    <div class="card"
    @click="goDetailPage(drink.drink.drinkIndex)">
      <img :src="drink.drink.imageUrl" class="card-img-top" alt="drinkCard">
      <div class="card-body">
        <h5 class="card-title">{{ drink.drink.drinkName }}</h5>
        <p class="card-text">{{ typeTagList[drink.drink.drinkType.drinkTypeIndex-1].tagName }} | {{ Math.floor((drink.drink.abv)*100) }}%</p>
        <div class="tags d-flex justify-content-around">
          <button class="drinkTag btn btn-sm btn-warning text-nowrap"
          v-for="(tag, index) in drink.tags"
          :key="index"> #{{ tag }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    ...mapActions('drinks', ['goDetailPage'])
  }
}
</script>

<style scoped>
  .card {
    height: 100%;
  }

  .card img {
    width: 100%;
    height: 20vw;
    object-fit: contain;
  }

  .card-title {
    margin-bottom: 15px;
    font-weight: bold;
  }

  .card-text {
    color: gray;
  }

  .drinkTag {
    border-radius: 3rem;
  }

</style>