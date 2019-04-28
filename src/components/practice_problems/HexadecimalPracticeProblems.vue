<template>
  <div>
    <transition name="slide" appear>
      <app-hexadecimal-problem-list></app-hexadecimal-problem-list>
    </transition>
  </div>
</template>

<script>
import HexadecimalProblemList from './HexadecimalProblemList.vue'
export default {
  components: {
    appHexadecimalProblemList: HexadecimalProblemList
  }
}
</script>