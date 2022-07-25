

var arrayofObjects = [
    { id:"1" ,name:"Remera manga corta", precio: "$600" },
    { id:"2" ,name:"Remera manga larga", precio: "$800" },
    { id:"3" ,name:"Choba", precio: "$1500" },
    { id:"4" ,name:"Camisa", precio: "$2300" },
]

let productoID = prompt("Que producto desea? \n 1) Remera manga corta \n 2) Remera manga larga \n 3) Chomba \n 4) Camisa")

arrayofObjects.forEach(object =>{
    if(object.id === productoID){
    alert("Produco : " + object.name + "\n" + "Precio Prodcuto :" + object.precio);
    }

    


});