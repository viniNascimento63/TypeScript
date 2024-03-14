console.log("Hello, World!");

// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Vinícius', new Date(2024, 2, 14));
