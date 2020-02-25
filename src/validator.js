const validator = {
  isValid : (creditCardNumber) => {
    //String es cortado en array y se invierte.
    let arrayInvertido = creditCardNumber.split("").reverse();
    let arrayDeNumeros = [];
    //For para recorrer el arrayInvertido
    for(let i = 0; i < arrayInvertido.length; i++){
      //Condicional: si la posición es impar se multiplica x2, es convertido a número
      if(i % 2 !== 0){
        let posicionImpar = parseInt(arrayInvertido[i]) * 2;
        //Si en la posicion impar los números son mayores que 9 (número de 2 dígitos)
        if(posicionImpar>9){
          //Número se convierte a string y luego es cortado en array
          let numeroDosDigitos = posicionImpar.toString().split("");
          //Se suma los digitios del array cortado y se convierte a número
          let sumaDosDigitos = parseInt(numeroDosDigitos[0])+parseInt(numeroDosDigitos[1]);
          //Con push añado el valor al arrayDeNumeros
          arrayDeNumeros.push(sumaDosDigitos);
        } else {
          //Numeros del 1 al 8 que no cumplieron con la condición
          let numeroUnDigito = posicionImpar;
          arrayDeNumeros.push(numeroUnDigito);
        }
      } else {
        //Números que no cumplieron con la condicion de ser impar
        let posicionPar = arrayInvertido[i];
        arrayDeNumeros.push(parseInt(posicionPar));
      }
    }
    //Función reduce para sumar valores de array
    let valorInicial = 0;
    const sumaDeArray = arrayDeNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial);
    //Condición: si el valor de array al dividirse entre 10 da un residuo de 0 
    if(sumaDeArray % 10 === 0){
      return true;
    } else {
      return false;
    }
  },
  maskify : (creditCardNumber) => {
    let nuevoArray = creditCardNumber.split("");
    let nuevoString = "";
    for (let i = 0; i < nuevoArray.length; i++) {
     if (i < (nuevoArray.length-4)) {
       nuevoString+= "#";
     } else {
       nuevoString+= creditCardNumber[i];
     }
   }
     return nuevoString;
  }
}
export default validator;
