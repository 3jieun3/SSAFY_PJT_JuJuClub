<template>
  <div>
    <button class="btn btn-warning">
    {{ answer }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'QuestionAnswerItem',
  props: {
    answer: String
  },
  methods: {
    ...mapActions
  }
}
</script>

<style>

</style>