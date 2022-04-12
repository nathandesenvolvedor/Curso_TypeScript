"use strict";
// ==> Exemplo 1 - Function (Named function)
function somarNumeros(x, y) {
    return x + y;
}
let valor = somarNumeros(4, 4);
console.log(valor);
// ==> Exemplo 2 - Function Anonima (Function Expression)
const msg = function (mensagem) {
    return mensagem;
};
console.log(msg('Hello Word'));
// ==> Exemplo 3 - (Arrow Function Expression). Outra forma de declararar uma função
const msg_2 = (mensagem) => {
    return mensagem;
};
console.log(msg_2('Hello Brazil'));
