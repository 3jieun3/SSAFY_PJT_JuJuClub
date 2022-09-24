<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src="drink.drinkImg" class="card-img-top" alt="drinkCard">
      <div class="card-body">
      <h5 class="card-title">{{ drink.drinkName }}</h5>
      <p class="card-text">{{ drink.drinkType }} | {{ drink.drinkPercent }}</p>
      <button class="drinkTag btn btn-sm btn-warning"
      v-for="(tag, index) in drink.tags"
      :key="index"> #{{ tag }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkCardItem',
  props: {
    drink: Object
  },
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