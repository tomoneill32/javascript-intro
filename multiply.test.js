const multiply = require('./multiply');

describe ('multiply', () => {
  it('multiplies 5 and 7', () => {
    expect(multiply(5,7)).toBe(35);
  })
})
