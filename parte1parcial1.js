//Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados de mayor a menor
//laura victoria gallo 2220903
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza = nuevoNodo;
        }
    }

    toArray() {
        const resultado = [];
        let actual = this.cabeza;
        while (actual) {
            resultado.push(actual.valor);
            actual = actual.siguiente;
        }
        return resultado;
    }
}

function unirListasOrdenadas(lista1, lista2) {
    const array1 = lista1.toArray().reverse();
    const array2 = lista2.toArray().reverse();

    const unionArray = [...array1, ...array2].sort((a, b) => a - b);

    const listaUnida = new ListaEnlazada();
    for (let i = unionArray.length - 1; i >= 0; i--) {
        listaUnida.agregar(unionArray[i]);
    }

    return listaUnida;
}

// Ejemplo para mi
const lista1 = new ListaEnlazada();
lista1.agregar(9);
lista1.agregar(7);
lista1.agregar(5);

const lista2 = new ListaEnlazada();
lista2.agregar(8);
lista2.agregar(6);
lista2.agregar(4);

const listaUnida = unirListasOrdenadas(lista1, lista2);
console.log(listaUnida.toArray().reverse()); // Output: [4, 5, 6, 7, 8, 9]
