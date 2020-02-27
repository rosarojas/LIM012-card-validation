import validator from './validator.js';
//Evento click para ejecutar maskify y isValid
document.getElementById("botonValidar").addEventListener("click", () => {
  //Input del nombre del usuario
  const nombreUsuario = document.getElementById("inputNombre").value;
  //Input del número de tarjeta del usuario
  const creditCardNumber = document.getElementById("inputNumeroTarjeta").value;
  //Función maskify para ocultar caracteres
  const maskify = validator.maskify(creditCardNumber);
  //Función isValid para validar número de tarjeta
  const validador = validator.isValid(creditCardNumber);
  //Condicional para responder al usuario
  if (validador == true) {
   document.getElementById("respuestaValidacion").innerHTML = "Estimado(a) " + nombreUsuario + ", su número de tarjeta " + maskify +  " es válido.";
  } else {
   document.getElementById("respuestaValidacion").innerHTML = "Estimado(a) " + nombreUsuario + ", su número de tarjeta " + maskify + " no es válido.";
  }
});
//Evento click para ejecutar función para limpiar campos del formulario
document.getElementById("limpiaInputsDeTexto").addEventListener("click", () => {
  document.getElementById("formularioDeValidador").reset()
});
