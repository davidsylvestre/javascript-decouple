const BOOL_VALUES = {
  'true': true, 'yes': true, 'on': true, '1': true,
  'false': false, 'no': false, 'off': false, '0': false
}

const bool = str => {
  if (!(str.toLowerCase() in BOOL_VALUES))
    throw `Not a boolean: ${str}`

  return BOOL_VALUES[str.toLowerCase()]
}

module.exports = {bool}