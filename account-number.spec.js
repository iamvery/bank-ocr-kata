const { numbers, convertToValue } = require('./account-number')

it('converts string numeric representation to numeric', () => {
  value_one = convertToValue(numbers.one)
  value_two = convertToValue(numbers.two)

  expect(value_one).toEqual(1)
  expect(value_two).toEqual(2)
})
