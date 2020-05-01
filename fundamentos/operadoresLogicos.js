function compras(trabalho1, trabalho2) {
    const sorvete = trabalho1 || trabalho2;
    const tv50 = trabalho1 && trabalho2;
    //const tv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const tv32 = trabalho1 != trabalho2;
    const saudavel = !sorvete; // operador unário

    return { sorvete, tv50, tv32, saudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false,false));