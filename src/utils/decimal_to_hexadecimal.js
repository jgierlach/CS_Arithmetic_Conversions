export {decimalToHexadecimal}

const numberLetterMapping = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
}

const decimalToHexadecimal = userInput => {
  let int = parseInt(userInput, 10)
  let conversionResults = []
  while (int != 0) {
    if (int % 16 > 9) {
      let value = numberLetterMapping[int % 16]
      conversionResults.unshift(value)
    } else {
      conversionResults.unshift(int % 16)
    }
    int = Math.floor(int / 16)
  }
  return conversionResults.join('')
}
