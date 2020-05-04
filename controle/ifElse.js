const resultado = function(nota) {
    if(nota >= 7 ) {
        console.log('Aprovado com ' + nota);
    } else {
        console.log('Reprovado ' + nota);
    }
}

resultado(8);
resultado(6.7);
resultado('teste'); // Deveria ser um erro, mas como a linguagem ES6 é fracamente tipada ele retorna 'FALSO' e acaba imprimindo o que está no 'ELSE'