const { readNumbersFromFile } = require('./account-number')
const { isValidAccountNumber } = require('./account-number-validation')

let path = process.argv[2]
readNumbersFromFile(path).then(numbers => {
  numbers.forEach(numberList => {
    let isValid = isValidAccountNumber(numberList)
    if (isValid) {
      console.log(numberList.join(''))
    } else {
      console.log(numberList.join(''))
      console.log('^ IS NOT VALID')
    }
  })
})