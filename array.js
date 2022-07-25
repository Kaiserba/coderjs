let productos = [
    {id:1, nombre: 'pelota', precio: 6500},
    {id:2, nombre: 'short', precio: 3500},
    {id:3, nombre: 'remera', precio: 7500}
]

productos.forEach( (producto) => {
    console.log('nombre producto: ' + producto.nombre)
})

let productosActualizados = productos.map(producto => {
    return {id: producto.id, nombre: producto.nombre, stock:0}
})