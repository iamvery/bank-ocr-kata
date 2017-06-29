const _ = require('lodash')
const fs = require('fs')

const zero = ' _ ' +
             '| |' +
             '|_|'
const one = '   ' +
            '  |' +
            '  |'
const two = ' _ ' +
            ' _|' +
            '|_ '
const three = ' _ ' +
              ' _|' +
              ' _|'
const four = '   ' +
             '|_|' +
             '  |'
const five = ' _ ' +
             '|_ ' +
             ' _|'
const six = ' _ ' +
            '|_ ' +
            '|_|'
const seven = ' _ ' +
              '  |' +
              '  |'
const eight = ' _ ' +
              '|_|' +
              '|_|'
const nine = ' _ ' +
             '|_|' +
             ' _|'

const numbers = { zero, one, two, three, four, five, six, seven, eight, nine }

const map = {}
map[zero] = 0
map[one] = 1
map[two] = 2
map[three] = 3
map[four] = 4
map[five] = 5
map[six] = 6
map[seven] = 7
map[eight] = 8
map[nine] = 9

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

const rows_per_digit = 4
const convertNumbersFromString = string => {
  let lines = string.split('\n')
  let chunks = _.chunk(lines, rows_per_digit).map(chunk => chunk.slice(0,3)) // throw away 4th, empty line
  let digits = chunks.map(convertNumberFromLines)
  return digits
}

const readNumbersFromFile = path => new Promise((resolve, reject) =>
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(error)
    }
    resolve(convertNumbersFromString(data))
  })
)

module.exports = { numbers, convertToValue, convertDigitsFromLines, convertNumberFromLines, convertNumbersFromString, readNumbersFromFile }
