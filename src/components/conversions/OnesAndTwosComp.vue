<template>
  <div>
    <div class="container">
      <transition name="slide" appear>
        <!-- Header for the ones and twos complement -->
        <div class="container center white-background padding move-down z-depth-4">
          <h3>Convert to Ones and Twos Complement</h3>
        </div>
      </transition>
      <transition name="slide" appear>
        <div class="center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <!-- <label for="firstName">Value To Convert</label> -->
              <input type="text" v-model="userInput">
            </div>
          </div>
          <!-- This row contains the buttons for the initial conversions -->
          <div class="row">
            <!-- This column contains a button that will convert negative decimal values to ones complement binary -->
            <div class="col s12 m6">
              <button class="btn" @click="convertToOnesComp">Convert To Ones Complement</button>
            </div>
            <!-- This column contains a button that will convert negative decimal values to twos complement binary -->
            <div class="col s12 m6">
              <button class="btn" @click="convertToTwosComp">Convert To Twos Complement</button>
            </div>
          </div>
          <!-- This is where the user can immediately see the result of their conversion -->
          <div class="row">
            <div class="col s12">
              <h3>{{ output }}</h3>
            </div>
          </div>
          <!-- This is where the user will be able to see step by step how the conversion happens -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  isNegative,
  convertToBinary,
  appendZeroes,
  removeNegativeSign,
  swapOnesAndZeros,
  onesComplementConversion
} from './one_two_complement_util_functions.js'

import {
  isEqualLength,
  theLongerValue,
  theShorterValue,
  differenceInLength,
  appendZeros,
  addInputs,
  binaryAddition
} from './binary_addition_util_functions.js'

export default {
  data() {
    return {
      userInput: '',
      output: 'The result of your conversion will appear here!'
    }
  },
  methods: {
    convertToOnesComp() {
      this.output = onesComplementConversion(this.userInput)
    },
    convertToTwosComp() {
      let onesComp = onesComplementConversion(this.userInput)
      this.output = binaryAddition(onesComp, '1')
    }
  }
}
</script>

<style>
.white-background {
  background: white;
}

.move-down {
  margin-top: 4em;
}

.padding {
  padding: 1em;
}
</style>
