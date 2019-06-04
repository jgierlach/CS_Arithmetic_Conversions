<template>
  <div>
    <transition name="slide" appear>
      <app-binary-addition-problem-list></app-binary-addition-problem-list>
    </transition>
  </div>
</template>

<script>
import BinaryAdditionProblemList from './BinaryAdditionProblemList.vue'
export default {
  components: {
    appBinaryAdditionProblemList: BinaryAdditionProblemList
  }
}
</script>
