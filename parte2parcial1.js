//laura victoria gallo 2220903
//Modificar el algoritmo de árboles binarios, implementar una función para calcular la altura de un árbol.

// Clase para representar una persona en el árbol genealógico
class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.hijos = [];
    }

    agregarHijo(hijo) {
        this.hijos.push(hijo);
    }
}

// Función para calcular la altura del árbol
function calcularAltura(persona) {
    if (!persona) return 0;
    if (persona.hijos.length === 0) return 1;

    let alturas = persona.hijos.map(hijo => calcularAltura(hijo));
    return Math.max(...alturas) + 1;
}

// Funciones para imprimir el árbol en diferentes órdenes
function imprimirPreOrden(persona) {
    if (!persona) return;
    console.log(`${persona.nombreCompleto} (${persona.fechaNacimiento})`);
    persona.hijos.forEach(hijo => imprimirPreOrden(hijo));
}

function imprimirPostOrden(persona) {
    if (!persona) return;
    persona.hijos.forEach(hijo => imprimirPostOrden(hijo));
    console.log(`${persona.nombreCompleto} (${persona.fechaNacimiento})`);
}

function imprimirEnOrden(persona) {
    if (!persona || persona.hijos.length === 0) {
        if (persona) {
            console.log(`${persona.nombreCompleto} (${persona.fechaNacimiento})`);
        }
        return;
    }
    const mitad = Math.floor(persona.hijos.length / 2);
    for (let i = 0; i < mitad; i++) {
        imprimirEnOrden(persona.hijos[i]);
    }
    console.log(`${persona.nombreCompleto} (${persona.fechaNacimiento})`);
    for (let i = mitad; i < persona.hijos.length; i++) {
        imprimirEnOrden(persona.hijos[i]);
    }
}

// Ejemplo de uso
let abuelo = new Persona("Juan Pérez", "01-01-1940");
let padre = new Persona("Miguel Pérez", "01-01-1970");
let hijo1 = new Persona("Emilia Pérez", "01-01-2000");
let hijo2 = new Persona("Jorge Pérez", "01-01-2005");

abuelo.agregarHijo(padre);
padre.agregarHijo(hijo1);
padre.agregarHijo(hijo2);

console.log("Preorden:");
imprimirPreOrden(abuelo);

console.log("\nPostorden:");
imprimirPostOrden(abuelo);

console.log("\nEn orden:");
imprimirEnOrden(abuelo);

console.log("\nAltura del árbol:");
console.log(calcularAltura(abuelo));
