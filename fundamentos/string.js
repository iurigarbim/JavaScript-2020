const escola = "Cod3r";

console.log(escola.charAt(4)); // Retorna o caractere que está no índice 4 letra R

console.log(escola.charAt(5)); // Retorna vazio

console.log(escola.charCodeAt(3)); // Ele pega o valor na tabela ASC unicode

console.log(escola.indexOf('3'));

console.log(escola.substring(1)); // Vai retornar do o pra frente "od3r"

console.log(escola.substring(0, 3)); // Vai retornar o "cod"

console.log('Escola '.concat(escola).concat("!")); // Vai concatenar

console.log(escola.replace(3, "e")); // Vai substituir o 3 pelo 'e'

console.log('Ana,Maria,Pedro'.split(',')); // Vai gerar um array separando os elementos dentro dele

