const fs = require('fs')
const Config = require('../lib/config')
const RepositoryEnv = require('../lib/repository/repositoryEnv')

const source = fs.readFileSync(__dirname + '/.env').toString()

const config = new Config(new RepositoryEnv(source))

describe('Read config', () => {
  it('Get USER_NAME', () => {
    expect(config.get('USER_NAME')).toBe('therealnerdybeast@example.tld')
  })

  it('Get default value', () => {
    expect(config.get('NOT_FOUND', 'default value')).toBe('default value')
  })
})

describe('Exceptions', () => {

  it('not found option and default not defined', () => {

    function not_found_option() {
      config.get('NOT_FOUND')
    }

    expect(not_found_option).toThrow('NOT_FOUND option not found and default value was not defined.')
  })
})
