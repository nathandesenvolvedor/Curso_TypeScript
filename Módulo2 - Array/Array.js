"use strict";
// ==> Exemplo 1 - Uso do Colchetes
let frutas = ['Maça', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas); //Maça,Laranja,Limão,Abacaxi
// ==> Exemplo 2 - Uso do Colchetes
let frutas2 = ['Maça', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas2[1]); //Laranja
// ==> Exemplo 3 - Array object (object Array)
let frutas3 = ['Maça', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas2[0]); //Maça
// ==> Exemplo 4 - adicionando mais elementos no Array com "push"
let frutas4 = ['Maça', 'Laranja', 'Limão', 'Abacaxi'];
frutas4.push('Uva'); //Acrescenta = [ 'Maça', 'Laranja', 'Limão', 'Abacaxi', 'Uva' ]
console.log(frutas4);
// ==> Exemplo 5 - Indentificar o tamanho do Array, método 'length' 
let frutas5 = ['Maça', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas5.length); //4
// ==> Exemplo 6 - Array com Spread Operator 
let listNumber = [1, 2, 3, 4, 5, 6];
listNumber = [...listNumber, 7, 8, 9, 10]; //A continuaçãgiuto do Array
console.log(listNumber); //1,2,3,4,5,6,7,8,9,10
