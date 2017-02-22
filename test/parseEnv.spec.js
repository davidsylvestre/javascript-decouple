const fs = require('fs')
const {parse_object, parse_file} = require('../lib/parse/parseEnv')

describe('Parse', () => {
  const sourceEnv = fs.readFileSync('./.env').toString()
  const parsed = parse_file(sourceEnv)

  it('escapes single quoted values', () => {
    expect(parsed.BASIC).toEqual('basic')
  })

  it('defaults empty values to empty string', () => {
    expect(parsed.EMPTY).toEqual('')
  })

  it('escapes double quoted values', () => {
      expect(parsed.DOUBLE_QUOTES).toEqual('double_quotes')
  })

  it('escapes single quoted values', () => {
      expect(parsed.SINGLE_QUOTES).toEqual('single_quotes')
  })

  it('respect equal', () => {
      expect(parsed.EQUAL_SIGNS).toEqual('equals==')
  })
})
