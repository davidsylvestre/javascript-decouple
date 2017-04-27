const BOOL_VALUES = {
  'true': true, 'yes': true, 'on': true, '1': true,
  'false': false, 'no': false, 'off': false, '0': false
}

const bool = str => {
  if (!(String(str).toLowerCase() in BOOL_VALUES))
    throw `Not a boolean: ${str}`

  return BOOL_VALUES[String(str).toLowerCase()]
}

module.exports = {bool}