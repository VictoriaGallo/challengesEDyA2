import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del contador
const initialState = {
    counter: 0
};

// Crear el slice del contador con las funciones increment, decrement e incrementBy
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1; // Incremento por 1
        },
        decrement: (state) => {
            state.counter -= 1; // Decremento por 1
        },
        incrementBy: (state, action) => {
            state.counter += action.payload; // Incremento por un valor específico
        }
    }
});

// Exportar las acciones generadas por el slice
export const { increment, decrement, incrementBy } = counterSlice.actions;
