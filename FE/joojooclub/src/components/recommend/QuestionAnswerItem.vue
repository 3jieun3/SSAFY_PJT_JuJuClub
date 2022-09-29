<template>
  <button @click="pushAnswer(answer)" class="btn btn-warning mx-5">
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
  button {
    width: auto;
    margin-bottom: 5vh;
  }
</style>