const parseEnv = require('../parse/parseEnv')

class repositoryEnv {
  constructor(source) {
    this.data = parseEnv.parse_file(source)
  }

  get(option) {
    return process.env[option] || this.data[option]
  }
}


module.exports = repositoryEnv