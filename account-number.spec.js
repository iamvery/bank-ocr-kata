const { convertToValue, convertDigitsFromLines, convertNumberFromLines, convertNumbersFromString, readNumbersFromFile } = require('./account-number')
const { digits } = require('./digits')

it('converts string numeric representation to numeric', () => {
  let value_one = convertToValue(digits.one)
  let value_two = convertToValue(digits.two)

  expect(value_one).toEqual(1)
  expect(value_two).toEqual(2)
})

it('reads account number string line by line into set of digits', () => {
  let account_number_lines = [
    ' _    ',
    ' _|  |',
    '|_   |',
  ]

  let converted_digits = convertDigitsFromLines(account_number_lines)

  expect(converted_digits).toEqual([digits.two, digits.one])
})

it('converts account number string representation to numeric', () => {
  let account_number_lines = [
    ' _     _ ',
    ' _|  | _|',
    '|_   ||_ ',
  ]

  let value = convertNumberFromLines(account_number_lines)

  expect(value).toEqual([2, 1, 2])
})

it('converts multiple numbers from string to numeric', () => {
  let account_numbers = ' _     _ \n' +
                        ' _|  | _|\n' +
                        '|_   ||_ \n' +
                        '         \n' +
                        '       _ \n' +
                        '  |  | _|\n' +
                        '  |  ||_ '

  let values = convertNumbersFromString(account_numbers)

  expect(values).toEqual([[2,1,2], [1,1,2]])
})

it('readers numbers from file', async () => {
  let numbers = await readNumbersFromFile('./account-numbers.txt')
  expect(numbers).toEqual([[1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8]])
})
