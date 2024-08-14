//Función para Determinar si un Número es Par o Impar
//funcion regular

function esParOImpar(num) {
    if (num % 2 === 0) {
      console.log(`${num} es par`);
    } else {
      console.log(`${num} es impar`);
    }
  }
  
  esParOImpar(4); // Salida: 4 es par
  esParOImpar(7); // Salida: 7 es impar

//funcion flecha
  const esParOImpar = (num) => {
    if (num % 2 === 0) {
      console.log(`${num} es par`);
    } else {
      console.log(`${num} es impar`);
    }
  }
  
  esParOImpar(4); // Salida: 4 es par
  esParOImpar(7); // Salida: 7 es impar
  