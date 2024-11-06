import { useReducer } from 'react';
import { TodoReducer } from '../components/TodoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: id
        });
    };

    const handleRemoveTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: id
        });
    };

    const countTodos = todos.length;

    const countPendingTodos = todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleAddTodo,
        handleToggleTodo,
        handleRemoveTodo,
        countTodos,
        countPendingTodos
    };
};
