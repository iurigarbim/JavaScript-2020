let cont = 1;

while(cont <= 10) {
    console.log(`Contador = ${cont}`);
    cont++;
}

for(i = 1; i <= 10; i++){
    console.log(`i = ${i}`);
}


//Percorrendo o vetor

const notas = [6.7, 7.4, 9.8, 8.1, 7.8];

for(let i = 0; i < notas.length; i++){ // Usamos o let para o acesso a variável I ficar somento no FOR
    console.log(`notas = ${notas[i]}`);
}