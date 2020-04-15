let valor // Não inicializado

console.log(valor);

valor = null; // Quer dizer ausência de valor (Ela foi inicializada, mas não aponta pra nenhum objeto na memória)

console.log(valor);

// Problemas ao tentar acessar a variável null

//console.log(valor.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 4.80;
console.log(produto);

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null // Sem preço
console.log(!!produto.preco);
console.log(produto);