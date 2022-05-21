/*Estructuras de Control

Par/Impar

• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)
*/

let numero = Number(prompt("Ingrese un número"));
let contador = 0;

while (numero !== 0) {
  if (numero % 2 === 0) {
    console.log("El número es par");
    break;
  } else {
    console.log("El número es impar");
    break;
  }
}
