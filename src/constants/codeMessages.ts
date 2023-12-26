const prefix = (code: string) => `10${code}` as const;

const CODE_MESSAGES = {
  CANNOT_ACCESS_DATABASE: {
    code: prefix('01'),
    message: 'Cannot access database'
  },
  INVALID_DATA: {
    code: prefix('03'),
    message: 'Invalid data'
  },
  BUSINESS_ERROR: {
    code: prefix('04'),
    message: 'Business error'
  },
  SUCCESSFULLY_CREATED: {
    code: prefix('06'),
    message: 'Exchange rate successfully created'
  }
} as const;

export default CODE_MESSAGES;
