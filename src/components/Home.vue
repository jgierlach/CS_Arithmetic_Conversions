<template>
  <div class="container">
    <div class="container padding white-background move-down z-depth-4 center">
      <h3>Your computer science conversions with explanations!</h3>
    </div>
    <div class="container padding white-background move-down z-depth-4 center">
      <div class="row">
        <button class="btn col s12 m4" @click="binaryToDecimal">Decimal To Binary</button>
        <button class="btn col s12 m4" @click="binaryToDecimal">Binary To Decimal</button>
        <button class="btn col s12 m4" @click="binaryToDecimal">Decimal To Hex</button>
      </div>
      <div class="row">
        <button class="btn col s12 m3" @click="floatingPoint">Floating Point to IEEE 754</button>
        <button class="btn col s12 m3" @click="onesAndTwosComp">Ones Complement</button>
        <button class="btn col s12 m3" @click="onesAndTwosComp">Twos Complement</button>
        <button class="btn col s12 m3" @click="binaryAddition">Binary Addition</button>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
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
