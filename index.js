const fs = require('fs')

const Config = require('./lib/autoConfig')

config = new Config(__dirname)

console.log(config.get('appdata'))
console.log(config.get('NoInterpolation'))