const pessoa = {
    nome: "Jonas",
    sobrenome: "Silva",
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
// Atribuição via desestruração
const { nome, sobrenome, ...resto } = pessoa
console.log(nome, resto);