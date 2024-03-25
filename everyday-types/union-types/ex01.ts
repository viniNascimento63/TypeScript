// Defining a Union Type
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(111); // ok
printId('220'); // ok
// printId({myID: 22545}); // error