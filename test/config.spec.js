const fs = require('fs')
const Config = require('../lib/config')
const RepositoryEnv = require('../lib/repository/repositoryEnv')

const source = fs.readFileSync('./.env').toString()

const config = new Config(new RepositoryEnv(source))

describe('Read config', () => {
    it('Get USER_NAME', () => {
        expect(config.get('USER_NAME')).toBe('therealnerdybeast@example.tld')
    })

    it('Get default value', () => {
        expect(config.get('NOT_FOUND', 'default value')).toBe('default value')
    })
})