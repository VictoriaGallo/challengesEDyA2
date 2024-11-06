import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../store/slices/counterSlice'; // Importar acciones

export const App = () => {
    // Seleccionar el valor del contador desde el store
    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch(); // Crear la función de dispatch

    return (
        <div>
            <h1>Challenge 13</h1>
            <hr />
            <span>Counter is: {counter}</span>
            <br />
            <button onClick={() => dispatch(increment())}>+1</button> {/* Incremento */}
            <button onClick={() => dispatch(decrement())}>-1</button> {/* Decremento */}
            <button onClick={() => dispatch(incrementBy(5))}>+5</button> {/* Incremento por 5 */}
        </div>
    );
};
