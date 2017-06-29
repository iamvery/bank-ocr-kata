const { numbers, convertToValue } = require('./account-number')

it('converts string numeric representation to numeric', () => {
  let value_one = convertToValue(numbers.one)
  let value_two = convertToValue(numbers.two)

  expect(value_one).toEqual(1)
  expect(value_two).toEqual(2)
})
