const { numbers, convertToValue, convertDigitsFromLines, convertNumberFromLines } = require('./account-number')

it('converts string numeric representation to numeric', () => {
  let value_one = convertToValue(numbers.one)
  let value_two = convertToValue(numbers.two)

  expect(value_one).toEqual(1)
  expect(value_two).toEqual(2)
})

it('reads account number string line by line into set of digits', () => {
  let account_number_lines = [
    ' _    ',
    ' _|  |',
    '|_   |',
  ]

  let digits = convertDigitsFromLines(account_number_lines)

  expect(digits).toEqual([numbers.two, numbers.one])
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
