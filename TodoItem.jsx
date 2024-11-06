export const TodoItem = ({ todo, handleToggleTodo, handleRemoveTodo }) => {
    return (
        <li>
            <span 
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                onClick={() => handleToggleTodo(todo.id)}
            >
                {todo.description}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Eliminar</button>
        </li>
    );
};
