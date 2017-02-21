const fs = require('fs')
const path = require('path')
const repositoryEnv = require('./repository/repositoryEnv')
const repositoryShell = require('./repository/repositoryShell')
const Config = require('./config')

const SUPPORTED = {
    '.env': repositoryEnv
}

class AutoConfig {

    constructor(path_file) {

        let fileConfig = fs.readdirSync(path_file)
                           .filter((file) => file in SUPPORTED)[0]
        
        const repository = SUPPORTED[fileConfig] || repositoryShell

        if (!fileConfig)
            return new Config(new repository())

        const file = `${path_file}${path.sep}${fileConfig}`
        const source = fs.readFileSync(file).toString()
        
        return new Config(new repository(source))
    }
}


module.exports = AutoConfig