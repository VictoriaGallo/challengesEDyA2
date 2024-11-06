import { useState } from 'react';

export const TodoAdd = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };

        handleAddTodo(newTodo);
        setDescription(''); 
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Nueva tarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};
