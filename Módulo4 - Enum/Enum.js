"use strict";
//O enum é um dos tipos do TypeScript que nos permite declarar um conjunto de valores/constantes pré-definidos.
//nós precisamos definir uma variável informando cada dia da semana.Utilizando o enum nós podemos criar uma estrutura com os dias da semana como: Segunda, Terca… e um índice para cada um deles: 1,2,3…etc.
// ==> Exemplo 1 - number e string
var semanas;
(function (semanas) {
    semanas[semanas["segunda"] = 0] = "segunda";
    semanas[semanas["terca"] = 1] = "terca";
    semanas[semanas["quarta"] = 2] = "quarta";
    semanas[semanas["quinta"] = 3] = "quinta";
    semanas[semanas["sexta"] = 4] = "sexta";
    semanas[semanas["sabado"] = 5] = "sabado";
    semanas[semanas["domingo"] = 6] = "domingo"; //6
})(semanas || (semanas = {}));
let dia = semanas[2]; //terça
let diastring = semanas['sexta']; //4
console.log(diastring);
// ==> Exemplo 2 - Deixando o código mais dinamico
var statusFuncionarios;
(function (statusFuncionarios) {
    statusFuncionarios[statusFuncionarios["Fotogr\u00E1fica"] = 1] = "Fotogr\u00E1fica";
    statusFuncionarios[statusFuncionarios["Editor"] = 2] = "Editor";
    statusFuncionarios[statusFuncionarios["Produtor"] = 3] = "Produtor";
})(statusFuncionarios || (statusFuncionarios = {}));
function Funcionario(status) {
    switch (status) {
        case statusFuncionarios.Fotográfica:
            console.log('ele é fotográfica');
            break;
        case statusFuncionarios.Editor:
            console.log('ele é Editor');
            break;
        case statusFuncionarios.Produtor:
            console.log('ele é Produtor');
            break;
    }
}
Funcionario(3);
