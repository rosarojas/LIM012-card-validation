const validator = {
  isValid : (creditCardNumber) => {
    //String es cortado en array y se invierte.
    const arrayInvertido = creditCardNumber.split("").reverse();
    const arrayDeNumeros = [];
    //For para recorrer el arrayInvertido
    for(let i = 0; i < arrayInvertido.length; i++){
      //Condicional: si la posición es impar se multiplica x2, es convertido a número
      if(i % 2 !== 0){
        const posicionImpar = parseInt(arrayInvertido[i]) * 2;
        //Si en la posicion impar los números son mayores que 9 (número de 2 dígitos)
        if(posicionImpar>9){
          //Número se convierte a string y luego es cortado en array
          const numeroDosDigitos = posicionImpar.toString().split("");
          //Se suma los digitios del array cortado y se convierte a número
          const sumaDosDigitos = parseInt(numeroDosDigitos[0])+parseInt(numeroDosDigitos[1]);
          //Con push añado el valor al arrayDeNumeros
          arrayDeNumeros.push(sumaDosDigitos);
        } else {
          //Numeros del 0 al 8 que no cumplieron con la condición
          const numeroUnDigito = posicionImpar;
          arrayDeNumeros.push(numeroUnDigito);
        }
      } else {
        //Números que no cumplieron con la condicion de ser impar
        const posicionPar = arrayInvertido[i];
        arrayDeNumeros.push(parseInt(posicionPar));
      }
    }
    //Función reduce para sumar valores de array
    const valorInicial = 0;
    const sumaDeArray = arrayDeNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial);
    //Condición: si el valor de array al dividirse entre 10 da un residuo de 0
    if(sumaDeArray % 10 === 0){
      return true;
    } else {
      return false;
    }
  },
  maskify : (creditCardNumber) => {
    let nuevoString = "";
    //Recorre el string
    for (let i = 0; i < creditCardNumber.length; i++) {
     //Condición: si los caracteres están antes que las 4 posiciones de longitud
     if (i < (creditCardNumber.length-4)) {
       //Se suma # por caracter o son reemplazados
       nuevoString+= "#";
     } else {
       //Se muestra los 4 caracteres restantes
       nuevoString+= creditCardNumber[i];
     }
   }
     return nuevoString;
  }
}
export default validator;
