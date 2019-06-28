<template>
  <div class="center white-background padding move-down z-depth-4">
    <div class="row">
      <div class="col s12">
        <h3>{{ problem.question }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s8">
        <input type="text" v-model="userAnswer">
      </div>
      <div class="col s4">
        <button class="btn" @click="checkAnswer">Check Answer</button>
      </div>
    </div>
    <transition name="fade">
      <app-correct-answer v-if="isCorrect"></app-correct-answer>
      <app-wrong-answer v-else-if="isFalse"></app-wrong-answer>
    </transition>
  </div>
</template>

<script>
import CorrectAnswer from './CorrectAnswer.vue'
import WrongAnswer from './WrongAnswer.vue'
export default {
  props: ['problem'],
  data() {
    return {
      userAnswer: '',
      isCorrect: false,
      isFalse: false
    }
  },
  methods: {
    checkAnswer() {
      if (this.userAnswer == this.problem.answer) {
        this.isCorrect = true
        this.isFalse = false
      } else {
        this.isCorrect = false
        this.isFalse = true
      }
    }
  },
  components: {
    appCorrectAnswer: CorrectAnswer,
    appWrongAnswer: WrongAnswer
  }
}
</script>
