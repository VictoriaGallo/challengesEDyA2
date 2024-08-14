class Todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null; // Puntero al siguiente TODO
    }
}

class TodoList {
    constructor() {
        this.head = null; // Primer TODO en la lista
        }
        addTodo(title, description) {
            const newTodo = new Todo(title, description);
            if (!this.head) {
                this.head = newTodo;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newTodo; // Agregar al final de la lista
            }
        }

        printTodos() {
            let current = this.head;
            while (current) {
                console.log(`Title: ${current.title}`);
        console.log(`Description: ${current.description}`);
        console.log('--------------------');
        current = current.next;
    }
}
}

// Crear una nueva lista de TODOs
const todoList = new TodoList();

todoList.addTodo('Buy groceries', 'Milk, Bread, Cheese, Eggs');
todoList.addTodo('Study', 'Complete chapter 3 of the algorithm book');
todoList.addTodo('Workout', 'Run 5km in the evening');

// Imprimir todos los TODOs
todoList.printTodos();