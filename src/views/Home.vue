<template>
  <transition name="slide" appear>
    <div class="container">
      <!-- The header explaining what conversions are possible -->
      <div
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="container center padding move-down z-depth-4"
      >
        <div class="row">
          <div class="col s12">
            <h3
              :class="[darkMode ? whiteText : '']"
            >Convert between Decimal, Binary, Hexadecimal, and Octal!</h3>
          </div>
        </div>
        <!-- Call to action button directing the user to the page with the full list of conversions -->
        <div class="row">
          <div class="col s12">
            <button class="btn-large" @click="navigateToAllConversion">See full list of conversions!</button>
          </div>
        </div>
      </div>

      <div
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="center padding move-down z-depth-4"
      >
        <div class="row">
          <div :class="[darkMode ? whiteText : '']" class="col s6 input-field">
            <select :class="[darkMode ? whiteText : '']" v-model="selectedConversion">
              <option
                :class="[darkMode ? whiteText : '']"
                v-for="(option, index) in options"
                :key="index"
                :value="option"
                :selected="option"
              >{{ option }}</option>
            </select>
          </div>
          <div class="input-field col s6">
            <label :class="[darkMode ? whiteText : '']" for="valueToConvert">Value To Convert</label>
            <input
              :class="[darkMode ? whiteText : '']"
              id="valueToConvert"
              type="text"
              name="userInput"
              v-model="userInput"
            />
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <button class="btn-large" @click="convert">Convert!</button>
          </div>
        </div>

        <!-- This is where the user can immediately see the result of their conversion -->
        <transition name="fade">
          <div
            v-if="showAnswer"
            :class="[darkMode ? darkTextBackground : whiteBackground]"
            class="container move-answer-down row center z-depth-4"
          >
            <div class="col s12">
              <h5 :class="[darkMode ? whiteText : '']">
                {{inputFromUser}}
                <sub>({{userInputBase}})</sub>
                = {{output}}
                <sub>({{outputBase}})</sub>
              </h5>
            </div>
          </div>
        </transition>
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
  metaInfo() {
    return {
      title: 'CS Conversions!',
      meta: [
        {
          name: 'description',
          content:
            'Easily convert between decimal, binary, octal, and hexadecimal.'
        }
      ]
    }
  },
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
      showAnswer: false,
      userInputBase: 0,
      outputBase: 0,
      userInput: '',
      inputFromUser: '',
      output: '',
      options: [
        'Decimal to Binary',
        'Binary to Decimal',
        'Decimal to Hexadecimal',
        'Hexadecimal to Decimal',
        'Decimal to Octal',
        'Octal to Decimal'
      ],
      selectedConversion: 'Decimal To Binary',
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text'
    }
  },
  methods: {
    navigateToAllConversion() {
      this.$router.push('/all-conversions')
    },
    convert() {
      switch (this.selectedConversion) {
        case 'Decimal to Binary':
          this.showAnswer = true
          this.inputFromUser = this.userInput
          this.userInputBase = 10
          this.outputBase = 2
          this.output = decimalToBinary(this.userInput)
          break
        case 'Binary to Decimal':
          this.showAnswer = true
          this.inputFromUser = this.userInput
          this.userInputBase = 2
          this.outputBase = 10
          this.output = binaryToDecimal(this.userInput)
          break
        case 'Decimal to Hexadecimal':
          this.showAnswer = true
          this.inputFromUser = this.userInput
          this.userInputBase = 10
          this.outputBase = 16
          this.output = decimalToHexadecimal(this.userInput)
          break
        case 'Hexadecimal to Decimal':
          this.showAnswer = true
          this.inputFromUser = this.userInput
          this.userInputBase = 16
          this.outputBase = 10
          this.output = hexadecimalToDecimal(this.userInput)
          break
        case 'Decimal to Octal':
          this.showAnswer = true
          this.inputFromUser = this.userInput
          this.userInputBase = 10
          this.outputBase = 8
          this.output = decimalToOctal(this.userInput)
          break
        case 'Octal to Decimal':
          this.showAnswer = true
          this.inputFromUser = this.userInput
          this.userInputBase = 8
          this.outputBase = 10
          this.output = octalToDecimal(this.userInput)
          break
        default:
          return
      }
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style>
.move-answer-down {
  margin-top: 3em;
}
</style>
