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
          question: 'Add binary values 1000 and 101.',
          answer: 1101
        },
        {
          id: 2,
          question: 'Add binary values 101010 and 10111.',
          answer: 1000001
        },
        {
          id: 3,
          question: 'Add binary values 10101010 and 101010101.',
          answer: 111111111
        },
        {
          id: 4,
          question: 'Add binary values 11111 and 1111111.',
          answer: 10011110
        },
        {
          id: 5,
          question: 'Add binary values 11111 101010111.',
          answer: 101110110
        }
      ]
    }
  },
  components: {
    appSingleProblem: SingleProblem
  }
}
</script>
