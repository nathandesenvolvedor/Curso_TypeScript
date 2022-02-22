"use strict";
//Tuples Normalmente um array contém de zero à muitos objetos de um mesmo tipo. O TypeScript possui uma análise especial sobre arrays que contêm múltiplos tipos, e quando a ordem em que eles estão indexados é importante. Esses são chamados de tuplas. Pense nelas como uma forma para conectar dados, mas com menos sintaxe que os objetos.
// ==> Exemplo 1 - Uso simples de Tuple
let compraCliente;
compraCliente = ['Nathan Vitor', 'Celular', 2500, true];
//compraCliente = [true, 'Celular', 2500, 'Nathan Vitor'];==>ERROR
console.log(compraCliente);
