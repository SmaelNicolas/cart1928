//DECLARACIONES

let tienda = document.getElementById("tienda");
let etiquetaCantidadEnCarrito = document.getElementById("itemsCarrito");
let modalCarritoLista = document.getElementById("listaDelCarrito");

let id = 0;

let cantItemsEnCarrito = 0;
let catalogo = [];
let carrito = [];

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
    this.cantidad = 1;
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
    this.cantidad = 1;
    this.info = `${this.nombre} de ${this.material}, Modelo: ${this.modelo}.`;
  }
}

//FUNCIONES

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

const crearModalCarrito = () => {
  let precioTotal = 0;

  for (const item of carrito) {
    let productoCompletoCarrito = `<img class="itemModal__imagen" src="${
      item.imagen
    }" alt="">
                        <div class="itemModal__info">
                            <h5 class="itemModal__info__titulo">${
                              item.info
                            }</h5>
                            <div class="itemModal__info__cantidad">
                                <div>Cantidad</div>
                                <div id="cantidadEnCarrito${item.id}">${
      item.cantidad
    }</div>
                            </div>
                            <div class="itemModal__info__precio">
                                <div>Precio</div>
                                <div>$${item.precio * item.cantidad}</div>
                            </div>
                        </div>
                        <button class="itemModal__eliminar"><i class="far fa-trash-alt"></i></button>
`;
    let contenedorListaModal = document.createElement("div");
    contenedorListaModal.classList.add("itemModal");
    contenedorListaModal.innerHTML = productoCompletoCarrito;
    modalCarritoLista.appendChild(contenedorListaModal);

    precioTotal += item.precio * item.cantidad;
  }

  let contenedorPrecioTotal = document.createElement("div");
  contenedorPrecioTotal.classList.add("modal__total");
  contenedorPrecioTotal.innerHTML = `Total : $<span class="modal__total__valor" id="valorTotal">${precioTotal}</span>`;
  modalCarritoLista.appendChild(contenedorPrecioTotal);
};

const vaciarCarrito = () => {
  cantItemsEnCarrito = 0;
  carrito = [];
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
  while (modalCarritoLista.firstChild) {
    modalCarritoLista.removeChild(modalCarritoLista.firstChild);
  }
};

const finalizarCompra = (total) => {
  alert(`El pago por $${total} fue aceptado. Gracias por su Compra`);
  vaciarCarrito();
};

const inicializarProductos = () => {
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
};

inicializarProductos();

const crearCatalogo = () => {
  for (const item of catalogo) {
    let productoCompleto = `  <!-- Button trigger modal -->
    <div class="main__productos__card" id="${item.id}">
    <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter${item.id}">
    
    <img class="main__productos__card__image" src="${item.imagen}" alt="">
    </button>
    <p class="main__productos__card__title">${item.nombre} ${item.modelo}</p>
    <p class="main__productos__card__precio">$ ${item.precio}</p>
    <button class="main__productos__card__button" type="button" id="botonComprar${item.id}">Agregar al Carrito</button>
    
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
    <button type="button" class="btn btn-dark" id="botonComprarModal${item.id}">Agregar al carrito</button>
    </div>
    </div>
    </div>
    </div>
    `;

    let contenedorProducto = document.createElement("div");
    contenedorProducto.innerHTML = productoCompleto;
    tienda.appendChild(contenedorProducto);
  }
};

crearCatalogo();

const activarBotonesComprar = () => {
  for (let i = 0; i < id; i++) {
    let botonComprar = document.getElementById(`botonComprar${i}`);
    let botonComprarModal = document.getElementById(`botonComprarModal${i}`);

    botonComprar.onclick = () => {
      console.log(`CLICK COMPRAR DESDE HTML ARTICULO ${i}`);

      let repetido = carrito.find((repetido) => repetido.id == i);

      if (repetido) {
        console.log("Encontro repetido");
        repetido.cantidad += 1;
        cantItemsEnCarrito += 1;
        etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
      } else {
        agregarCarrito(i);
      }
    };
    botonComprarModal.onclick = () => {
      console.log(`CLICK COMPRAR DESDE MODAL ARTICULO ${i}`);

      let repetido = carrito.find((repetido) => repetido.id == i);

      if (repetido) {
        console.log("Encontro repetido");
        repetido.cantidad += 1;
        cantItemsEnCarrito += 1;

        etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
      } else {
        agregarCarrito(i);
      }
    };
  }
};

activarBotonesComprar();

const activarBotonesEnCarrito = () => {
  let botonIconCarrito = document.getElementById("iconoCarrito");
  botonIconCarrito.onclick = () => {
    console.log("CLICK CARRITO");
    for (let i = 0; i < carrito.length; i++) {
      console.log(carrito[i].cantidad + " X " + carrito[i].info);
    }
    while (modalCarritoLista.firstChild) {
      modalCarritoLista.removeChild(modalCarritoLista.firstChild);
    }
    crearModalCarrito();
  };

  let botonFinalizarCompra = document.getElementById("finalizarCompra");
  botonFinalizarCompra.onclick = () => {
    console.log("Gracias x Comprar");
    let total = document.getElementById("valorTotal").textContent;

    finalizarCompra(total);
  };

  let botonVaciarCarrito = document.getElementById("vaciarCarrito");
  botonVaciarCarrito.onclick = () => {
    vaciarCarrito();
    console.log("Carrito Vacio");
  };
};
activarBotonesEnCarrito();
