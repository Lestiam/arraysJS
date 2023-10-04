const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]; //desafio: remover nomes duplicados

//set do ingles significa conjunto

//const meuSet = new Set(nomes); //uma das regras é, os elementos de um set não podem se repetir

//const nomesAtualizados = [...meuSet]; //aqui, criei outra variavel e usei o spread operator para transformar novamente em array

const nomesAtualizados = [...new Set(nomes)]; //forma resumida, elimina as linhas 5 e 7

console.log(nomesAtualizados);