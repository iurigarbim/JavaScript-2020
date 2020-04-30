// novo recurso do Es2015

const pessoa = {
    nome: 'Iuri',
    idade: '22',
    endereco: {
        logradouro: 'Rua Juruá',
        numero: 0
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, moradia = true } = pessoa;
console.log(sobrenome, moradia);

const { endereco: { logradouro, numero} } = pessoa;
console.log(logradouro, numero);