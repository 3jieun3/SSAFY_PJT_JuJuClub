<template>
  <div>
    <div class="container">
      <div class="text-on-img">
        <div class="background-wrap">
          <div class="content">
            <p id="question">{{ getQuestionByIndex[questionCount].question }}</p>
            <div class="ansButton d-flex justify-content-between">
              <question-answer-item
              v-for="answer in getQuestionByIndex[questionCount].answers"
              :key="answer"
              :answer="answer"></question-answer-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import QuestionAnswerItem from './QuestionAnswerItem.vue'

export default {
  components: {
    QuestionAnswerItem,
  },
  name: 'QuestionPage',
  computed: {
    ...mapState('drinks', ['questions']),
    ...mapGetters('drinks', ['getQuestionByIndex'])
  },
  data: function () {
    return {
      questionCount: 0,
      choose: []
    }
  }
}
</script>

<style scoped>
  .background-wrap {
    background-image: url(@/assets/recommendPage.jpeg);
    background-size: 1280px 720px;
    width: 1280px;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ansButton {
    width: 700px;
  }

  #question {
    color: white;
  }
</style>