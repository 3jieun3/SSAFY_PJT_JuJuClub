<template>
  <div>
    <question-page></question-page>
  </div>
</template>

<script>
import QuestionPage from '@/components/recommend/QuestionPage.vue';

export default {

  name: 'RecommendView',
  components: {
    QuestionPage,
  },
  data: function () {
    return {
      questionCount: 0
    }
  }
  }
</script>

<style>

</style>