let x: 'hello' = 'hello'; // OK
// ...
// x = 'howdy';
// Type '"howdy"' is not assignable to type '"hello"'.

/* Literals with Unions */
function printText(s: string, alignment: 'left' | 'right' | 'center') {
    // ...
}

printText('Hello, world', 'left'); // OK
//printText("G'day, mate", 'centre');
//Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.