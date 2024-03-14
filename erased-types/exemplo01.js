// O javascript apagou as anotações de tipos do typescript.
// Também alterou o template string para concatenação.

function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Vinícius', new Date());
