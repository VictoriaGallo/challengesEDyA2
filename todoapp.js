import React, { useReducer } from 'react';
import { TodoReducer } from './components/TodoReducer';
import Header from './components/encabezado';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'add', payload: newTodo });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  return (
    <>
      <Header todos={todos} />
      <div className="row">
        <TodoList todos={todos} handleDelete={handleDelete} />
        <TodoForm handleAddTodo={handleAddTodo} />
      </div>
    </>
  );
};
