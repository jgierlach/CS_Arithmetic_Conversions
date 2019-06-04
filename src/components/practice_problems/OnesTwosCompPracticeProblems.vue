<template>
  <div>
    <transition name="slide" appear>
      <app-ones-twos-comp-problem-list></app-ones-twos-comp-problem-list>
    </transition>
  </div>
</template>

<script>
import OnesTwosCompProblemList from './OnesTwosCompProblemList.vue'
export default {
  components: {
    appOnesTwosCompProblemList: OnesTwosCompProblemList
  }
}
</script>
