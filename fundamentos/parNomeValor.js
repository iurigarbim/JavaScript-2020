// par nome/valor
const produto = 'Mouse'; // contexto léxico 1

function exec(){
    const produto = 'Teclado'; // contexto léxico 2
    return produto;
}

// Objetos são grupos alinhados de chave/valor
const pessoa = {
    nome:'Iuri',
    idade: 22,
    endereco: {
        logradouro: 'Rua Juruá',
        numero: 0
    }
}

console.log(produto);
console.log(exec());
console.log(pessoa);