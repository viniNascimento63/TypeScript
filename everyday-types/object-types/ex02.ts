// Optional properties
function printName(obj: { first: string, last?: string }) {
    console.log(`\nName: ${obj.first}\nLast name: ${obj.last}`);
}
printName({first: 'Bob'});
printName({first: 'Alice', last: 'Alisson'});