import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleToggleTodo, handleRemoveTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleToggleTodo={handleToggleTodo}
                    handleRemoveTodo={handleRemoveTodo}
                />
            ))}
        </ul>
    );
};
