import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTODO'; // Importamos el hook

export const TodoApp = () => {
    const { todos, handleAddTodo, handleToggleTodo, handleRemoveTodo, countTodos, countPendingTodos } = useTodo(); // Usamos el custom hook

    return (
        <div>
            <h1>TodoApp ({countTodos})</h1> {/* Muestra el total de todos */}
            <p>Tareas Pendientes: {countPendingTodos}</p> {/* Muestra los todos pendientes */}
            <hr />

            <TodoAdd handleAddTodo={handleAddTodo} />
            <TodoList 
                todos={todos} 
                handleToggleTodo={handleToggleTodo}
                handleRemoveTodo={handleRemoveTodo} 
            />
        </div>
    );
};
