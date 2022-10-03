<template>
  <ul class="list-group">
    <li class="list-group-item"
    @click="goDetailPage(drink.drink.drinkIndex)">
      <div class="row align-items-center">
        <img class="img-fluid col-5 col-md-4" :src="drink.drink.imageUrl" alt="drinkImg">
        <div class="drinkinfo col-7 col-md-8 flex-wrap">
          <h4 class="drinkName col-12">{{ drink.drink.drinkName }}</h4>
          <p class="smallInfo">{{ typeTagList[drink.drink.drinkType.drinkTypeIndex-1].tagName }} | {{ Math.floor((drink.drink.abv)*100) }}%</p>
          <div class="truncate">{{ drink.drink.description }}</div>
          <div class="tagBox">
            <button class="drinkTag btn btn-sm btn-warning"
            v-for="(tag, index) in drink.tags"
            :key="index"> #{{ tag }}</button>
          </div>
        </div>
      </div>
    </li>
    <hr>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'DrinkListItem',
  props: {
    drink: Object,
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
  .truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;  
  }

  .tagBox {
    margin-top: min(1vw, 10px);
  }
  
  .img-fluid {
    max-width: 100%;
    height: 15vw;
    object-fit: contain;
  }

  .drinkName {
    /* margin-bottom: 30px; */
    margin-bottom: min(2vw, 30px);
    color: black;
    font-weight: bold;
  }

  .drinkinfo {
    text-align: start;
    color: gray;
  }

  .smallInfo {
    color: gray;
    /* margin-bottom: 20px; */
    margin-bottom: min(1.5vw, 20px);
  }

  .list-group-item {
    border: none;
    margin: 20px 0px 20px;
  }
  :hover.list-group-item {
    transform: scale(1.1);
    cursor: pointer;
    overflow: hidden;
  }

  .drinkTag {
    border-radius: 3rem;
    margin: 5px 5px 5px 0;
  }

  @media (max-width: 900px) {
    .card-img {
      width: 100%;
      height: 30vw;
      object-fit: contain;
    }
  }

</style>