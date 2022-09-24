<template>
  <button @click="chooseAnswer(answer)" class="btn btn-warning col-2 mx-5">
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
    ...mapActions('drinks', ['chooseAnswer'])
  }
}
</script>

<style scoped>
  button {
    width: auto;
  }
</style>