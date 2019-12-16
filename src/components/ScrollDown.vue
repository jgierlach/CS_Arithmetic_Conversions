<template>
  <div class="center">
    <h5 :class="[darkMode ? whiteText : '']">Scroll Down</h5>
    <i :class="[darkMode ? whiteText : '']" class="medium material-icons">arrow_downward</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whiteText: 'white-text'
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>