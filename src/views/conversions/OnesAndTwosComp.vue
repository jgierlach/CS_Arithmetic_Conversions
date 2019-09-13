<template>
  <div>
    <div class="container">
      <transition name="slide" appear>
        <!-- Header for the ones and twos complement -->
        <conversion-header :conversion_info="conversion_info" />
      </transition>
      <transition name="slide" appear>
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
            <!-- This column contains a button that will convert negative decimal values to ones complement binary -->
            <div class="col s12 m6">
              <button class="btn button-margin" @click="convertToOnesComp">
                Convert To Ones Complement
              </button>
            </div>
            <!-- This column contains a button that will convert negative decimal values to twos complement binary -->
            <div class="col s12 m6">
              <button class="btn button-margin" @click="convertToTwosComp">
                Convert To Twos Complement
              </button>
            </div>
          </div>
          <!-- This is where the user can immediately see the result of their conversion -->
          <div
            v-if="showOutput"
            :class="[darkMode ? darkTextBackground : whiteBackground]"
            class="container move-down row center z-depth-4"
          >
            <div class="col s12">
              <h5 :class="[darkMode ? whiteText : '']">
                {{ savedInput }} = {{ output }}
                <sub>{{ currentComplement }}</sub>
              </h5>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- This is where the user will be able to see step by step how the ones complement conversion happens -->
    <transition name="fade" appear>
      <div
        v-if="showOnesComplementOperations"
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="row container center move-down padding z-depth-4"
      >
        <div class="col s12">
          <h2 :class="[darkMode ? whiteText : '']">Steps in conversion</h2>
          <h3
            :class="[darkMode ? whiteText : '']"
            v-for="(operation, index) in operationsArr"
            :key="index"
          >
            {{ operation }}
          </h3>
          <h2 :class="[darkMode ? whiteText : '']">
            The final answer is {{ output }}
          </h2>
        </div>
      </div>
    </transition>

    <!-- This is where the user will be able to see step by step how the twos complement conversion happens -->
    <transition name="fade" appear>
      <div
        v-if="showTwosComplementOperations"
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="row container center move-down padding z-depth-4"
      >
        <div class="col s12">
          <h2 :class="[darkMode ? whiteText : '']">Steps in conversion</h2>
          <h3
            :class="[darkMode ? whiteText : '']"
            v-for="(operation, index) in operationsArr"
            :key="index"
          >
            {{ operation }}
          </h3>
          <h2 :class="[darkMode ? whiteText : '']">
            The final answer is {{ output }}
          </h2>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ConversionHeader from '../../components/ConversionHeader'
import {
  onesComplementConversion,
  isNegative,
  removeNegativeSign,
  appendZeroes
} from '../../utils/one_two_complement'
import {binaryAddition} from '../../utils/binary_addition'

