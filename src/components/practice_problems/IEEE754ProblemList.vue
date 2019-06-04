<template>
  <div class="container">
    <app-single-problem
      v-for="problem in problemList"
      :key="problem.id"
      :problem="problem"
    ></app-single-problem>
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
          question: 'Convert floating point 45.625 to IEEE754.',
          answer: 20392
        },
        {
          id: 2,
          question: 'Convert floating point 45.625 to IEEE754.',
          answer: 390
        },
        {
          id: 3,
          question: 'Convert floating point 45.625 to IEEE754.',
          answer: 1924
        },
        {
          id: 4,
          question: 'Convert floating point 45.625 to IEEE754.',
          answer: '4AEF'
        },
        {
          id: 5,
          question: 'Convert floating point 45.625 to IEEE754.',
          answer: 39139
        }
      ]
    }
  },
  components: {
    appSingleProblem: SingleProblem
  }
}
</script>
