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
          question: 'Convert 10101010 from binary to decimal.',
          answer: 170
        },
        {
          id: 2,
          question: 'Convert 578 from decimal to binary.',
          answer: 1001000010
        },
        {
          id: 3,
          question: 'Convert 1011111 from binary to decimal.',
          answer: 95
        },
        {
          id: 4,
          question: 'Convert 234 from decimal to binary.',
          answer: 11101010
        },
        {
          id: 5,
          question: 'Convert 1010101 from binary to decimal.',
          answer: 85
        },
        {
          id: 6,
          question: 'Convert 387 from decimal to binary.',
          answer: 110000011
        }
      ]
    }
  },
  components: {
    appSingleProblem: SingleProblem
  }
}
</script>
