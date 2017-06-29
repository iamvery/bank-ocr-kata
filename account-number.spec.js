const { numbers, convertToValue, convertDigitsFromLines, convertNumberFromLines, convertNumbersFromString, readNumbersFromFile } = require('./account-number')

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

it('readers numbers from file', done => {
  readNumbersFromFile('./account-numbers.txt')
    .then(numbers => {
      expect(numbers).toEqual([[1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8]])
      done()
    })
})
