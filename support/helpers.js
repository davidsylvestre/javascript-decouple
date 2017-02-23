const curry = require('./curry')
const compose = require('./compose')

const map = curry((fn, arr) => arr.map(fn))

const split = curry((delimiter, str) => str.split(delimiter))

const reduce = curry((initialValue, fn, arr) => arr.reduce(fn, initialValue))
const reduce_to_object = reduce({})

const replace = curry( (regex, newStr, str) => str.replace(regex, newStr) )

const trim = str => str.trim()
const isQuoted = str => (str.length > 0 && str.charAt(0) === '\"' && str.charAt(str.length  - 1) === '\"')

const removeQuotes = str => str.replace(/(^['"]|['"]$)/g, '')

const expandNewLine = str => str.replace(/\\n/gm, '\n')
const expandNewLineQuoted = str => isQuoted(str) ? expandNewLine(str) : str
const normalizeString = compose(removeQuotes)


module.exports = {map, split, reduce, reduce_to_object, replace, removeQuotes}