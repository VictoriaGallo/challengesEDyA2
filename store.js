
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counterSlice'; // Importar el slice del contador

// Configuración del store con el reducer del slice
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});
