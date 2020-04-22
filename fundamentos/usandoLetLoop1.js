let funcs = [];

for (let n = 0; n < 10; n++){
    funcs.push(function() {
        console.log(n);
    });
}

funcs[2]();
funcs[8]();