class Producto{
    constructor(articulo,talle,color,largo,precio){
        this.articulo = articulo.toUpperCase();
        this.talle= talle.toUpperCase();
        this.color=color.toUpperCase();
        this.largo=largo.toUpperCase();
        this.precio = Number(precio);
    }
    sumaTarjeta(){return this.precio *= 1.21}
  
}


alert(" ELIGE EL ARTICULO")

for (let i = 0; i < 1 ;i++) {
     const articuloElegido = [];
     let articulo = prompt("Ingresa el articulo:\n1. REMERA  \n2. BUZO \n3. CAMISA \n4.CAMPERA ").toUpperCase()
     let talle = prompt("Ingresa el articulo:\n1. SMALL  \n2. MEDIUM \n3. LARGE \n4.XL ").toUpperCase()
     let color =prompt("Ingresa el articulo:\n1. ROJO  \n2. VERDE \n3. AZUL \n4.NEGRO").toUpperCase()
     let largo =prompt("Ingresa el articulo:\n1. CORTO  \n2. LARGO").toUpperCase()
     let precio =Number(prompt("Ingresa el costo del producto \n1. REMERA =2000  \n2. BUZO =3400 \n3. CAMISA =1200 \n4.CAMPERA =3400 "))
     articuloElegido.push(new Producto(articulo,talle,color,largo,precio))
     console.log("Productos elegidos:"+articuloElegido)

     for (const info of articuloElegido) {
        console.log("Informacion del articulo" + " " + info.articulo + " " + info.talle + " " +info.color +" " + info.largo + " " +info.precio)
        console.log(info.sumaTarjeta())
        
       }
}
