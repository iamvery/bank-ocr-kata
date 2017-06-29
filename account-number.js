const _ = require('lodash')

const one = '   ' +
            '  |' +
            '  |'
const two = ' _ ' +
            ' _|' +
            '|_ '

const numbers = { one, two }

const map = {}
map[one] = 1
map[two] = 2

const convertToValue = string => map[string]

const columns_per_digit = 3
const collectDigitsParts = (digits, line) => {
  // Something smells in this function. Why are we iterating again inside a
  // function used for another iteration? There's probably a simpler way, but
  // idk let's move on and worry about refactoring this function later!
  let chunks = _.chunk(line.split(''), columns_per_digit)
  chunks.forEach((chunk, index) => {
    digits[index] = digits[index] || ''
    digits[index] += chunk.join('')
  })
  return digits
}
const convertDigitsFromLines = lines => lines.reduce(collectDigitsParts, [])

const convertNumberFromLines = lines => convertDigitsFromLines(lines).map(convertToValue)

module.exports = { numbers, convertToValue, convertDigitsFromLines, convertNumberFromLines }
