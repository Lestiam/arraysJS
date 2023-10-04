const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { //retorna verdadeiro ou falso. O primeiro parametro seria o aluno, mas como ele não é utilizado, eu posso nomea-lo como "_"
    return medias[indice] < 7; //retorno os nomes dos alunos que perderam média
});

console.log(reprovados);