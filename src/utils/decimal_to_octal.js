export {decimalToOctal}

const decimalToOctal = userInput => {
  let octalValue = []
  let int = parseInt(userInput, 10)
  while (int != 0) {
    octalValue.unshift(int % 8)
    int = Math.floor(int / 8)
  }

  return octalValue.join('')
}
