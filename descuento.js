



function descuento() {

    let ingresarNumero = parseInt(prompt("Ingrese el monto del producto: "))

    let opcion = prompt('Buenos días Ingerese la opcion deseada : \n Opcion 1 (15% de descuento) \n Opcion 2 (25% de descuento) \n Opcion 3 (30% de descuento) \n \n Sino aplica descuento elija la opcion 4'  )

 if (opcion == 1) {
    resultado = ingresarNumero * (15 / 100)
 } else { 
     if (opcion == 2) {
        resultado = ingresarNumero * (25 / 100) 

     }  else  {
        if (opcion == 3) {
            resultado = ingresarNumero * (30 / 100) 
         
    } else {
        alert("no se aplicara nigun descuento:  \n El precio final a pagar es de : " + ingresarNumero )
    }
    
     }
  
     
 }


 alert("El precio final es de :" + (ingresarNumero - resultado) )

}

descuento();



// function solicitarNombre() {
//     let nobreIngresado = prompt("ingresar nombre")

//     alert("el nombre es " + nobreIngresado)
    
// }












// function descuento() {

//     let opcion = prompt('Buenos días Ingerese la opcion deseada : \n opcion 1 (15% de descuento) \n opcion 2 (25% de descuento) \n opcion 1 (30% de descuento)')

//  let ingresarNumero = prompt("Ingrese un numero: ")
//  let ingresarDescuento = prompt("Ingresar descuento: ")

//  resultado = (ingresarNumero * (ingresarDescuento /100))

//  alert("El precio final es de :" + ( ingresarNumero - resultado))

// }

// descuento();