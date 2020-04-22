console.log('a =', a);
var a = 4;
console.log('a =', a);

//Dentro de uma função o efeito é o mesmo
function teste(){
    console.log('a =', a);
    var a = 4;
    console.log('a =', a);
}
teste();