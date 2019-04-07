<template>
  <div class="container center white-background padding move-down z-depth-4">
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
</template>

<script>
import {
  isNegative,
  convertToBinary,
  appendZeroes,
  removeNegativeSign,
  swapOnesAndZeros
} from './one_two_complement_util_functions.js'

export default {
  data() {
    return {
      userInput: '',
      output: ''
    }
  },
  methods: {
    convertToOnesComp() {
      let input = this.userInput
      // We'll store the our converted values here
      let convertedValues = []
      // Check that the input is negative
      if (isNegative(input)) {
        // We know we have a negative number so let's remove that negative sign
        input = removeNegativeSign(input)
        // convert the input to normal binary
        let binaryString = convertToBinary(input)
        // if the length of this value is less than our allotted 8 bits we will have to append 0's until it is
        if (binaryString.length < 8) {
          // We determine the number of values we must append by subtracting the length of the string form 8
          let numValuesToAppend = 8 - binaryString.length
          binaryString = appendZeroes(binaryString, numValuesToAppend)
        }
        // For the one's onesComplementConversion perform the swap of 1's and swapOnesAndZeros
        convertedValues = swapOnesAndZeros(binaryString)
        // return converted array values as a string
        console.log(convertedValues.join(''))
        this.output = convertedValues.join('')
      } else {
        this.output =
          'The value you entered was not negative so it was just converted to normal binary ' +
          convertToBinary(input)
      }
    },
    convertToTwosComp() {}
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
