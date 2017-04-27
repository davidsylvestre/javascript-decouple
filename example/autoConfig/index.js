const Config = require('../../lib/autoConfig')
const {bool} = require('../../support/cast')

config = new Config(__dirname)

console.log(config.get('SECRET_KEY', null))
console.log(config.get('DEBUG', false, bool))
console.log(config.get('EMAIL_HOST', 'localhost'))
console.log(config.get('EMAIL_PORT', 25, parseInt))