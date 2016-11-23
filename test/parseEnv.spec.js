const {parse_object, parse_file} = require('../lib/parseEnv')


test('transform array of string parsed to object', () =>{

  const arrParsed = [['teste', 'valor']]

  expect(parse_object(arrParsed)).toEqual({teste: 'valor'})
})

test('parse file to object env', () => {

  const FILE = 'key="value"\nkey2="value2"'
  const expected = {key:"value", key2:"value2"}

  expect(parse_file(FILE)).toEqual(expected)

})