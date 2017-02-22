const paserEnv = require('./parse/parseEnv')

class Config{
    constructor(repository){
        this.repository = repository

    }

    get(option, def=undefined, cast=undefined) {

        let value = this.repository.get(option) || def

        if (typeof(value) === 'undefined')
            throw new Error(`${option} option not found and default value was not defined.`)

        if (!cast)
            cast = x => x //hacklife
        
        return cast(value)
    }
}


module.exports = Config