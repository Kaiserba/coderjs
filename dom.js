``



let contenedorProductos = document.getElementById('productos')
console.dir(contenedorProductos)

let productos = [{ id:"1" , name:"Remera manga corta", precio: "600" },
{ id:"2" , name:"Remera manga larga", precio: "800" },
{ id:"3" , name:"Choba", precio: "1500" },
{ id:"4" , name:"Camisa", precio: "2300" }, ]


for (const producto of productos) {
    let tarjetaProductos = document.createElement('div')
    tarjetaProductos.className = 'producto'
    tarjetaProductos.innerHTML = `
            <h1>${producto.name}</h1>
            <h3>${producto.precio}</h3>
           
            `
    
    

    contenedorProductos.append(tarjetaProductos)
}


