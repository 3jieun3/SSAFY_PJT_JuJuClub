<template>
  <div class="recommendImg">
    <div class="que row row-cols-1"> 
      <div class="question">
        <h1 class="col" id="question">{{ getQuestion[questionEtc.questionCount].question }}</h1>
      </div>
      <div class="ansButton col row row-cols-1 row-cols-sm-3 row-cols-md-5">
        <question-answer-item
        v-for="answer in getQuestion[questionEtc.questionCount].answers"
        :key="answer"
        :answer="answer"></question-answer-item>
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
    ...mapState('drinks', ['questions','questionEtc']),
    ...mapGetters('drinks', ['getQuestion'])
  },
}
</script>

<style scoped>
  .recommendImg {
    background: url(@/assets/recommendPage.png) no-repeat center;
    position: relative;
    height: 80vh; 
  }

  .que {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
  }

  .question {
    padding-bottom: 50px;
  }

  .ansButton {
    justify-content: space-evenly;
    padding-top: 50px;
  }

  #question {
    color: white;
  }
</style>