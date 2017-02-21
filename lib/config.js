const paserEnv = require('./parse/parseEnv')

class Config{
    constructor(repository){
        this.repository = repository

    }

    get(option, def=undefined, cast=undefined) {

        let value = this.repository.get(option) || def

        if (!cast)
            cast = x => x //hacklife
        
        return cast(value)
    }
}


module.exports = Config