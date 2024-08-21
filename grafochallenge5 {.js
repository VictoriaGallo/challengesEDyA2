class Node {
    constructor(name) {
        this.name = name;
        this.edges = [];
    }

    addEdge(node) {
        this.edges.push(node);
    }
}

class Person extends Node {
    constructor(name, age, city) {
        super(name);
        this.age = age;
        this.city = city;
        city.addEdge(this);  // Asocia a la persona con su ciudad
    }
}

class City extends Node {
    constructor(name) {
        super(name);
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    findCity(cityName) {
        return this.nodes.find(node => node instanceof City && node.name === cityName);
    }

    listPeopleInCity(cityName) {
        const city = this.findCity(cityName);
        if (!city) {
            console.log(`City ${cityName} not found.`);
            return;
        }
        console.log(`People living in ${cityName}:`);
        city.edges.forEach(person => {
            console.log(`- ${person.name}, Age: ${person.age}`);
        });
    }
}

// Crear grafo
const graph = new Graph();

// Crear ciudades
const city1 = new City("New York");
const city2 = new City("Los Angeles");
graph.addNode(city1);
graph.addNode(city2);

// Crear personas
const person1 = new Person("Alice", 25, city1);
const person2 = new Person("Bob", 30, city1);
const person3 = new Person("Charlie", 28, city2);
graph.addNode(person1);
graph.addNode(person2);
graph.addNode(person3);

// Listar personas en una ciudad
graph.listPeopleInCity("New York");  // Output: Alice, Bob
graph.listPeopleInCity("Los Angeles");  // Output: Charlie
