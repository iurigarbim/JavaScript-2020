let numero = 1;
{
    let numero = 2;
    console.log('Dentro =', numero);
}
console.log('Fora =', numero);


//Ele procura no escopo mais abrangente
let numero2 = 1;
{
    let numero3 = 2;
    console.log('Dentro =', numero2);
}
console.log('Fora =', numero2);