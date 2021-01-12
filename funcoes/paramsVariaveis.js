function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
};

console.log(soma()); // passando parametro vazio
console.log(soma(1)); // passando apenas o número 1 como parametro
console.log(soma(1, 2, 3, 4)); // passando vários números como parametro
console.log(soma(2, 3, 4, "Testando")); // O arguments concatena vários tipos de dados no array

// arguments é um array que existe dentro de todas as funções