const [a] = [10];
console.log(a);

const [n1, n2, , n4, n5 = 5] = [1, 2, 4];
console.log(n1, n2, n4, n5);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);