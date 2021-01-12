function area (largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
};

console.log(area(2, 2)); // passando parametros normais
console.log(area(2)); // passando apenas 1 parametro
console.log(area()); // sem parametro
console.log(area(2, 4, 5, 6)); // passando uma quantidade de parametros maior (Ele vai considerar apenas os 2 primeiros e ignorar o restante)
console.log(area(5, 5)); // passando os parametros para dar um valor maior que 20 para cair no IF da função e retornar UNDEFINED
