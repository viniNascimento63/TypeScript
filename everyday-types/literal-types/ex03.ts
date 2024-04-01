/* COMBINANDO LITERAIS COM NÃO-LITERAIS */

interface Options {
    width: number;
}

function configure(x: Options | 'auto') {
    // ...
}

configure({ width: 256 });
configure('auto');
//configure('automatic');
//Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.