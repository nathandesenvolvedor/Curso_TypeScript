"use strict";
//Tuples Normalmente um array contém de zero à muitos objetos de um mesmo tipo. O TypeScript possui uma análise especial sobre arrays que contêm múltiplos tipos, e quando a ordem em que eles estão indexados é importante. Esses são chamados de tuplas. Pense nelas como uma forma para conectar dados, mas com menos sintaxe que os objetos.
// ==> Exemplo 1 - Uso simples de Tuple
let compraCliente;
compraCliente = ['Nathan Vitor', 'Celular', 2500, true];
//compraCliente = [true, 'Celular', 2500, 'Nathan Vitor'];==>ERROR
console.log(compraCliente);
// ==> Exemplo  2 - Acessando o valor da Tuple.
let estadofruta;
estadofruta = [2548955, 'Banana', true];
console.log(estadofruta[0]);
// ==> Exemplo  3 - Tuple com Spread Operator.
let lista = ['list1', 'list2', 'list3', 'list4', 'list5'];
console.log(lista);
// ==> Exemplo  4 - Tuple com labels.
let pesssoa1 = ['Nathan', 'programador', 15];
console.log(pesssoa1);
// ==> Exemplo 5 - Heterognea de  Tuple
let clientefavorito = [48, true, ...lista];
console.log(clientefavorito);
// ==> Exemplo 6 - Função com  Tuple
function listapessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listapessoas(['Nathan', 'Pablo', 'Henrrique'], [15, 16, 12]);
console.log(resultado);
