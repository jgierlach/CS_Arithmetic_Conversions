<template>
  <div>
    <transition name="slide" appear>
      <div class="container">
        <!-- The header introducing what this conversion does -->
        <conversion-header :conversion_info="conversion_info" />

        <div
          :class="[darkMode ? darkTextBackground : whiteBackground]"
          class="center padding move-down z-depth-4"
        >
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <label :class="[darkMode ? whiteText : '']" for="valueToConvert"
                >Value To Convert</label
              >
              <input
                :class="[darkMode ? whiteText : '']"
                type="text"
                v-model="userInput"
              />
            </div>
          </div>
          <!-- This row contains the buttons for the initial conversions -->
          <div class="row">
            <!-- This column contains a button that will convert binary to decimal -->
            <div class="col s12 m6">
              <button class="btn button-margin" @click="convertBinaryToDecimal">
                Convert Binary To Decimal
              </button>
            </div>
            <!-- This column contains a button that will convert decimal to binary -->
            <div class="col s12 m6">
              <button class="btn button-margin" @click="convertDecimalToBinary">
                Convert Decimal To Binary
              </button>
            </div>
          </div>
          <!-- This is where the user can immediately see the result of their conversion -->
          <transition name="fade">
            <div
              v-if="showAnswer"
              :class="[darkMode ? darkTextBackground : whiteBackground]"
              class="container move-down row center z-depth-4"
            >
              <div class="col s12">
                <h5 :class="[darkMode ? whiteText : '']">
                  {{ userInputSaved }}
                  <sub>({{ userInputBase }})</sub>
                  = {{ output }}
                  <sub>({{ outputBase }})</sub>
                </h5>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>

    <!-- This is where the user will be able to see step by step how the conversion happens -->

    <!-- This begins the section where we conditionally render different parts of the dom based on what button the user presses  -->

    <!-- This section of the dom appears if the user clicks convert to decimal the result of the binary to decimal conversion along with all the steps will be rendered here -->
    <transition name="fade">
      <div
        v-if="showDecimalToBinaryConversionOperations"
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="row container center move-down padding z-depth-4"
      >
        <div class="col s12">
          <h2 :class="[darkMode ? whiteText : '']">Steps In Conversion</h2>
          <!-- Here is where we are displaying all the steps involved in the conversion -->
          <h3
            :class="[darkMode ? whiteText : '']"
            :key="index"
            v-for="(operation, index) in binaryToDecimalConversionArr"
          >
            {{ operation }}
          </h3>
          <!-- Here we display the final answer -->
          <h2 :class="[darkMode ? whiteText : '']">
            {{ userInputSaved }}
            <sub>({{ userInputBase }})</sub>
            = {{ output }}
            <sub>({{ outputBase }})</sub>
          </h2>
        </div>
      </div>
    </transition>

    <!-- This section of the dom appears if the user clicks convert to binary the result of the binary to decimal conversion along with all the steps will be rendered here -->
    <transition name="fade">
      <div
        v-if="showBinaryToDecimalConversionOperations"
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="row container center move-down padding z-depth-4"
      >
        <div class="col s12">
          <h2 :class="[darkMode ? whiteText : '']">Steps In Conversion</h2>

          <!-- Here is where we are displaying all the steps involved in the conversion -->
          <h3
            :class="[darkMode ? whiteText : '']"
            :key="index"
            v-for="(operation, index) in decimalToBinaryConversionArr"
          >
            {{ operation }}
          </h3>
          <!-- At the end of the conversion steps the final answer is displayed -->
          <h2 :class="[darkMode ? whiteText : '']">
            {{ userInputSaved }}
            <sub>({{ userInputBase }})</sub>
            = {{ output }}
            <sub>({{ outputBase }})</sub>
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
      title: 'Convert Binary To Decimal And Decimal To Binary!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'This tool allows you to convert base 2 binary values to decimal base 10, and base 10 decimal to base 2 binary. It shows you every step in the process, so you follow along and understand how these conversions happen.'
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
      output: 'Converted result will appear here!',
      outputBase: 0,
      showDecimalToBinaryConversionOperations: false,
      showBinaryToDecimalConversionOperations: false,
      showAnswer: false,
      binaryToDecimalConversionArr: [],
      decimalToBinaryConversionArr: [],
      conversion_info: {
        header: 'Convert Binary To Decimal And Decimal To Binary',
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
    convertBinaryToDecimal() {
      // save the user input to be referenced in the answer
      this.userInputSaved = this.userInput
      // Assign bases
      this.userInputBase = 2
      this.outputBase = 10
      // Show the answer
      this.showAnswer = true
      // We need to reset our binaryToDecimal Conversion arr from it's previous values
      this.binaryToDecimalConversionArr = []
      // We will add values to this number
      let finalValue = 0
      // Will hold all the binary values in an array so we can iterate over it
      let binaryInArray = [...this.userInput].reverse()
      // iterate over the array and if the index == 1 then do the power of 2 to i
      for (let i = 0; i < binaryInArray.length; i++) {
        if (binaryInArray[i] == '1') {
          finalValue += Math.pow(2, i)
          let currentValue = Math.pow(2, i)
          this.binaryToDecimalConversionArr.push(
            `2 to the power of ${i} = ${currentValue}`
          )
        }
      }
      // make sure the other block of conditional render is not showing
      this.showBinaryToDecimalConversionOperations = false
      this.showDecimalToBinaryConversionOperations = true
      this.output = finalValue
    },
    convertDecimalToBinary() {
      // save the user input to be referenced in the answer
      this.userInputSaved = this.userInput
      // Assign bases
      this.userInputBase = 10
      this.outputBase = 2
      // Show the answer
      this.showAnswer = true
      // We need to reset our binaryToDecimal Conversion arr from it's previous values
      this.decimalToBinaryConversionArr = []
      // convert the user input to an int
      let int = parseInt(this.userInput, 10)
      // create an array to hold the binary values of our division
      const binaryValues = []
      while (int != 0) {
        binaryValues.unshift(int % 2)
        // Lets add some operations to our array
        this.decimalToBinaryConversionArr.push(
          `2 goes into ${int}, ${Math.floor(
            int / 2
          )} times with a remainder of ${int % 2}`
        )
        int = Math.floor(int / 2)
      }
      // make sure the other block of conditional render is not showing
      this.showDecimalToBinaryConversionOperations = false
      this.showBinaryToDecimalConversionOperations = true
      this.output = binaryValues.join('')
    }
  }
}
</script>
