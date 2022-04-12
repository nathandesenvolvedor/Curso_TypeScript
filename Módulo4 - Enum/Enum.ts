//O enum é um dos tipos do TypeScript que nos permite declarar um conjunto de valores/constantes pré-definidos.

//nós precisamos definir uma variável informando cada dia da semana.Utilizando o enum nós podemos criar uma estrutura com os dias da semana como: Segunda, Terca… e um índice para cada um deles: 1,2,3…etc.

// ==> Exemplo 1 - number e string

enum semanas {
  segunda, //0
  terca, //1
  quarta, //2
  quinta, //3
  sexta, //4
  sabado, //5
  domingo //6
}

let dia = semanas[2]; //terça
let diastring = semanas['sexta']; //4

console.log(diastring);



// ==> Exemplo 2 - Deixando o código mais dinamico

enum statusFuncionarios {
  Fotográfica = 1,
  Editor = 2,
  Produtor = 3
}

function Funcionario(status: number) {
  switch (status) {
    case statusFuncionarios.Fotográfica:
      console.log('ele é fotográfica');
      break
    case statusFuncionarios.Editor:
      console.log('ele é Editor');
      break
    case statusFuncionarios.Produtor:
      console.log('ele é Produtor');
      break
  }
}

Funcionario(3);