export {hexadecimalToDecimal}

const letterNumberMapping = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

const hexadecimalToDecimal = input => {
  let finalValue = 0
  let hexInArray = [...input].reverse()
  for (let i = 0; i < hexInArray.length; i++) {
    if (
      Object.keys(letterNumberMapping).includes(hexInArray[i].toUpperCase())
    ) {
      finalValue +=
        letterNumberMapping[hexInArray[i].toUpperCase()] * Math.pow(16, i)
    } else {
      finalValue += parseInt(hexInArray[i], 10) * Math.pow(16, i)
    }
  }
  return finalValue
}
