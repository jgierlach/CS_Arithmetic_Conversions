<template>
  <div>
    <transition name="slide" appear>
      <app-i-e-e-e754-problem-list></app-i-e-e-e754-problem-list>
    </transition>
  </div>
</template>

<script>
import IEEE754ProblemList from './IEEE754ProblemList.vue'
export default {
  components: {
    appIEEE754ProblemList: IEEE754ProblemList
  }
}
</script>
