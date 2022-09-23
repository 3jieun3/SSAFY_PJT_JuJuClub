<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div class="row align-items-center">
        <img class="img-fluid col-4" :src="drink.drinkImg" alt="drinkImg">
        <div class="drinkinfo col-8 flex-wrap">
          <h4 class="drinkName col-12">{{ drink.drinkName }}</h4>
          <p class="smallInfo">{{ drink.drinkType }} | {{ drink.drinkPercent }}</p>
          <p>{{ drink.drinkInfo }}</p>
          <button class="drinkTag btn btn-sm btn-warning"
          v-for="(tag, index) in drink.tags"
          :key="index"> #{{ tag }}</button>
        </div>
      </div>
    </li>
    <hr>
  </ul>
</template>

<script>
export default {
  name: 'DrinkListItem',
  props: {
    drink: Object,
  }
}
</script>

<style scoped>
  .img-fluid {
    max-width: 100%;
    height: 15vw;
    object-fit: contain;
  }

  .drinkName {
    margin-bottom: 30px;
    color: black;
    font-weight: bold;
  }

  .drinkinfo {
    text-align: start;
    color: gray;
  }

  .smallInfo {
    color: gray;
    margin-bottom: 20px;
  }

  .list-group-item {
    border: none;
    margin: 20px 0px 20px;
  }

  .drinkTag {
    border-radius: 3rem;
  }

</style>