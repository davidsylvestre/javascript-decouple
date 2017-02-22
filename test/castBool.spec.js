const {bool} = require('../support/cast')

describe('Valid cast', () => {
  it('should behave true cast', () => {
    expect(bool('True')).toBe(true)
    expect(bool('yes')).toBe(true)
    expect(bool('on')).toBe(true)
    expect(bool('1')).toBe(true)
    expect(bool('ON')).toBe(true)
  })

  it('should behave false cast', () => {
    expect(bool('false')).toBe(false)
    expect(bool('no')).toBe(false)
    expect(bool('off')).toBe(false)
    expect(bool('0')).toBe(false)
    expect(bool('OFF')).toBe(false)
  })
})

describe('Invalid cast', () => {

  it('throws on invalid bool argument', () => {
    function cast_bool() {
      bool('xpto')
    }

    expect(cast_bool).toThrow('Not a boolean: xpto')
  })
})
