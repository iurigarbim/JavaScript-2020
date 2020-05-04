function boaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota);
    }
}

boaNoticia(8);
boaNoticia(6.8);

function verdade(valor) {
    if(valor){
        console.log('É verdade...' + valor);
    }
}

verdade();
verdade(null);
verdade(undefined);
verdade(NaN);
verdade('');
verdade(0);
verdade(-1);
verdade(' ');
verdade('?');
verdade([]);
verdade([1, 2]);
verdade({});