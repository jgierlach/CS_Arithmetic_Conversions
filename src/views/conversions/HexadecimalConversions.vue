<template>
  <div class="container">
    <transition name="slide" appear>
      <div>
        <conversion-header :conversion_info="conversion_info" />
        <div
          :class="[darkMode ? darkTextBackground : whiteBackground]"
          class="center padding move-down z-depth-4"
        >
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <label :class="[darkMode ? whiteText : '']" for="valueToConvert">Value To Convert</label>
              <input :class="[darkMode ? whiteText : '']" type="text" v-model="userInput" />
            </div>
          </div>
          <!-- This row contains the buttons for the initial conversions -->
          <div class="row">
            <!-- This column contains a button that will convert decimal to hex -->
            <div class="col s12 m6">
              <button class="btn button-margin" @click="convertDecimalToHex">Convert Decimal To Hex</button>
            </div>
            <!-- This column contains a button that will convert hex to decimal -->
            <div class="col s12 m6">
              <button class="btn button-margin" @click="convertHexToDecimal">Convert Hex To Decimal</button>
            </div>
          </div>
          <!-- This is where the user can immediately see the result of their conversion -->
          <div
            v-if="showAnswer"
            :class="[darkMode ? whiteText : '']"
            class="container move-down row center z-depth-4"
          >
            <div class="col s12">
              <h5 :class="[darkMode ? whiteText : '']">
                {{userInputSaved}}
                <sub>({{userInputBase}})</sub>
                = {{ output }}
                <sub>({{outputBase}})</sub>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- This section of the dom appears if the user clicks convert to decimal the result of the binary to decimal conversion along with all the steps will be rendered here -->
    <transition name="fade">
      <div
        v-if="showDecimalToHexConversionOperations"
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="row center move-down padding z-depth-4"
      >
        <div class="col s12">
          <h2 :class="[darkMode ? whiteText : '']">Steps In Conversion</h2>
          <!-- Here is where we are displaying all the steps involved in the conversion -->
          <h3
            :class="[darkMode ? whiteText : '']"
            :key="index"
            v-for="(operation, index) in decimalToHexConversionArr"
          >{{ operation }}</h3>
          <!-- Here we display the final answer -->
          <h2 :class="[darkMode ? whiteText : '']">
            {{userInputSaved}}
            <sub>({{userInputBase}})</sub>
            = {{ output }}
            <sub>({{outputBase}})</sub>
          </h2>
        </div>
      </div>
    </transition>

    <!-- This section of the dom appears if the user clicks convert to binary the result of the binary to decimal conversion along with all the steps will be rendered here -->
    <transition name="fade">
      <div
        v-if="showHexToDecimalConversionOperations"
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="row center move-down padding z-depth-4"
      >
        <div class="col s12">
          <h2 :class="[darkMode ? whiteText : '']">Steps In Conversion</h2>

          <!-- Here is where we are displaying all the steps involved in the conversion -->
          <h3
            :class="[darkMode ? whiteText : '']"
            :key="index"
            v-for="(operation, index) in hexToDecimalConversionArr"
          >{{ operation }}</h3>
          <!-- At the end of the conversion steps the final answer is displayed -->
          <h2 :class="[darkMode ? whiteText : '']">
            {{userInputSaved}}
            <sub>({{userInputBase}})</sub>
            = {{ output }}
            <sub>({{outputBase}})</sub>
          </h2>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ConversionHeader from '../../components/ConversionHeader'

export default {
  metaInfo() {
    return {
      title: 'Convert Hexadecimal To Decimal And Decimal To Hexadecimal!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'This tool allows you to convert base 16 hexadecimal values to base 10 decimal, and base 10 decimal to base 16 hexadecimal. It shows you every step in the process, so you follow along and understand how these conversions happen.'
        }
      ]
    }
  },
  data() {
    return {
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text',
      userInput: '',
      userInputSaved: '',
      userInputBase: 0,
      output: '',
      outputBase: 0,
      showAnswer: false,
      showDecimalToHexConversionOperations: false,
      showHexToDecimalConversionOperations: false,
      hexToDecimalConversionArr: [],
      decimalToHexConversionArr: [],
      numberLetterMapping: {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
      },
      letterNumberMapping: {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
      },
      conversion_info: {
        header: 'Convert Hex to Decimal and Decimal to Hex',
        learn: '',
        practice: ''
      }
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  },
  components: {
    ConversionHeader
  },
  methods: {
    convertDecimalToHex() {
      // save user input
      this.userInputSaved = this.userInput
      // set the bases for the answer
      this.userInputBase = 10
      this.outputBase = 16
      // show the output
      this.showAnswer = true
      // clear the operations arr of previous values
      this.decimalToHexConversionArr = []
      // convert the user input to an int
      let int = parseInt(this.userInput, 10)
      // Where we'll store the operation from our while loop
      let conversionResults = []
      while (int != 0) {
        if (int % 16 > 9) {
          console.log('from inside conditional', int % 16)
          let value = this.numberLetterMapping[int % 16]
          this.decimalToHexConversionArr.push(
            `16 goes into ${int}, ${Math.floor(
              int / 16
            )} times with a remainder of ${int %
              16}, because the remainder is greater than 9 we have to look at the letter values that represent values 10 through 15 in hex code. In this case that value would be ${value}`
          )
          conversionResults.unshift(value)
        } else {
          this.decimalToHexConversionArr.push(
            `16 goes into ${int}, ${Math.floor(
              int / 16
            )} times with a remainder of ${int % 16}`
          )
          conversionResults.unshift(int % 16)
        }
        int = Math.floor(int / 16)
      }
      // the other block of conditional code will not render
      this.showHexToDecimalConversionOperations = false
      // make the conditional block of code render
      this.showDecimalToHexConversionOperations = true
      this.output = conversionResults.join('')
    },
    convertHexToDecimal() {
      // save user input
      this.userInputSaved = this.userInput
      // set the bases
      this.userInputBase = 16
      this.outputBase = 10
      // show the output
      this.showAnswer = true
      // clear the operations arr of previous values
      this.hexToDecimalConversionArr = []
      // We will add values to this number
      let finalValue = 0
      // Will hold all the binary values in an array so we can iterate over it
      let hexInArray = [...this.userInput].reverse()
      // iterate over the array and if the index == 1 then do the power of 2 to i
      for (let i = 0; i < hexInArray.length; i++) {
        if (Object.keys(this.letterNumberMapping).includes(hexInArray[i])) {
          finalValue +=
            this.letterNumberMapping[hexInArray[i]] * Math.pow(16, i)
          this.hexToDecimalConversionArr.push(
            `${
              this.letterNumberMapping[hexInArray[i]]
            } x 16 to the power ${i} is ${this.letterNumberMapping[
              hexInArray[i]
            ] * Math.pow(16, i)}`
          )
        } else {
          finalValue += parseInt(hexInArray[i], 10) * Math.pow(16, i)
          this.hexToDecimalConversionArr.push(
            `${hexInArray[i]} x 16 to the power of ${i} is ${parseInt(
              hexInArray[i],
              10
            ) * Math.pow(16, i)}`
          )
        }
      }
      // the other block of conditional code will not render
      this.showDecimalToHexConversionOperations = false
      // make the conditional block of code render
      this.showHexToDecimalConversionOperations = true
      this.output = finalValue
    }
  }
}
</script>
