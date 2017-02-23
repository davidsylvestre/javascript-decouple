const {map, split, reduce_to_object, replace, removeQuotes} = require('../../support/helpers')
const compose = require('../../support/compose')

const transform_line = str => str.match(/^([^=\s]+)\s*=\s*(.*)$/).slice(1,3)
const split_in_lines = map(transform_line)
const split_line_break = split('\n')

const parse_object = reduce_to_object((acc, value) => Object.assign({ [value[0]]: removeQuotes(value[1]) }, acc))

const normalize_linebreak = replace(/\r\n/g, '\n')
const clear_blank_line = replace(/^\s*\n/gm, '')
const clear_comment = replace(/^#.*\n/gm, '')

const parse_file = compose(parse_object, split_in_lines, split_line_break,
                           clear_comment, clear_blank_line, normalize_linebreak)


module.exports = {
  parse_file
}
