const prod = {};

prod.nome = 'Teclado';
prod.preco = 20.99;
prod['Desconto'] = 0.40; // Evitar atribnutos com espaço

console.log(prod);

const prod1 = {
    nome:'Mouse',
    preco: 10.99
};
prod1['Desconto'] = 0.40; // Evitar atribnutos com espaço
console.log(prod1);