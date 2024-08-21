
class Person {
    constructor(fullName, birthDate) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

// Funciones para imprimir el árbol en diferentes órdenes
function printPreOrder(person) {
    if (!person) return;
    console.log(`${person.fullName} (${person.birthDate})`);
    person.children.forEach(child => printPreOrder(child));
}

function printPostOrder(person) {
    if (!person) return;
    person.children.forEach(child => printPostOrder(child));
    console.log(`${person.fullName} (${person.birthDate})`);
}

function printInOrder(person) {
    if (!person || person.children.length === 0) {
        if (person) {
            console.log(`${person.fullName} (${person.birthDate})`);
        }
        return;
    }
    const mid = Math.floor(person.children.length / 2);
    for (let i = 0; i < mid; i++) {
        printInOrder(person.children[i]);
    }
    console.log(`${person.fullName} (${person.birthDate})`);
    for (let i = mid; i < person.children.length; i++) {
        printInOrder(person.children[i]);
    }
}

// Ejemplo de uso
let grandfather = new Person("John Doe", "01-01-1940");
let father = new Person("Michael Doe", "01-01-1970");
let child1 = new Person("Emily Doe", "01-01-2000");
let child2 = new Person("James Doe", "01-01-2005");

grandfather.addChild(father);
father.addChild(child1);
father.addChild(child2);

console.log("Pre-order:");
printPreOrder(grandfather);

console.log("\nPost-order:");
printPostOrder(grandfather);

console.log("\nIn-order:");
printInOrder(grandfather);