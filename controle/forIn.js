const notas = [6.7, 7.4, 9.8, 8.1, 7.8];

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome:'Iuri',
    sobrenome: 'Garbim',
    idade: 23,
    peso: 74
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}