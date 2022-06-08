function inserirPessoas(nome,idade){
    return{
        nome,
        idade
    }
}

let pessoas = [
    inserirPessoas("João", 15),
    inserirPessoas("Micaela", 15),
    inserirPessoas("Gustavo",26)
];

function pessoasQuinze(pessoa){
     return pessoa.idade == 15;
}

let pessoasFiltradas = pessoas.filter(pessoasQuinze);

console.log(pessoasFiltradas);