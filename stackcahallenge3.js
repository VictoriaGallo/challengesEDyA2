class Book {
    constructor(name, isbn, author, editorial) {
      this.name = name;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial;
    }
  }
 
class BookStack {
    constructor() {
        this.stack = [];
    }
    push(book) {
        this.stack.push(book);
    }

    pop() {
        if (this.stack.length === 0) {
          console.log("La pila está vacía.");
          return null;
        }
        return this.stack.pop();
      }

    peek() {
    if (this.stack.length === 0) {
        console.log("La pila está vacía.");
        return null;
    }
    return this.stack[this.stack.length - 1];
    }


    isEmpty() {
        return this.stack.length === 0;
      }


    size() {
    return this.stack.length;
    }

    displayStack() {
         if (this.stack.length === 0) {
            console.log("La pila está vacía.");
        } else {
            console.log("Libros en la pila:");
            this.stack.forEach((book, index) => {
                console.log(`${index + 1}. ${book.name} - ${book.author} (${book.isbn}, ${book.editorial})`);
            });
        }
    }
}

// Crear una nueva pila de libros
const myBookStack = new BookStack();

myBookStack.push(new Book("To Kill a Mockingbird", "978-0-06-112008-4", "Harper Lee", "J.B. Lippincott & Co."));
myBookStack.push(new Book("1984", "978-0-452-28423-4", "George Orwell", "Secker & Warburg"));
myBookStack.push(new Book("The Great Gatsby", "978-0-7432-7356-5", "F. Scott Fitzgerald", "Charles Scribner's Sons"));
myBookStack.push(new Book("Moby Dick", "978-0-14-243724-7", "Herman Melville", "Harper & Brothers"));

// Mostrar todos los libros en la pila
myBookStack.displayStack();

// Retirar un libro de la pila
console.log("Retirando el último libro de la pila:", myBookStack.pop().name);

// Ver el libro en la cima de la pila
console.log("Libro en la cima de la pila:", myBookStack.peek().name);

// Mostrar el tamaño de la pila
console.log("Tamaño de la pila:", myBookStack.size());

// Verificar si la pila está vacía
console.log("¿La pila está vacía?", myBookStack.isEmpty() ? "Sí" : "No");

// Mostrar todos los libros en la pila después de retirar uno
myBookStack.displayStack();