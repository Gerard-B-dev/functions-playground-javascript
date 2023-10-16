/**
 * Contesta a todas las preguntas al lado
 */
/*
// Función que nos dice de qué tipo el valor de una variable
let nombre = "Eusebio";
console.log(typeof nombre);
*/
function isPositive(num) {
  return num > 0;

}

/**
 * 1. ¿Que nombre tiene esta función? --> isPositive
 * 2. ¿Que deberíamos escribir para ejecutar esta función? --> Debajo del cierre de corchetes de la fución escribimos --> isPositive()
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? --> boolean
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? --> La forma correcta es que cuando se cumple la condición y da TRUE, el primer mensaje ha de ser: "El número es positivo" porque el valor de la variable es 4 y es un número positivo.
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo");
}
