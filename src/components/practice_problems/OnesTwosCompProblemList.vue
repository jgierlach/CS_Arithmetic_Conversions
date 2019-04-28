<template>
  <div class="container">
    <app-single-problem v-for="problem in problemList" :key="problem.id" :problem="problem"></app-single-problem>
  </div>
</template>

<script>
import SingleProblem from './SingleProblem.vue'
export default {
  data() {
    return {
      problemList: [
        {
          id: 1,
          question: 'Convert -88 to ones complement.',
          answer: 10100111
        },
        {
          id: 2,
          question: 'Convert -75 to twos complement.',
          answer: 10110101
        },
        {
          id: 3,
          question: 'Convert -56 to ones complement.',
          answer: 11000111
        },
        {
          id: 4,
          question: 'Convert -56 to twos complement.',
          answer: 11001000
        },
        {
          id: 5,
          question: 'Convert -44 to ones complement.',
          answer: 11010011
        },
      ]
    }
  },
  components: {
      appSingleProblem: SingleProblem
  }
}
</script>