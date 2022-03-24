/* Escenario
Un mago junior ha elegido un número secreto. 
Lo ha escondido en una variable llamada númeroSecreto. 
Quiere que todos los que ejecutan su programa jueguen el juego Adivina el número secreto, 
y adivina qué número ha elegido para ellos. 
¡Quienes no adivinen el número quedarán atrapados en un ciclo sin fin para siempre! 
Tendras dos formas de jugarlo, con vidas o sin vidas.
*/

let intro = "+======================+ \n\
    | Bienvenido a mi juego, muggle!   | \n\
    | Introduce un número entero       | \n\
    | y adivina qué número he          | \n\
    | elegido para ti.                 | \n\
    | Entonces,                        | \n\
    | ¿Cuál es el número secreto?      | \n\
    +======================+ ";

alert(intro);
/* QUIERES JUGAR CON VIDAS O SIN?  */

let modo = prompt("Ingrese '1' para jugar sin vidas o '2' para jugar con vidas: ")
switch (modo) {
    case "1":
        let entrada = prompt("Ingrese un numero entero o la palabra 'ESC' para salir del juego: ");
        let numeroSecreto = 777;

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
    case "2":
        alert("Tendras 5 vidas para encontrar el numero secreto.")
        let numero2 = parseInt(prompt("Ingrese un numero entero: "));
        let numeroSecreto2 = 777;
        let vidas = 5;
        while (vidas != 0) {
            if (numero2 == numeroSecreto2) {
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
                numero2 = parseInt(prompt("Ingrese un numero entero: "));
            }
        }
        break;
    default:
        alert("Error");
        break;
}