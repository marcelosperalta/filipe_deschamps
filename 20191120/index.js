// Object initializer (Object Literal)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
// https://blog.rocketseat.com.br/substituindo-a-instrucao-switch-por-object-literal/

const pessoa = {
    nome: "Marcelo",
    sobrenome: "Peralta"
}
console.log(pessoa.nome);      // Marcelo
console.log(pessoa.sobrenome); // Peralta

const calculadora = {
    somar: function() { return 1 + 1 },
    duplicar: function(valor) { return valor * 2 },
    diminuir: function() { return 1 - 1 },
    multiplicar: function() { return 1 * 1 },
    dividir: function() { return 1 / 1 },
}
console.log(calculadora.somar);        // [Function: somar]
console.log(calculadora["somar"]);     // [Function: somar]
console.log(calculadora.somar());      // 2
const somar = calculadora.somar
console.log(somar());                  // 2
const duplicar = calculadora.duplicar
console.log(duplicar(4));              // 8
