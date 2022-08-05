function capturar(){
    // console.log("capturado")


    function producto(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }

    var nombreCapturar = document.getElementById("nombre").value;
   console.log(nombreCapturar)


  var precioCapturar = document.getElementById("precio").value;
  console.log(precioCapturar)

  var cantidadCapturar = document.getElementById("cantidad").value;
  console.log(cantidadCapturar)

  nuevoProducto = new producto(nombreCapturar,precioCapturar,cantidadCapturar);
  console.log(nuevoProducto);
  agregar();

}



  var baseDatos = [];

  function  agregar(){
     baseDatos.push(nuevoProducto);
     console.log(baseDatos);

   alert('el precio es ' + nuevoProducto.precio)

   let precio1 = nuevoProducto.precio

let opcion = prompt('Buenos días Ingerese la opcion deseada : \n 1) (10% de descuento) \n 2) (15% de descuento) \n 3) (25% de descuento) \n \n Sino aplica descuento elija la opcion 4'  )

if (opcion == 1) {
resultadoDescuento = precio1 * 0.10
resultadoFinal = (nuevoProducto.precio - resultadoDescuento)
} else { 
if (opcion == 2) {
   resultadoDescuento = precio1 * 0.15
   resultadoFinal = (nuevoProducto.precio - resultadoDescuento)

}  else  {
   if (opcion == 3) {
       resultadoDescuento = precio1 * 0.25
       resultadoFinal = (nuevoProducto.precio - resultadoDescuento)

} else {

   alert("no se aplicara nigun descuento:  \n El precio final a pagar es de : " + (precio1*nuevoProducto.cantidad ))
   document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoProducto.nombre+'</td><td>'+precio1+'</td><td>$'+ (precio1 * nuevoProducto.cantidad) +'</td><td>'+nuevoProducto.cantidad+'</td></tbody>';

}

}


}
document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoProducto.nombre+'</td><td>'+precio1+'</td><td>$'+ resultadoDescuento +'</td><td>'+ ( resultadoFinal* nuevoProducto.cantidad)+'</td><td>'+nuevoProducto.cantidad+'</td></tbody>';
                       
};
