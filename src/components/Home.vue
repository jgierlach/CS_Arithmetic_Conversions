<template>
  <div class="container">
    <!-- Tag line -->
    <transition name="slide" appear>
      <div>
        <div class="container padding white-background move-down z-depth-4 center">
          <h3>Your computer science conversions with explanations!</h3>
        </div>
        <!-- Button navigations to the different conversions -->
        <div class="padding white-background move-down z-depth-4 center">
          <div class="row">
            <div class="col s12 m4">
              <button class="btn" @click="binaryToDecimal">Decimal To Binary</button>
            </div>
            <div class="col s12 m4">
              <button class="btn" @click="hexadecimalConversion">Decimal To Hex</button>
            </div>
            <div class="col s12 m4">
              <button class="btn" @click="binaryToDecimal">Binary To Decimal</button>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col s12 m12">
              <button class="btn" @click="floatingPoint">Floating Point to IEEE 754</button>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col s12 m4">
              <button class="btn" @click="onesAndTwosComp">Ones Complement</button>
            </div>
            <div class="col s12 m4">
              <button class="btn" @click="binaryAddition">Binary Addition</button>
            </div>
            <div class="col s12 m4">
              <button class="btn" @click="onesAndTwosComp">Twos Complement</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
    },
    hexadecimalConversion() {
      this.$router.push('/hexadecimal-conversions')
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
