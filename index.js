const fs = require('fs')
const {parse_file} = require('./lib/parseEnv')

const sourceENV = fs.readFileSync('./.env').toString()

console.log('Arquivo .env\n----------')
console.log(sourceENV)

console.log('\nObject .env\n----------')
console.log(parse_file(sourceENV))