<template>
  <button @click="pushAnswer(answer)" class="btn btn-warning">
  {{ answer }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'QuestionAnswerItem',
  props: {
    answer: String
  },
  methods: {
    ...mapActions('drinks', ['pushAnswer'])
  }
}
</script>

<style scoped>

  .btn {
    width: auto;
    margin-bottom: 5vh;
    margin: 0px 20px 5vh 20px;
  }
</style>