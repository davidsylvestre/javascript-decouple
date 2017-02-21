const {map, split, reduce_to_object, removeQuotes} = require('../../support/helpers')
const compose = require('../../support/compose')


const split_in_lines = map(split('='))
const split_line_break = split('\n')

const parse_object = reduce_to_object((acc, value) => Object.assign({ [value[0]]: removeQuotes(value[1]) }, acc))

const normalize_linebreak = str => str.replace(/\r\n/g, '\n')
const clear_blank_line = str => str.replace(/^\s*\n/gm, '')
const clear_comment = str => str.replace(/^#.*\n/gm, '')

const parse_file = compose(parse_object, split_in_lines, split_line_break, clear_comment, clear_blank_line, normalize_linebreak)


module.exports = {
  parse_file
}
