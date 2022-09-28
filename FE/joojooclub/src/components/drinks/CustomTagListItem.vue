<template>
  <button
  :class="{ 'selected' : customTag.isClicked }"
  @click="customTagClicked([6, index, customTag])">
  #{{ customTag.tagName }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CustomTagListItem',
  props: {
    customTag: Object,
    index: Number,
  },
  methods: {
    ...mapActions('drinks', ['customTagClicked']),
  },
}
</script>

<style scoped>

  button {
    font-size: min(4vw, 1rem);
  }

  .selected {
    background-color: bisque;
  }
</style>