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
import SingleProblem from '../../components/SingleProblem.vue'
export default {
  metaInfo() {
    return {
      title: 'Practice Converting Between Hexadecimal and Decimal!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'Practice your ability to convert between hexadecimal and binary values.'
        }
      ]
    }
  },
  data() {
    return {
      problemList: [
        {
          id: 1,
          question: 'Convert hexadecimal 4FA8 to decimal.',
          answer: 20392
        },
        {
          id: 2,
          question: 'Convert decimal 912 to hexadecimal.',
          answer: 390
        },
        {
          id: 3,
          question: 'Convert hexadecimal 784 to decimal.',
          answer: 1924
        },
        {
          id: 4,
          question: 'Convert decimal 19183 to hexadecimal.',
          answer: '4AEF'
        },
        {
          id: 5,
          question: 'Convert hexadecimal 98E3 to decimal.',
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
