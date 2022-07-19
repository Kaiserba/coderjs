



function descuento() {

    let opcion = prompt('Buenos días Ingerese la opcion deseada : \n opcion 1 (15% de descuento) \n opcion 2 (25% de descuento) \n opcion 1 (30% de descuento)')

 let ingresarNumero = prompt("Ingrese un numero: ")
 let ingresarDescuento = prompt("Ingresar descuento: ")

 resultado = (ingresarNumero * (ingresarDescuento /100))

 alert("El precio final es de :" + ( ingresarNumero - resultado))

}

descuento();



// function solicitarNombre() {
//     let nobreIngresado = prompt("ingresar nombre")

//     alert("el nombre es " + nobreIngresado)
    
// }



