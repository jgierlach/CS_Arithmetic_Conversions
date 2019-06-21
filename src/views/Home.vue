<template>
  <transition name="slide" appear>
    <div class="container">
      <!-- The header explaining what conversions are possible -->
      <div class="container center white-background padding move-down z-depth-4">
        <div class="row">
          <div class="col s12">
            <h3>Convert between Decimal, Binary, Hexadecimal, and Octal!</h3>
          </div>
        </div>
        <!-- Call to action button directing the user to the page with the full list of conversions -->
        <div class="row">
          <div class="col s12">
            <button class="btn-large" @click="navigateToAllConversion">See full list of conversions!</button>
          </div>
        </div>
      </div>

      <div class="center white-background padding move-down z-depth-4">
        <div class="row">
          <div class="col s6 input-field">
            <select v-model="selectedConversion">
              <option
                v-for="(option, index) in options"
                :key="index"
                :value="option"
                :selected="option == 'Decimal To Binary'"
              >{{ option }}</option>
            </select>
          </div>
          <div class="col s6 input-field">
            <label>Value To Convert</label>
            <input type="text" v-model="userInput">
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <button class="btn-large" @click="convert">Convert!</button>
          </div>
        </div>

        <!-- This is where the user can immediately see the result of their conversion -->
        <div class="container">
          <div class="container move-down row center white-background z-depth-4">
            <div class="col s12">
              <h5>{{ output }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {decimalToBinary} from '../utils/decimal_to_binary'
import {binaryToDecimal} from '../utils/binary_to_decimal'
import {hexadecimalToDecimal} from '../utils/hexadecimal_to_decimal'
import {decimalToHexadecimal} from '../utils/decimal_to_hexadecimal'
import {decimalToOctal} from '../utils/decimal_to_octal'
import {octalToDecimal} from '../utils/octal_to_decimal'

export default {
  mounted() {
    window.addEventListener('load', () => {
      var elems = document.querySelectorAll('select')
      var instances = M.FormSelect.init(elems, this.options)
    })
    this.$forceUpdate()
  },
  updated() {
    var elems = document.querySelectorAll('select')
    var instances = M.FormSelect.init(elems, this.options)
  },
  data() {
    return {
      userInput: '',
      output: 'The result will appear here!',
      options: [
        'Decimal to Binary',
        'Binary to Decimal',
        'Decimal to Hexadecimal',
        'Hexadecimal to Decimal',
        'Decimal to Octal',
        'Octal to Decimal'
      ],
      selectedConversion: 'Decimal To Binary'
    }
  },
  methods: {
    navigateToAllConversion() {
      this.$router.push('/all-conversions')
    },
    convert() {
      switch (this.selectedConversion) {
        case 'Decimal to Binary':
          this.output = `The binary value is ${decimalToBinary(this.userInput)}`
          break
        case 'Binary to Decimal':
          this.output = `The decimal value is ${binaryToDecimal(
            this.userInput
          )}`
          break
        case 'Decimal to Hexadecimal':
          this.output = `The hexadecimal value is ${decimalToHexadecimal(
            this.userInput
          )}`
          break
        case 'Hexadecimal to Decimal':
          this.output = `The decimal value is ${hexadecimalToDecimal(
            this.userInput
          )}`
          break
        case 'Decimal to Octal':
          this.output = `The octal value is ${decimalToOctal(this.userInput)}`
          break
        case 'Octal to Decimal':
          this.output = `The decimal value is ${octalToDecimal(this.userInput)}`
          break
        default:
          return
      }
    }
  }
}
</script>
