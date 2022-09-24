<template>
  <button
  :class="{ 'selected' : customTag.isClicked }"
  @click="tagClicked([6, index, customTag])">
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
    ...mapActions('drinks', ['tagClicked']),
  },
}
</script>

<style>

  .selected {
    background-color: bisque;
  }
</style>