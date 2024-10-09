import React, { useState } from 'react';
import { useCounter } from './hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(1); // Inicializa un contador en 1 usando el hook useCounter
  const [first, setFirst] = useState(10); // Inicializa un estado para el valor "first" en 10

  return (
    <>
      <h1>Memorize {first}</h1>
      <h2>Small: <Small value={counter} /></h2>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setFirst(first + 1)}>
        set Memorize State
      </button>
    </>
  );
};