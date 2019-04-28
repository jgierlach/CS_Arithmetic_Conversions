<template>
  <div>
    <transition name="slide" appear>
      <div>
        <!-- Tag line -->
        <div class="container padding white-background move-down z-depth-4 center">
            <h3>Your computer science conversions with explanations!</h3>
        </div>
        <!-- Home page list item -->
        <appHomePageList></appHomePageList>
      </div>
    </transition>
  </div>
</template>

<script>
import HomePageList from './HomePageList.vue'
export default {
  methods: {
    binaryToDecimal() {
      this.$router.push('/binary-hex-decimal')
    },
    floatingPoint() {
      this.$router.push('/ieee-754')
    },
    onesAndTwosComp() {
      this.$router.push('/ones-and-twos-complement')
    },
    binaryAddition() {
      this.$router.push('/binary-addition')
    },
    hexadecimalConversion() {
      this.$router.push('/hexadecimal-conversions')
    }
  },
  components: {
    appHomePageList: HomePageList
  }
}
</script>


<style scoped>
.padding {
  padding: 1.5em;
}

.white-background {
  background: white;
}

.move-down {
  margin-top: 3em;
}
</style>
