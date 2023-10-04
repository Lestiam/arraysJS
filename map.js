const notas = [10, 9.5, 8, 7, 6];

 //notas.map(() =>) {}; formato da arrow function

 const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; //aumenta cada nota em 1 ponto. O map é apropriado para reescrever arrays. Aqui eu retorno nota +1, porem, se a nota passar de 10, eu retorno apenas a nota
 });

 console.log(notasAtualizadas);