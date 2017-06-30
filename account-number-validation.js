const add = (a,b) => a + b
const checksum = digits => digits.reverse().map((digit, index) => digit*(index+1)).reduce(add, 0)
const isValidAccountNumber = digits => checksum(digits) % 11 === 0

module.exports = { isValidAccountNumber }