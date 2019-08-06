<template>
  <div>
    <transition name="slide" appear>
      <div class="container">
        <!-- <div class="container center white-background padding move-down z-depth-4">
          <h3>Convert Floating Point Values to IEEE754 Format</h3>
        </div>-->
        <conversion-header :conversion_info="conversion_info" />
        <div class="center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <label for="valueToConvert">Value To Convert</label>
              <input type="text" v-model="userInput" />
            </div>
          </div>
          <!-- This row contains the buttons for the IEEE 754 conversion -->
          <div class="row">
            <!-- This column contains a button that will convert floating point to IEEE 754 format -->
            <div class="col s12 m12">
              <button
                class="btn"
                @click="convertToIEEE754"
              >Convert Floating Point to IEEE 754 format</button>
            </div>
          </div>
          <!-- This is where the user can immediately see the result of their conversion -->
          <div class="container move-down row center white-background z-depth-4">
            <div class="col s12">
              <h5>{{ output }}</h5>
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
        <h3 v-for="(operation, index) in iEEEOperationsArr" :key="index">{{ operation }}</h3>

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
import ConversionHeader from '../../components/ConversionHeader'
import {floatingPoint} from '../../utils/floating_point_to_iEEE754'

export default {
  metaInfo() {
    return {
      title: 'Convert Floating Point Decimal To IEEE754 Format!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'This tool allows you to floating point decimal values to IEEE754 format. It shows you every step in the process, so you follow along and understand how these conversions happen.'
        }
      ]
    }
  },
  data() {
    return {
      userInput: '',
      output: 'Converted result will appear here!',
      showIEEEOperations: false,
      iEEEOperationsArr: [],
      conversion_info: {
        header: 'Convert Floating Point Values to IEEE754 Format',
        learn: '',
        practice: ''
      }
    }
  },
  components: {
    ConversionHeader
  },
  methods: {
    convertToIEEE754() {
      this.output = floatingPoint(this.userInput)
    }
  }
}
</script>
