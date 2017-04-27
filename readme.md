# javascript-decouple

## Como usar

```javascript
const Config = require('./lib/autoConfig')

config = new Config(__dirname)

console.log(config.get('SECRET_KEY'))
console.log(config.get('EMAIL_HOST', 'localhost'))
console.log(config.get('EMAIL_PORT', 25, parseInt))
```

## Origem e inspiração

A ideia do *javascript-decouple* surgiu de uma lib python do [Henrique Bastos]<https://github.com/henriquebastos>.
No geral, busco proporcionar a mesma experiencia que o [python-decouple]<https://github.com/henriquebastos/python-decouple> 
me proporcionava ao se trabalhar com ele que era liberdade em colocar os dados sensiveis do sistema.

Outra pessoal que me inspirou na criação do *javascript-decouple* foi o [Vinicius Reis]<https://github.com/vinicius73> 
com suas aulas de javascript