

function descuento() {


const arrayofObjects = [
    { id:"1" ,name:"Remera manga corta", precio: "600" },
    { id:"2" ,name:"Remera manga larga", precio: "800" },
    { id:"3" ,name:"Choba", precio: "1500" },
    { id:"4" ,name:"Camisa", precio: "2300" },
]

let productoID = prompt("Que producto desea? \n 1) Remera manga corta \n 2) Remera manga larga \n 3) Chomba \n 4) Camisa")

arrayofObjects.forEach(object =>{
    if(object.id === productoID){
    alert("Producto : " + object.name + "\n" + "Precio Prodcuto :" + object.precio);




    
    

    let cuotas = prompt('Elija la opcion deseada \n  1) 3 cuotas un interes del 15 % \n  2) 6 cuotas un interes del 20 ')

    
 if (cuotas == 1) {
    resultadoInteres = (ingresarNumero * 0.10)
    resultadoFianlInteres = resultadoInteres + ingresarNumero

    alert('Sera en 3 cuotas y el precio final sera de ' + resultadoFianlInteres)
 }  else  
 
 if (cuotas == 2) {
    resultadoInteres = (ingresarNumero * 0.20)
    resultadoFianlInteres = resultadoInteres + ingresarNumero

    alert('Sera en 6 cuotas y el precio final sera de ' + resultadoFianlInteres)
 } else {
     alert('No aplica cuotas el precio final es de 1 pago por : ' + resultadoFianlInteres )
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

    
     }
  
     
 }


 alert("El precio final es de :" + (resultadoFianlInteres - resultadoDescuento) )

}


descuento();
