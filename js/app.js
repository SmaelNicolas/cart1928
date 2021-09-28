let tienda = document.getElementById("tienda");
let etiquetaCantidadEnCarrito = document.getElementById("itemsCarrito");
let modalCarritoLista = document.getElementById("listaDelCarrito");

let id = 1;

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
    this.info = `${this.nombre} ${this.talle} ${this.modelo} color ${this.color}.`;
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

const clickAgregarCarrito = () => {
  for (let i = 1; i < id; i++) {
    let botonComprar = document.getElementById(`botonComprar${i}`);
    let botonComprarModal = document.getElementById(`botonComprarModal${i}`);

    botonComprar.onclick = () => {
      estaEnCarrito(i);
    };
    botonComprarModal.onclick = () => {
      estaEnCarrito(i);
    };
  }
};

const estaEnCarrito = (idRepetido) => {
  let estaItem = carrito.find((estaItem) => estaItem.id == idRepetido);
  if (estaItem) {
    estaItem.cantidad += 1;
    cantItemsEnCarrito += 1;
    etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
  } else {
    agregarCarrito(idRepetido);
  }
};

const agregarCarrito = (idProducto) => {
  let producto = catalogo.find((producto) => producto.id == idProducto);
  carrito.push(producto);
  cantItemsEnCarrito += 1;
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
};

const clickIconoCarrito = () => {
  let botonIconCarrito = document.getElementById("iconoCarrito");
  botonIconCarrito.onclick = () => {
    limpiarListaModal();
    crearModalCarrito();
  };
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
                        <button class="itemModal__eliminar" id="botonEliminar${
                          item.id
                        }"><i class="far fa-trash-alt"></i></button>
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

const clickBorrarItem = () => {
  for (let i = 0; i < carrito.length; i++) {
    let idBuscar = carrito[i].id;
    console.log("idBuscar");
    let botonEliminar = document.getElementById(`botonEliminar${idBuscar}`);
    console.log("ELIMINADO");

    botonEliminar.onclick = () => {
      console.log("ELIMINADO");
    };
  }
};

const clickFinalizarCompra = () => {
  let botonFinalizarCompra = document.getElementById("finalizarCompra");
  botonFinalizarCompra.onclick = () => {
    let total = document.getElementById("valorTotal").textContent;
    alert(`El pago por $${total} fue aceptado. Gracias por su Compra`);
    vaciarCarrito();
  };
};

const clickVaciarCarrito = () => {
  let botonVaciarCarrito = document.getElementById("vaciarCarrito");
  botonVaciarCarrito.onclick = () => {
    vaciarCarrito();
  };
};

const vaciarCarrito = () => {
  cantItemsEnCarrito = 0;
  carrito = [];
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
  catalogo.forEach((item) => {
    item.cantidad = 1;
  });
  limpiarListaModal();
};

const limpiarListaModal = () => {
  while (modalCarritoLista.firstChild) {
    modalCarritoLista.removeChild(modalCarritoLista.firstChild);
  }
};

const app = () => {
  inicializarProductos();
  crearCatalogo();
  clickAgregarCarrito();
  clickIconoCarrito();
  clickVaciarCarrito();
  clickFinalizarCompra();
  clickBorrarItem();
};

app();
