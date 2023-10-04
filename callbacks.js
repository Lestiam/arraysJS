const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
    console.log(nome)
});

nomes.forEach((nome) => { //faz o mesmo do de cima, é chamada de arrow function, é a sintaxe mais utilizada
    console.log(nome)
});

function imprimeNome(nome) { //função callback externa
    console.log(nome);
}

nomes.forEach(imprimeNome); // chamo a função que eu criei