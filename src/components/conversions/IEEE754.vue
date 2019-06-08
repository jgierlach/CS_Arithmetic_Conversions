<template>
  <div>
    <transition name="slide" appear>
      <div class="container">
        <div
          class="container center white-background padding move-down z-depth-4"
        >
          <h3>Convert Floating Point Values to IEEE754 Format</h3>
        </div>
        <div class="center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <!-- <label for="firstName">Value To Convert</label> -->
              <input type="text" v-model="userInput" />
            </div>
          </div>
          <!-- This row contains the buttons for the IEEE 754 conversion -->
          <div class="row">
            <!-- This column contains a button that will convert floating point to IEEE 754 format -->
            <div class="col s12 m12">
              <button class="btn" @click="convertToIEEE754">
                Convert Floating Point to IEEE 754 format
              </button>
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

    <transition name="fade" appear>
      <div
        v-if="showIEEEOperations"
        class="container center white-background padding move-down z-depth-4"
      >
        <h3 v-for="(operation, index) in iEEEOperationsArr" :key="index">
          {{ operation }}
        </h3>

        <table class="centered responsive-table striped">
          <thead>
            <tr>
              <th>Sign bit</th>
              <th>Exponent</th>
              <th>Mantissa</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{ signBit }}</td>
              <td>{{ exponent }}</td>
              <td>{{ mantissa }}</td>
            </tr>
          </tbody>
        </table>
        <h4 :style="{background: 'yellow'}">Final answer = {{ output }}</h4>
      </div>
    </transition>
  </div>
</template>

<script>
import {floatingPoint} from './iEEE754_util_functions.js'
export default {
  data() {
    return {
      userInput: '',
      output: '',
      showIEEEOperations: false,
      iEEEOperationsArr: []
    }
  },
  methods: {
    convertToIEEE754() {
      this.output = floatingPoint(this.userInput)
    }
  }
}
</script>