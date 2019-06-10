<template>
  <div>
    <div class="container">
      <transition name="slide" appear>
        <!-- Header for the ones and twos complement -->
        <div
          class="container center white-background padding move-down z-depth-4"
        >
          <h3>Convert to Ones and Twos Complement</h3>
        </div>
      </transition>
      <transition name="slide" appear>
        <div class="center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <!-- <label for="firstName">Value To Convert</label> -->
              <input type="text" v-model="userInput" />
            </div>
          </div>
          <!-- This row contains the buttons for the initial conversions -->
          <div class="row">
            <!-- This column contains a button that will convert negative decimal values to ones complement binary -->
            <div class="col s12 m6">
              <button class="btn" @click="convertToOnesComp">
                Convert To Ones Complement
              </button>
            </div>
            <!-- This column contains a button that will convert negative decimal values to twos complement binary -->
            <div class="col s12 m6">
              <button class="btn" @click="convertToTwosComp">
                Convert To Twos Complement
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
      </transition>
    </div>

    <!-- This is where the user will be able to see step by step how the ones complement conversion happens -->
    <transition name="fade" appear>
      <div
        v-if="showOnesComplementOperations"
        class="row container center white-background move-down padding z-depth-4"
      >
        <div class="col s12">
          <h3>Steps in conversion</h3>
          <h3 v-for="(operation, index) in operationsArr" :key="index">
            {{ operation }}
          </h3>
          <h2>The final answer is {{ output }}</h2>
        </div>
      </div>
    </transition>

    <!-- This is where the user will be able to see step by step how the twos complement conversion happens -->
    <transition name="fade" appear>
      <div
        v-if="showTwosComplementOperations"
        class="row container center white-background move-down padding z-depth-4"
      >
        <div class="col s12">
          <h3>Steps in conversion</h3>
          <h3 v-for="(operation, index) in operationsArr" :key="index">
            {{ operation }}
          </h3>
          <h2>The final answer is {{ output }}</h2>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  onesComplementConversion,
  isNegative,
  convertToBinary,
  removeNegativeSign,
  appendZeroes
} from '../../utils/one_two_complement_util_functions'
import {binaryAddition} from '../../utils/binary_addition_util_functions'

export default {
  data() {
    return {
      userInput: '',
      output: 'The result of your conversion will appear here!',
      operationsArr: [],
      showOnesComplementOperations: false,
      showTwosComplementOperations: false
    }
  },
  methods: {
    convertToOnesComp() {
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
