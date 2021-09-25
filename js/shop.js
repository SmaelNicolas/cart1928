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
    this.material = material;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen = imagen;
    this.info = `${this.nombre} de ${this.material}, Modelo: ${this.modelo}.`;
  }
}

//DECLARACIONES

let tienda = document.getElementById("tienda");
let etiquetaCantidadEnCarrito = document.getElementById("itemsencarrito");
let modalCarritoLista = document.getElementById("listaDelCarrito");

let id = 0;

let cantItemsEnCarrito = 0;
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

const agregarCarrito = (idProducto) => {
  let producto = catalogo.find((producto) => producto.id == idProducto);
  carrito.push(producto);
  cantItemsEnCarrito += 1;
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
};

const finalizarCompra = (total) => {
  alert(`El pago por $${total} fue aceptado. Gracias por su Compra`);
  vaciarCarrito();
};

const vaciarCarrito = () => {
  cantItemsEnCarrito = 0;
  carrito = [];
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
  while (modalCarritoLista.firstChild) {
    modalCarritoLista.removeChild(modalCarritoLista.firstChild);
  }
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

for (const item of catalogo) {
  let productoCompleto = `  <!-- Button trigger modal -->
            <div class="main__productos__card" id="${item.id}">
                <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter${item.id}">

                    <img class="main__productos__card__image" src="${item.imagen}" alt="">
                </button>
                <p class="main__productos__card__title">${item.nombre} ${item.modelo}</p>
                <p class="main__productos__card__precio">$ ${item.precio}</p>
                <button class="main__productos__card__button" type="button" id="botonComprar${item.id}">Comprar</button>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalCenter${item.id}" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
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
                            <button type="button" class="btn btn-dark" id="botonComprarModal${item.id}">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
`;

  let contenedorProducto = document.createElement("div");
  contenedorProducto.innerHTML = productoCompleto;
  tienda.appendChild(contenedorProducto);
}

//BOTONES
for (let i = 0; i < id; i++) {
  let botonComprar = document.getElementById(`botonComprar${i}`);
  let botonComprarModal = document.getElementById(`botonComprarModal${i}`);

  botonComprar.onclick = () => {
    console.log(`CLICK COMPRAR DESDE HTML ARTICULO ${i}`);
    agregarCarrito(i);
  };
  botonComprarModal.onclick = () => {
    console.log(`CLICK COMPRAR DESDE MODAL ARTICULO ${i}`);
    agregarCarrito(i);
  };
}

let botonIconCarrito = document.getElementById("iconoCarrito");
botonIconCarrito.onclick = () => {
  console.log("CLICK CARRITO");
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].info);
    let contenedorEnCarrito = document.createElement("p");
    contenedorEnCarrito.innerHTML = carrito[i].info;
    modalCarritoLista.appendChild(contenedorEnCarrito);
  }
};

let botonFinalizarCompra = document.getElementById("finalizarCompra");
botonFinalizarCompra.onclick = () => {
  console.log("Gracias x Comprar");
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].info);
    total += carrito[i].precio;
  }
  finalizarCompra(total);
};

let botonVaciarCarrito = document.getElementById("vaciarCarrito");
botonVaciarCarrito.onclick = () => {
  vaciarCarrito();
  console.log("Carrito Vacio");
};
