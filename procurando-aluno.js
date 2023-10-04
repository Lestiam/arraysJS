const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { //o 0 é pq o nome do aluno está no primeiro array
        // const alunos = listaDeAlunosEMedias[0]; //informo que minha constante alunos equivale agora ao array 0
        // const medias = listaDeAlunosEMedias[1];

        const [alunos,medias] = listaDeAlunosEMedias; //faz exatamente a mesma coisa das linhas 8 e 9
        const indice = alunos.indexOf(aluno); //pega o indice do meu aluno
        
        const mediaDoAluno = medias[indice];  //pega a segunda lista e o valor do mesmo no indice especificado

        console.log(`${aluno} está cadastrado e tem a média ${mediaDoAluno}!`);
    } else {
        console.log(`${aluno} não está cadastrado!`);
    }
}

exibeNomeENota("João");