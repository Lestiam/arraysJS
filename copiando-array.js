const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]; //é chamado de spread operartor ou operador de espalhamento. O ,10 é o mesmo de eu dar um .push(10)

//novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As novas originais são ${notas}`);