export default {
  metaInfo() {
    return {
      title: 'Convert Negative Numbers To Ones And Twos Complement!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'This tool allows you to convert negative numbers to ones and twos complement. It shows you every step in the process, so you follow along and understand how these conversions happen.'
        }
      ]
    }
  },
  data() {
    return {
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text',
      currentComplement: '',
      userInput: '',
      savedInput: '',
      output: '',
      showOutput: false,
      operationsArr: [],
      showOnesComplementOperations: false,
      showTwosComplementOperations: false,
      conversion_info: {
        header: 'Convert Ones and Twos Complement',
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
    convertToOnesComp() {
      this.currentComplement = 'ones complement'
      // Save input for display in answer
      this.savedInput = this.userInput
      // Set show output to true
      this.showOutput = true
      // Reset the operations arr to get rid of previous operations
      this.operationsArr = []
      // Check that the users input is negative
      if (isNegative(this.userInput)) {
        // remove the negative sign from the user input
        let input = removeNegativeSign(this.userInput)

        this.operationsArr.push(
          `Our first step is to strip away the negative sign and convert ${input} to binary.`
        )

        // convert the string input to a number
        let int = parseInt(input, 10)
        // create an array to hold the binary values of our division
        const binaryValues = []
        while (int != 0) {
          binaryValues.unshift(int % 2)
          // Lets add some operations to our array
          this.operationsArr.push(
            `2 goes into ${int}, ${Math.floor(
              int / 2
            )} times with a remainder of ${int % 2}`
          )
          int = Math.floor(int / 2)
        }

        // create a variable that holds the users input converted to binary
        let binaryString = binaryValues.join('')

        // if the length of our binary string is less than 8 we have to append 0s until it is equal to 8
        if (binaryString.length < 8) {
          this.operationsArr.push(
            `It looks like ${binaryString} is less than 8 bits long. For the sake of wanting to represent ones complement as an 8 bit string let's append 0s until we have an 8 bit string.`
          )
          // Make the binary string be 8 bits long
          binaryString = appendZeroes(binaryString, 8 - binaryString.length)
        }

        this.operationsArr.push(
          `So we know the binary value of ${input} is ${binaryString}.`
        )
        this.operationsArr.push(
          `All that's left to do in our ones complement conversion is invert the 1s and 0s.`
        )
      }
      // set the output equal to the result of the ones complement conversion
      this.output = onesComplementConversion(this.userInput)
      // make sure the other window does not show
      this.showTwosComplementOperations = false
      // show the operations of the ones complement conversion
      this.showOnesComplementOperations = true
    },
    convertToTwosComp() {
      this.currentComplement = 'twos complement'
      // Save input for display in answer
      this.savedInput = this.userInput
      // Set show output to true
      this.showOutput = true
      // Reset the operations arr to get rid of previous operations
      this.operationsArr = []
      // Check that the users input is negative
      if (isNegative(this.userInput)) {
        // remove the negative sign from the user input
        let input = removeNegativeSign(this.userInput)

        this.operationsArr.push(
          `Just as in ones complement our first step is to strip away the negative sign and convert ${input} to binary.`
        )

        // convert the string input to a number
        let int = parseInt(input, 10)
        // create an array to hold the binary values of our division
        const binaryValues = []
        while (int != 0) {
          binaryValues.unshift(int % 2)
          // Lets add some operations to our array
          this.operationsArr.push(
            `2 goes into ${int}, ${Math.floor(
              int / 2
            )} times with a remainder of ${int % 2}`
          )
          int = Math.floor(int / 2)
        }

        // create a variable that holds the users input converted to binary
        let binaryString = binaryValues.join('')

        // if the length of our binary string is less than 8 we have to append 0s until it is equal to 8
        if (binaryString.length < 8) {
          this.operationsArr.push(
            `It looks like ${binaryString} is less than 8 bits long. For the sake of wanting to represent twos complement as an 8 bit string let's append 0s until we have an 8 bit string.`
          )
          // Make the binary string be 8 bits long
          binaryString = appendZeroes(binaryString, 8 - binaryString.length)
        }

        this.operationsArr.push(
          `So we know the binary value of ${input} is ${binaryString}.`
        )
        this.operationsArr.push(
          `Let's continue as we would in ones complement by inverting the 1s and 0s.`
        )

        // assign the ones complement value to a variable and make it function scoped
        var onesComp = onesComplementConversion(this.userInput)

        this.operationsArr.push(`We now have ${onesComp}.`)

        this.operationsArr.push(
          `As you can see the steps to convert to twos complement are identical to ones complement so far. It is in this last step that they differ.`
        )

        this.operationsArr.push(
          `To complete our conversion we must now add 1 to ${onesComp}`
        )

        this.operationsArr.push(`${onesComp} + 1`)
      }
      // twos complement is ones complement with 1 added to it
      this.output = binaryAddition(onesComp, '1')
      this.showOnesComplementOperations = false
      this.showTwosComplementOperations = true
    }
  }
}
</script>
