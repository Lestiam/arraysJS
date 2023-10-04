/* Na aula vimos como podemos usar o forEach para acessar o valor de todos os elementos em um array.
Selecione o único parâmetro obrigatório que temos que fornecer para esse método:
Resp: Uma função que recebe um elemento.
Certo! Essa função tem o nome de callback e vai ser executada para cada elemento do array, 
sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente */

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) { //quando passamos uma função anonima dentro do forEach, isto fica sendo conhecido como callback.
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(somaDasNotas);
console.log(`A média das notas é ${media}`);