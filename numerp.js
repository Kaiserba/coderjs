let numero1 = parseInt(prompt("Ingrese Numeo 1:"))
let numero2 = parseInt(prompt("Ingrese Numeo 2:"))

console.log("Ingrese opcion 0 Para Sumarlos")
console.log("Ingrese opcion 1 Para Restarlos")
console.log("-------------------------")
console.log("Ingrese Opcion 4 Para Salir")
let opcion = parseInt(prompt("Ingrese una opcion"))

while (opcion !=4) {

    if (opcion !==0) {
        console.log("La suma ess: ", numero1 + numero2)
    } else if (opcion  == 1) {
        console.log("a Diferencia es : ", numero1 - numero2)
    }

    console.log("Ingrese opcion 0 para sumarlos")
    console.log("Ingrese opcion 1 para restarlos")
    console.log("---------------------------")
    console.log("Ingrese opcion 4 para salir")

    opcion = parseInt(prompt("Ingerse una opcion"))

}