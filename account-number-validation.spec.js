const { isValidAccountNumber } = require('./account-number-validation')

describe('checksum validation', () => {
  it('succeeds for valid account number', () => {
    let valid_account_number = [3,4,5,8,8,2,8,6,5]
    expect(isValidAccountNumber(valid_account_number)).toBeTruthy()
  })

  it('fails for invalid account number', () => {
    let invalid_account_number = [1,1,1,1,1,1,1,1,1]
    expect(isValidAccountNumber(invalid_account_number)).toBeFalsy()
  })
})