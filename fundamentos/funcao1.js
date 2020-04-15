// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));

const total = soma(2, 3);
console.log(total);

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(10, 5));

const total1 = subtracao(2, 3);
console.log(total1);

const imprimir = a => console.log(a)
imprimir('Legal');