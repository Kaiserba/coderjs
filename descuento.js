
function seleccionProducto (){
   let listaDeProdcutos = prompt('Selecione Prodcutos \n 1)Pantalon jean \n 2)Remera Basica \n 3)Short liso \n 4)Bermuda Cargo ')
   if (listaDeProdcutos == 1)

   var capturarProdcuto = alert('Pantalon de Jean')
}

seleccionProducto();









function descuento() {

    let ingresarNumero = parseInt(prompt("Ingrese el monto del producto: "))

    let cuotas = prompt('Elija la opcion deseada \n  1) 3 cuotas un interes del 15 % \n  2) 6 cuotas un interes del 20 ')

    
 if (cuotas == 1) {
    resultadoInteres = (ingresarNumero * 0.10)
    resultadoFianlInteres = resultadoInteres + ingresarNumero

    alert('Sera en 3 cuotas y el precio final sera de ' + resultadoFianlInteres)
 } else if (cuotas == 2) {
        resultadoInteres = (ingresarNumero * 0.20)
        resultadoFianlInteres = resultadoInteres + ingresarNumero
    
        alert('Sera en 6 cuotas y el precio final sera de ' + resultadoFianlInteres)
     }
  else {
        alert("se abonara en 1 cuota " + ingresarNumero )

    }


let opcion = prompt('Buenos días Ingerese la opcion deseada : \n 1) (10% de descuento) \n 2) (15% de descuento) \n 3) (25% de descuento) \n \n Sino aplica descuento elija la opcion 4'  )

 if (opcion == 1) {
    resultadoDescuento = resultadoFianlInteres * 0.10
 } else { 
     if (opcion == 2) {
        resultadoDescuento = resultadoFianlInteres * 0.15

     }  else  {
        if (opcion == 3) {
            resultadoDescuento = resultadoFianlInteres * 0.25
         
    } else {
        alert("no se aplicara nigun descuento:  \n El precio final a pagar es de : " + resultadoFianlInteres )
    }
    
     }
  
     
 }


 alert("El precio final es de :" + (resultadoFianlInteres- resultadoDescuento) +)

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





                                            // este codido funciona correctamente

// function descuento() {

//     let ingresarNumero = parseInt(prompt("Ingrese el monto del producto: "))

//     let opcion = prompt('Buenos días Ingerese la opcion deseada : \n Opcion 1 (15% de descuento) \n Opcion 2 (25% de descuento) \n Opcion 3 (30% de descuento) \n \n Sino aplica descuento elija la opcion 4'  )

//  if (opcion == 1) {
//     resultado = ingresarNumero * (15 / 100)
//  } else { 
//      if (opcion == 2) {
//         resultado = ingresarNumero * (25 / 100) 

//      }  else  {
//         if (opcion == 3) {
//             resultado = ingresarNumero * (30 / 100) 
         
//     } else {
//         alert("no se aplicara nigun descuento:  \n El precio final a pagar es de : " + ingresarNumero )
//     }
    
//      }
  
     
//  }


//  alert("El precio final es de :" + (ingresarNumero - resultado) )

// }

// descuento();
