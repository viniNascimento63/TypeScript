// O javascript apagou as anotações de tipos do typescript.
// Também alterou o template string para concatenação porque
// a compilação está sendo feita para o ES3 e não ES6

function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Vinícius', new Date());
