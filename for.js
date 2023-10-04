const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//é chamado de for of
for (let nota of notas) { //é o foreach, para cada nota de notas
    somaDasNotas += nota; //eu somo a variavel somaDasNotas
}

const media = somaDasNotas / notas.length; //divido a soma pela quantidade de notas

console.log(somaDasNotas);
console.log(media);