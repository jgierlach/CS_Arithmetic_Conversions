<template>
  <div>
    <transition name="slide" appear>
      <div class="container">
        <!-- Header saying what this componenet does -->
        <div
          class="container center white-background padding move-down z-depth-4"
        >
          <h3>Add binary numbers together!</h3>
        </div>
        <!-- This will display two fields where the user can enter values and click the add button -->
        <div class="center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 m6 input-field">
              <!-- Input field for the first number they want to add -->
              <input type="text" v-model="value1" />
            </div>
            <div class="col s12 m6 input-field">
              <!-- Input field for the second number they want to add -->
              <input type="text" v-model="value2" />
            </div>
          </div>
          <!-- This row contains the buttons for the IEEE 754 conversion -->
          <div class="row">
            <!-- This column contains a button that will convert floating point to IEEE 754 format -->
            <div class="col s12 m12">
              <button class="btn" @click="addBinaryNumbers">
                Add Binary Numbers
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
      <!-- conditionally render some code if they hit the add button -->
      <div
        class="container row center white-background move-down padding z-depth-4"
        v-if="showAdditionOperations"
      >
        <div class="col s12">
          <h3>Steps In Conversion</h3>
          <!-- Here is where we are displaying all the steps involved in the conversion -->
          <h3
            :key="index"
            v-for="(operation, index) in binaryAdditionOperationsArr"
          >
            {{ operation }}
          </h3>
          <!-- Here we display the final answer -->
          <h1>Final Answer = {{ output }}</h1>
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
  appendZeros
  // addInputs,
  // binaryAddition
} from '../../utils/binary_addition'
export default {
  data() {
    return {
      value1: '',
      value2: '',
      output: 'The sum will appear here!',
      binaryAdditionOperationsArr: [],
      showAdditionOperations: false
    }
  },
  methods: {
    // addBinaryNumbers() {
    //   this.output = binaryAddition(this.value1, this.value2)
    // }
    addBinaryNumbers() {
      // reset the the binaryAddditionOperationsArr to get rid of old operations stored in there
      this.binaryAdditionOperationsArr = []
      // add inputs function
      const addInputs = (num1, num2) => {
        // counts the amount of 0s
        let zeroCount = 0
        // counts the amount of 1s
        let oneCount = 0
        // keeps track of operations as they happen
        let cue = []
        // holds result of operations
        let result = []

        this.binaryAdditionOperationsArr.push(`${num1}`)
        this.binaryAdditionOperationsArr.push(`${num2}`)
        this.binaryAdditionOperationsArr.push(`+ -----------------`)

        // addition happens from right to left
        num1 = [...num1].reverse()
        num2 = [...num2].reverse()

        for (let i = 0; i <= num1.length; i++) {
          // push num1s value to the cue
          cue.push(num1[i])
          // push num2s value to the cue
          cue.push(num2[i])

          // the amount of 1s and 0's in the cue are counted
          cue.forEach(i => {
            i == '1' ? oneCount++ : zeroCount++
          })

          // the conditionals for the cue length being 2
          if (cue.length == 2) {
            if (oneCount == 2) {
              result.unshift('0')
              this.binaryAdditionOperationsArr.push(
                `We're adding 1 and 1 together. This will result in a value of 0 and a carry of 1.`
              )
              this.binaryAdditionOperationsArr.push(
                `The sum so far is ${result.join('')}`
              )
              cue = []
              cue.push('1')
            } else if (oneCount == 1) {
              result.unshift('1')
              this.binaryAdditionOperationsArr.push(
                `We're adding 1 and 0 together. This will result in a value of 1 and a carry of nothing.`
              )
              this.binaryAdditionOperationsArr.push(
                `The sum so far is ${result.join('')}`
              )
              cue = []
            } else if (zeroCount == 2 && i != num1.length) {
              result.unshift('0')
              this.binaryAdditionOperationsArr.push(
                `We're adding 0 and 0 together. This will result in a value of 0 and a carry of nothing.`
              )
              this.binaryAdditionOperationsArr.push(
                `The sum so far is ${result.join('')}`
              )
              cue = []
            }
            // reset one and zero counts
            oneCount = 0
            zeroCount = 0

            // the conditonals for the cue having 3 items in it
          } else if (cue.length == 3) {
            if (zeroCount == 2) {
              result.unshift('1')
              this.binaryAdditionOperationsArr.push(
                `We're adding 1, 0, and 0 together. This will result in a value of 1 and a carry of nothing.`
              )
              this.binaryAdditionOperationsArr.push(
                `The sum so far is ${result.join('')}`
              )
              cue = []
            } else if (oneCount == 2) {
              result.unshift('0')
              this.binaryAdditionOperationsArr.push(
                `We're adding 1, 1, and 0 together. This will result in a value of 0 and a carry of 1.`
              )
              this.binaryAdditionOperationsArr.push(
                `The sum so far is ${result.join('')}`
              )
              cue = []
              cue.push('1')
            } else if (oneCount == 3) {
              result.unshift('1')
              this.binaryAdditionOperationsArr.push(
                `We're adding 1, 1, and 1 together. This will result in a value of 1 and a carry of 1.`
              )
              this.binaryAdditionOperationsArr.push(
                `The sum so far is ${result.join('')}`
              )
              cue = []
              // in this case we will carry a 1
              cue.push('1')
            }
            // reset one and zero counts
            oneCount = 0
            zeroCount = 0
          }
        }
        return result.join('')
      }

      if (isEqualLength(this.value1, this.value2)) {
        // the inputs are equal in length so we can just add them as is
        this.output = addInputs(this.value1, this.value2)
        // make the operations visible
        this.showAdditionOperations = true
      } else {
        // This takes the shorter value and append 0's until it's length is equal to the bigger input
        let num1 = appendZeros(this.value1, this.value2)
        // This just assigns the value that is longer to a variable
        let num2 = theLongerValue(this.value1, this.value2)
        // return the results of the addition as the final answser
        this.output = addInputs(num1, num2)
        // make the operations visible
        this.showAdditionOperations = true
      }
    }
  }
}
</script>