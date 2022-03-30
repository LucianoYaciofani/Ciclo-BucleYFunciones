/* Escenario
Un mago junior ha elegido un número secreto. 
Lo ha escondido en una variable llamada númeroSecreto. 
Quiere que todos los que ejecutan su programa jueguen el juego Adivina el número secreto, 
y adivina qué número ha elegido para ellos. 
¡Quienes no adivinen el número quedarán atrapados en un ciclo sin fin para siempre! 
Tendras dos formas de jugarlo, con vidas o sin vidas.
Se agrega la nueva funcionalidad de elegir el nro secreto para el caso de
que se quiera jugar con otra persona
*/

let intro = "+======================+ \n\
    | Bienvenido a mi juego, muggle!   | \n\
    | Introduce un número entero       | \n\
    | y adivina qué número he          | \n\
    | elegido para ti.                 | \n\
    | Entonces,                        | \n\
    | ¿Cuál es el número secreto?      | \n\
    +======================+ ";
let numeroSecreto;
let entrada;

/* QUIERES JUGAR CON VIDAS O SIN?  */
function seleccionModo() {
    modo = prompt("Ingrese '1' para jugar sin vidas o '2' para jugar con vidas: ")
    return modo
}
//ELEGIR EL NUMERO SECRETO
function nroSecreto(valor) {
    numeroSecreto = prompt("Mago, ingrese el nro secreto: ")
    return valor
}

alert(intro);
nroSecreto(numeroSecreto);
//let modo = prompt("Ingrese '1' para jugar sin vidas o '2' para jugar con vidas: ")
switch (seleccionModo()) {
    case "1":
        entrada = prompt("Ingrese un numero entero o la palabra 'ESC' para salir del juego: ");

        while ((entrada != numeroSecreto) && (entrada != "ESC")) {
            alert("¡Ja, ja! ¡Estás atrapado en mi ciclo!");
            entrada = prompt("Ingrese un numero entero o la palabra 'ESC' para salir del juego: ");
        }
        
        if (entrada == numeroSecreto) {
            alert(entrada);
            alert("¡Bien hecho, muggle! Eres libre ahora");
            break;
        }
        else if (entrada == "ESC") {
            alert("Has salido del juego.")
            break;
        }
        break;
    case "2":
        alert("Tendras 5 vidas para encontrar el numero secreto.")
        entrada = parseInt(prompt("Ingrese un numero entero: "));
        let vidas = 5;
        
        while (vidas != 0) {

            if (entrada == numeroSecreto) {
                alert("¡Bien hecho, muggle! Eres libre ahora");
                break;
            }

            alert("¡Ja, ja! ¡Estás atrapado en mi ciclo!");
            vidas = vidas - 1
            alert("Te quedan " + vidas + " vidas.")

            if (vidas == 0) {
                alert("Has perdido, te quedaste sin vidas.")
                break;
            }
            else {
                entrada = parseInt(prompt("Ingrese un numero entero: "));
            }
        }
        break;
    default:
        alert("Error");
        break;
}