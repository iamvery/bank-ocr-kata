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

const digits = { zero, one, two, three, four, five, six, seven, eight, nine }

const digits_to_numbers = {}
digits_to_numbers[zero] = 0
digits_to_numbers[one] = 1
digits_to_numbers[two] = 2
digits_to_numbers[three] = 3
digits_to_numbers[four] = 4
digits_to_numbers[five] = 5
digits_to_numbers[six] = 6
digits_to_numbers[seven] = 7
digits_to_numbers[eight] = 8
digits_to_numbers[nine] = 9

module.exports = { digits, digits_to_numbers }