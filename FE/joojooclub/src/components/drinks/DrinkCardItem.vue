<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src="drink.imageUrl" class="card-img-top" alt="drinkCard">
      <div class="card-body">
      <h5 class="card-title">{{ drink.name }}</h5>
      <p class="card-text">{{ typeTagList[drink.type.drinkTypeIndex-1].tagName }} | {{ drink.abv }}</p>
      <button class="drinkTag btn btn-sm btn-warning"
      v-for="(tag, index) in drink.tags"
      :key="index"> #{{ tag.tagName }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DrinkCardItem',
  props: {
    drink: Object
  },
  computed: {
    ...mapState('drinks', ['typeTagList'])
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