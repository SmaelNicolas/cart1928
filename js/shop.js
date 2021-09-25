//CLASES

class Producto {
  constructor(nombre, talle, modelo, color, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.talle = talle;
    this.modelo = modelo;
    this.color = color;
    this.precio = precio;
    this.imagen = imagen;
    this.info = `${this.nombre} Talle ${this.talle} , ${this.modelo}, Color ${this.color}.`;
  }
}

class Accesorio {
  constructor(nombre, material, modelo, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.materia = material;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen = imagen;
    this.info = `${this.nombre} de ${this.material}, Modelo: ${this.modelo}.`;
  }
}

//DECLARACIONES

let tienda = document.getElementById("tienda");
let id = 0;
let catalogo = [];
let carrito = [];

const crearProducto = (nombre, talle, modelo, color, precio, imagen) => {
  catalogo.push(new Producto(nombre, talle, modelo, color, precio, imagen));
  id += 1;
};

const crearAccesorio = (tipo, material, modelo, precio, imagen) => {
  catalogo.push(new Accesorio(tipo, material, modelo, precio, imagen));
  id += 1;
};

const agregarCarrito = (nombreProducto) => {
  let producto = catalogo.find((producto) => producto.id == nombreProducto);
  carrito.push(producto);
};

//LLAMADA A FUNCIONES
crearProducto(
  "Remera",
  "XXL",
  "Manga corta estampada",
  "Azul",
  1240,
  "https://i.ibb.co/h8n8x59/p.jpg"
);
crearProducto(
  "Jean",
  "50",
  "Chupin",
  "Claro",
  3600,
  "https://i.ibb.co/h8n8x59/p.jpg"
);
crearProducto(
  "Sweater",
  "XL",
  "De Hilo",
  "Negro",
  2700,
  "https://i.ibb.co/h8n8x59/p.jpg"
);

crearAccesorio(
  "Anillo",
  "Oro",
  "Grabado",
  4300,
  "https://i.ibb.co/h8n8x59/p.jpg"
);
crearAccesorio(
  "Collar",
  "Acero Q",
  "Con Medalla",
  1250,
  "https://i.ibb.co/h8n8x59/p.jpg"
);
crearAccesorio(
  "Pulsera",
  "Plata",
  "Con Inicial",
  1500,
  "https://i.ibb.co/h8n8x59/p.jpg"
);

agregarCarrito(catalogo[0].id);
agregarCarrito(catalogo[2].id);
agregarCarrito(catalogo[4].id);

//MUESTRA POR CONSOLA LOS PRODUCTOS QUE HAY EN CATALOGO
console.log("EN CATALOGO");

for (let i = 0; i < catalogo.length; i++) {
  console.log(catalogo[i].info);
}

//MUESTRA POR CONSOLA LOS ITEMS DEL CARRITO
console.log("EN CARRITO");

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].info);
}

// console.log(accesorio1.info);

for (const item of catalogo) {
  let productoCompleto = `  <!-- Button trigger modal -->
            <div class="main__productos__card" id="item1">
                <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter">

                    <img class="main__productos__card__image" src="${item.imagen}" alt="">
                </button>
                <p class="main__productos__card__title">${item.nombre} ${item.modelo}</p>
                <p class="main__productos__card__precio">$ ${item.precio}</p>
                <a class="main__productos__card__button" type="button">Comprar</a>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalCenterLongTitle">${item.nombre} ${item.modelo}
                            </h5>
                        </div>
                        <div class="modal-body">
                            <img class="main__productos__card__image__modal" src="https://i.ibb.co/h8n8x59/p.jpg"
                                alt="">
                            <p class="main__productos__card__title">${item.info} </p>
                            <p class="main__productos__card__precio">$ ${item.precio}</p>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
                            <button type="button" class="btn btn-dark">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
`;

  let contenedorProducto = document.createElement("div");
  contenedorProducto.innerHTML = productoCompleto;
  tienda.appendChild(contenedorProducto);
}
