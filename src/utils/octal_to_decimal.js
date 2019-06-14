export {octalToDecimal}

const octalToDecimal = input => {
  let decimalValue = 0
  const octalValues = [...input].reverse()
  for (let i = 0; i < octalValues.length; i++) {
      decimalValue += octalValues[i] * Math.pow(8, i)
  }
  return decimalValue
}