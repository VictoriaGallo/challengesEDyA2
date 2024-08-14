class Persona {
    constructor(nombre, horaLlegada) {
        this.nombre = nombre;
        this.horaLlegada = horaLlegada;
    }
}

class ColaFIFO {
    constructor() {
        this.cola = [];
    }
    encolar(persona) {
        this.cola.push(persona);
    }

    desencolar() {
        if (this.estaVacia()) {
            console.log("La cola está vacía.");
            return null;
        }
        return this.cola.shift();
    }

    frente() {
        if (this.estaVacia()) {
            console.log("La cola está vacía.");
            return null;
        }
        return this.cola[0];
    }


    estaVacia() {
        return this.cola.length === 0;
    }

    mostrarCola() {
        if (this.estaVacia()) {
            console.log("La cola está vacía.");
            return;
        }
        
        console.log("Personas en la cola:");
        this.cola.forEach((persona, index) => {
            console.log(`${index + 1}. ${persona.nombre} - Llegada: ${persona.horaLlegada}`);
        });
    }
}

// Crear una nueva cola FIFO
const colaATM = new ColaFIFO();

// Agregar personas a la cola
colaATM.encolar(new Persona("Ana", "08:30"));
colaATM.encolar(new Persona("Juan", "08:35"));
colaATM.encolar(new Persona("Luis", "08:40"));

// Mostrar el estado de la cola
colaATM.mostrarCola();

// Desencolar a la persona que ha estado más tiempo
colaATM.desencolar();

// Mostrar nuevamente el estado de la cola después de desencolar
colaATM.mostrarCola();