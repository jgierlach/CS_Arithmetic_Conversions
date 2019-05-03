<template>
  <div>
    <transition name="slide" appear>
      <div class="container">
        <div class="container center white-background padding move-down z-depth-4">
          <h3>Convert Floating Point Values to IEEE754 Format</h3>
        </div>
        <div class="center white-background padding move-down z-depth-4">
          <!-- This row contains the input tag that we will get the userInput from -->
          <div class="row">
            <div class="col s12 input-field">
              <!-- <label for="firstName">Value To Convert</label> -->
              <input type="text" v-model="userInput">
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
        <h3 v-for="(operation, index) in iEEEOperationsArr" :key="index">{{operation}}</h3>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  convertExponentToBinary,
  isNegative,
  splitAtDecimalPoint,
  getValsAfterDecimal
} from './iEEE754_util_functions.js'
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
      // reset our iEEEOperationsArray to get rid of old entries
      this.iEEEOperationsArr = []

      // Check that the input entered is valid
      if (this.userInput.includes('.')) {
        let numberOfPlacesWeNeedToSolveFor = 0

        // For values greater than one this will convert from decimal to binary
        const convertValsGreaterThanOneToBinary = input => {
          // convert input to an int
          let int = parseInt(input, 10)
          // create an array to hold the binary values of our division
          const binaryValues = []
          while (int != 0) {
            // We know the modulus of int will either be 1 or 0
            // We will take that value and unshift it to binaryValues
            binaryValues.unshift(int % 2)

            // push values to this iEEE array keeping track of these operations
            this.iEEEOperationsArr.push(
              `2 goes into ${int}, ${Math.floor(
                int / 2
              )} times with a remainder of ${int % 2}`
            )

            // Lets divide int by 2 to get the next value we will perform modulus 2 on
            // in case the result of int / 2 is not even we will need to perform math.floor so we get a whole number
            int = Math.floor(int / 2)
          }
          // append the output of this function to our iEEE operations array
          this.iEEEOperationsArr.push(
            `Conversion of values greater than one = ${binaryValues.join('')}`
          )
          this.iEEEOperationsArr.push(
            `------------------------------------------------------------------------------`
          )
          return binaryValues.join('')
        }

        // converts all values less than one to binary up to 23 spaces
        const convertValsLessThanOneToBinary = input => {
          let int = input * 2
          // depending on the value of greater or less than one we will have a different response
          let greaterOrLessThanOne = ''
          // update the array before we start the arry otherwise every value will be off by 1
          this.iEEEOperationsArr.push(
            `${input} times 2 = ${int} ${greaterOrLessThanOne}`
          )
          let valsOfDecimal = []
          let i = 0
          // this is the place where we have to dynamically figure out how many places we have to go
          while (i < numberOfPlacesWeNeedToSolveFor) {
            console.log(int)
            if (int < 1) {
              valsOfDecimal.push(0)
            } else {
              valsOfDecimal.push(1)
            }

            // here we will set the value of the greater or less than one should convert this to a ternary
            if (getValsAfterDecimal(int) * 2 >= 1) {
              greaterOrLessThanOne =
                'which is greater than 1 so we set aside a 1'
            } else {
              greaterOrLessThanOne = 'which is less than 1 so we set aside a 0'
            }
            // update the iEEE operations array
            this.iEEEOperationsArr.push(
              `${getValsAfterDecimal(int)} times 2 = ${getValsAfterDecimal(
                int
              ) * 2} ${greaterOrLessThanOne}`
            )

            int = getValsAfterDecimal(int) * 2

            // finally increment our counter variable
            i++
          }
          // append the result of this function to the iEEE operations array
          this.iEEEOperationsArr.push(
            `Conversion of values less than one = ${valsOfDecimal.join('')}`
          )
          return valsOfDecimal.join('')
        }

        // will return the value of exponent
        const findExponent = input => {
          return input.length - 1
        }

        // This function will combine all fo our previously written methods
        const floatingPoint = input => {
          let signBit = ''
          // based on whether input is negative or positive make the sign bit 1 or 0
          if (isNegative(input)) {
            signBit = '1'
            // Oooo this is a bad use of global scoped variable should revise
            var input = input.slice(1, input.length)
          } else {
            signBit = '0'
          }

          // split our input at the decimal point into two inputs
          const inputs = splitAtDecimalPoint(input)
          // assign 0th index to the value of greater than one
          const greaterThanOne = inputs[0]
          // assign 1st index to the value of less than one
          const lessThanOne = '.' + inputs[1]

          // This is where our iEEE operations array will start give initial instructions on how our operations should start
          this.iEEEOperationsArr
            .push(`We begin by splitting up our floating point number
                                      into two values. Everything before the decimal point and everything after the decimal point.`)
          this.iEEEOperationsArr.push(
            `So we have ${greaterThanOne} and ${lessThanOne}`
          )
          this.iEEEOperationsArr.push(
            `We'll convert everything greater than one into binary and then convert everything less than one to binary`
          )
          this.iEEEOperationsArr.push(`Lets begin with ${greaterThanOne}`)

          // convert vals greater than 1 to binary (ie before decimal point)
          const binaryValsGreaterThanOne = convertValsGreaterThanOneToBinary(
            greaterThanOne
          )

          // Now it's time to convert everything less than 1
          this.iEEEOperationsArr.push(`Now it's time to convert ${lessThanOne}`)

          // from here lets figure out our exponent
          const exponent = findExponent(binaryValsGreaterThanOne)

          // we caluclate our normalized exponent that will take up 8 bits
          const normalizedExponent = convertExponentToBinary(exponent + 127)

          // Our normalized exponent needs to take up 8 bits if it's only 7 0 should be appended
          if (normalizedExponent.length == 7) {
            normalizedExponent = '0' + normalizedExponent
          }

          // lets caluclate the first part of our mantissa
          const firstPartOfMantissa = binaryValsGreaterThanOne.slice(
            1,
            binaryValsGreaterThanOne.length
          )

          // we need to subtract this value from 23 to calculate how many times the convertValsLessThanOneToBinary function should run so we have 32 bits total
          numberOfPlacesWeNeedToSolveFor = 23 - exponent

          // lets convertValsLessThanOneToBinary
          const binaryValsLessThanOne = convertValsLessThanOneToBinary(
            lessThanOne
          )

          // For the hell of it let's show the conversion so far
          const conversionSoFar =
            binaryValsGreaterThanOne + '.' + binaryValsLessThanOne
          console.log('conversion so far', conversionSoFar)

          this.iEEEOperationsArr.push(
            `-----------------------------------------------------------------------------`
          )
          // update our iEEE opperations array with the conversion so far
          this.iEEEOperationsArr.push(
            `Put the result of these conversion together and this is what we have so far ${conversionSoFar}`
          )
          this.iEEEOperationsArr.push(
            `-----------------------------------------------------------------------------`
          )
          this.iEEEOperationsArr.push(
            `Now we have to calculate our sign bit, exponent, and mantissa`
          )

          // instructions on how to handle the sign bit
          this.iEEEOperationsArr.push(
            `The sign bit is easy. If the number we entered is negative the sign bit is 1. If it was positive the sign bit is 0. In this case the sign bit is ${signBit}.`
          )

          // instructions on how to handle the expoenent
          this.iEEEOperationsArr.push(
            `Our exponent is equal to the distance we have to move the decimal for our value to equal 1.something. In this case our exponent is equal to ${exponent}. But we're not done yet! We have to still normalize our exponent. We do this by adding ${exponent} to 127. We will now convert this value to binary and it will take up 8 bits of the allotted 32. Our normalized exponent is equal to ${normalizedExponent}.`
          )

          // This is the final mantissa
          const mantissa = firstPartOfMantissa + binaryValsLessThanOne

          // instruction on how to handle the mantissa
          this.iEEEOperationsArr.push(
            `Ok we're almost done! We have to calculate the mantissa. `
          )

          // We're done
          this.iEEEOperationsArr.push(
            `Ok great work! All that's left is to put together all the pieces we calculated and we'll have our final value. To conclude computers really suck at representing and handling floating point values.`
          )

          this.signBit = signBit
          this.exponent = normalizedExponent
          this.mantissa = mantissa

          return this.signBit + this.exponent + this.mantissa
        }
        this.showIEEEOperations = true
        this.output = floatingPoint(this.userInput)
      } else {
        this.output = 'You have not entered a floating point value.'
      }
    }
  }
}
</script>

<style>
</style>
