import { useState } from 'react';

const TodoForm = ({ handleAddTodo }) => {
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleAddTodo(newTodo);
    setDescription('');
  };

  return (
    <div className="col-5">
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
