const one = '   ' +
            '  |' +
            '  |'
const two = ' _ ' +
            ' _|' +
            '|_'

const numbers = { one, two }

const map = {}
map[one] = 1
map[two] = 2

const convertToValue = string => map[string]

module.exports = { numbers, convertToValue }
