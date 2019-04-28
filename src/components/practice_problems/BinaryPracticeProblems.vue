<template>
  <div>
    <transition name="slide" appear>
      <app-binary-problem-list></app-binary-problem-list>
    </transition>
  </div>
</template>

<script>
import BinaryProblemList from './BinaryProblemList.vue'
export default {
  components: {
    appBinaryProblemList: BinaryProblemList
  }
}
</script>
