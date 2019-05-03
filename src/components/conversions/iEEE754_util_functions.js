export {
  convertExponentToBinary,
  isNegative,
  splitAtDecimalPoint,
  getValsAfterDecimal
}

// Aghhh code duplication this is so bad
const convertExponentToBinary = input => {
  // convert input to an int
  let int = parseInt(input, 10)
  // create an array to hold the binary values of our division
  const binaryValues = []
  while (int != 0) {
    // We know the modulus of int will either be 1 or 0
    // We will take that value and unshift it to binaryValues
    binaryValues.unshift(int % 2)

    // Lets divide int by 2 to get the next value we will perform modulus 2 on
    // in case the result of int / 2 is not even we will need to perform math.floor so we get a whole number
    int = Math.floor(int / 2)
  }
  return binaryValues.join('')
}

// looks at the first character of user input to see if it is negative
const isNegative = input => {
  return input[0] == '-'
}

// assuming a decimal point exists split at the decimal point
const splitAtDecimalPoint = input => {
  return input.split('.')
}

// Get the values after the decimal point
const getValsAfterDecimal = int => {
  return int - Math.floor(int)
}
