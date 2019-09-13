<template>
  <div
    :class="[darkMode ? darkTextBackground : whiteBackground]"
    class="container center padding move-down z-depth-4"
  >
    <div class="row">
      <div class="col s12">
        <h3 :class="[darkMode ? whiteText : '']">
          {{ conversion_info.header }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['conversion_info'],
  data() {
    return {
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text'
    }
  },
  methods: {
    navigateToLearn() {
      this.$router.push(this.conversion_info.learn)
    },
    navigateToPractice() {
      this.$router.push(this.$router.push(this.conversion_info.practice))
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>
