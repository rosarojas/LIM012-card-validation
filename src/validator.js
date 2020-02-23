const validator = {
  isValid : (creditCardNumber) => {
    let invertirString = creditCardNumber.split("").reverse();
    let numero = [];
    for(let i = 0; i < invertirString.length; i++){
      if(i % 2 !== 0){
        let posicionPar = parseInt(invertirString[i]) * 2;
        if(posicionPar>9){
          let dosDigitos = posicionPar.toString().split("");
          let sumaDosDigitos = parseInt(dosDigitos[0])+parseInt(dosDigitos[1]);
          numero.push(sumaDosDigitos);
        } else {
          let unDigito = posicionPar;
          numero.push(unDigito);
        }
      } else {
        let posicionImpar = invertirString[i];
        numero.push(parseInt(posicionImpar));
      }
    }
    let inicial = 0;
    const arraySuma = numero.reduce((acumulador, valorActual) => acumulador + valorActual, inicial);
    if(arraySuma % 10 === 0){
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
