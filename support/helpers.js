const curry = require('./curry')


const map = curry((fn, arr) => arr.map(fn))

const split = curry((delimiter, str) => str.split(delimiter))

const reduce = curry((initialValue, fn, arr) => arr.reduce(fn, initialValue))
const reduce_to_object = reduce({})


module.exports = {map, split, reduce, reduce_to_object}