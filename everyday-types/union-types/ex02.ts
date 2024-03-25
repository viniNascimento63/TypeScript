// Defining a Union Type with narrowing
function printId(id: number | string) {
    if (typeof id === "string") {
        // Nesta seção, id é um tipo 'string'
        console.log(id.toUpperCase());
    } else {
        // Aqui, id é um tipo 'number'
        console.log(id);
    }
    console.log("Your ID is: " + id);
}

printId(111); // ok
printId('220'); // ok
// printId({myID: 22545}); // error