<template>
  <div>
    <transition name="slide" appear>
      <div>
        <!-- Header saying what this componenet does -->
        <div class="container center white-background padding move-down z-depth-4">
          <h3>Add binary numbers together!</h3>
        </div>
        <!-- This will display two fields where the user can enter values and click the add button -->
        <div class="container center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 m6 input-field">
              <!-- Input field for the first number they want to add -->
              <input type="text" v-model="value1">
            </div>
            <div class="col s12 m6 input-field">
              <!-- Input field for the second number they want to add -->
              <input type="text" v-model="value2">
            </div>
          </div>
          <!-- This row contains the buttons for the IEEE 754 conversion -->
          <div class="row">
            <!-- This column contains a button that will convert floating point to IEEE 754 format -->
            <div class="col s12 m12">
              <button class="btn" @click="addBinaryNumbers">Add Binary Numbers</button>
            </div>
          </div>
          <!-- This is where the user can immediately see the result of their conversion -->
          <div class="row">
            <div class="col s12">
              <h3>{{ output }}</h3>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
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
      value1: '',
      value2: '',
      output: 'The sum will appear here!'
    }
  },
  methods: {
    addBinaryNumbers() {
      this.output = binaryAddition(this.value1, this.value2)
    }
  }
}
</script>
