let tienda = document.getElementById("tienda"); //Donde se van a mostrar todos los productos
let etiquetaCantidadEnCarrito = document.getElementById("itemsCarrito"); // cantidad de items en el carrito
let modalCarritoLista = document.getElementById("listaDelCarrito"); // modal al hacer click en el icono del carrito

let id = 1; // id para diferenciar todos los productos

let cantItemsEnCarrito = 0; // items en carrito
let catalogo = []; //array para mostrar lso productos en la tienda
let carrito = []; // array para mostrar los items agregados al carrito

let guardarCarritoJSON; //el array carrito pero en formato JSON
let guardarCatalogoJSON; // el array catalogo pero en formato JSON

//Clase Producto , llama a funcion para guardar en LocalStorage
class Producto {
  constructor(nombre, talle, modelo, color, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.talle = talle;
    this.modelo = modelo;
    this.color = color;
    this.precio = parseFloat(precio);
    this.imagen = imagen;
    this.cantidad = 1;
    this.info = `${this.nombre} ${this.talle} ${this.modelo} ${this.color}.`;
    guardarProductoEnLocalStorage(this.id, this.info);
  }
}

//Clase Accesorio , llama a funcion para guardar en LocalStorage
class Accesorio {
  constructor(nombre, material, modelo, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.material = material;
    this.modelo = modelo;
    this.precio = parseFloat(precio);
    this.imagen = imagen;
    this.cantidad = 1;
    this.info = `${this.nombre} de ${this.material} ${this.modelo}.`;
    guardarProductoEnLocalStorage(this.id, this.info);
  }
}

//FUNCIONES

//Crea producto llamando a la clase Producto y aumenta el id
const crearProducto = (nombre, talle, modelo, color, precio, imagen) => {
  catalogo.push(new Producto(nombre, talle, modelo, color, precio, imagen));
  id += 1;
};

//Crea accesorio llamando a la clase Accesorio y aumenta el id
const crearAccesorio = (tipo, material, modelo, precio, imagen) => {
  catalogo.push(new Accesorio(tipo, material, modelo, precio, imagen));
  id += 1;
};

//Llama a crearProductos y crearAccesorios y despues crea un JSON con el catalogo completo
const inicializarProductos = () => {
  crearProducto(
    "REMERA",
    "XXL",
    "MANGA CORTA ESTAMPADA",
    "AZUL",
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

  guardarCatalogoJSON = JSON.stringify(catalogo);
};

//guarda en localStorage los items con Clave K y valor V   (id , info)
const guardarProductoEnLocalStorage = (k, v) => {
  localStorage.setItem(k, v);
};

//Crea todas las "tarjetas" de los productos agregandolos un DIV y luego el div ,como hijo al id="tienda"
const crearCatalogo = () => {
  //  for (const item of catalogo) {     ,
  for (const item of JSON.parse(guardarCatalogoJSON)) {
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

//activa los botones de todos los id del catalogo y del modal.
const clickAgregarCarrito = () => {
  for (let i = 1; i < id; i++) {
    let botonComprar = document.getElementById(`botonComprar${i}`);
    let botonComprarModal = document.getElementById(`botonComprarModal${i}`);

    botonComprar.onclick = () => {
      estaEnCarrito(i);
      mensajeAgregado();
    };
    botonComprarModal.onclick = () => {
      estaEnCarrito(i);
      mensajeAgregado();
    };
  }
};

//Si el elemento con id esta en carrito , aumenta en 1 la cantidad y cambia la etiqueta cantidad , sino llama a agregar al carrito
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

//Agrega el producto al carrito , aumenta en 1 la cantidad de items en carrito y cambia la etiqueta del carrito
const agregarCarrito = (idProducto) => {
  let producto = catalogo.find((producto) => producto.id == idProducto);
  carrito.push(producto);
  cantItemsEnCarrito += 1;
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
  guardarCarritoJSON = JSON.stringify(carrito);
};

//actualiza y abre el modal con la lista cada vez que se hace click
const clickIconoCarrito = () => {
  let botonIconCarrito = document.getElementById("iconoCarrito");
  botonIconCarrito.onclick = () => {
    limpiarListaModal();
    crearModalCarrito();
  };
};

//crea un mensaje para corroborar que se agrego al carrito
const mensajeAgregado = () => {
  let contenedorMensaje = document.createElement("div");
  contenedorMensaje.classList.add("confirmacion");
  contenedorMensaje.innerHTML = "Agregado al carrito";
  document
    .getElementById("contenedorMensajeAgregado")
    .appendChild(contenedorMensaje);
};

//crea dentro del modal del carrito: la lista de productos , el boton eliminar, el precio total de la suma y los botones de vaciar y finalizar
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
                            <div class="itemModal__info__cantidad" id="infoCantidad">
                                <div>Cantidad</div>
                                <div id="cantidadEnCarrito${item.id}">${
      item.cantidad
    }</div>
                            </div>
                            <div class="itemModal__info__precio" id="infoPrecio">
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

    clickBorrarItem(item);
    clickFinalizarCompra(precioTotal);
  }
  let contenedorPrecioTotal = document.createElement("div");
  contenedorPrecioTotal.classList.add("modal__total");
  contenedorPrecioTotal.innerHTML = `Total : $<span class="modal__total__valor" id="valorTotal">${precioTotal}</span>`;
  modalCarritoLista.appendChild(contenedorPrecioTotal);
};

//si hay mas de 1 item del mismo producto , resta 1 en cantidad si hay solo 1 item lo elimina ,  despues  actualiza la lista y la cantidad en carrito.
const clickBorrarItem = (item) => {
  let botonEliminar = document.getElementById(`botonEliminar${item.id}`);
  botonEliminar.onclick = () => {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      if ((item.cantidad = 1)) {
        carrito = carrito.filter((prodE) => prodE.id != item.id);
      }
    }
    cantItemsEnCarrito -= 1;
    limpiarListaModal();
    crearModalCarrito();
  };
};

//si hay productos devuelve un alert por la suma de precios
const clickFinalizarCompra = (precioTotal) => {
  let botonFinalizarCompra = document.getElementById("finalizarCompra");
  botonFinalizarCompra.onclick = () => {
    if (carrito.length != 0) {
      alert(`El pago por $${precioTotal} fue aceptado. Gracias por su Compra`);
      vaciarCarrito();
    } else {
      alert("No hay productos a comprar");
    }
  };
};

//click en boton vaciar carrito elimina si hay productos en la lista
const clickVaciarCarrito = () => {
  let botonVaciarCarrito = document.getElementById("vaciarCarrito");
  botonVaciarCarrito.onclick = () => {
    if (carrito.length != 0) {
      vaciarCarrito();
    } else {
      alert("No hay productos en carrito");
    }
  };
};

//elimina los productos en carrito
const vaciarCarrito = () => {
  cantItemsEnCarrito = 0;
  carrito = [];
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
  catalogo.forEach((item) => {
    item.cantidad = 1;
  });
  limpiarListaModal();
};

//remueve todos los hijos creados cada vez que se agrega un item de distinto id al carrito y actualiza la cantidad de productos en carrito
const limpiarListaModal = () => {
  while (modalCarritoLista.firstChild) {
    modalCarritoLista.removeChild(modalCarritoLista.firstChild);
  }
  etiquetaCantidadEnCarrito.innerHTML = cantItemsEnCarrito;
};

//muestra por consola los JSON y el localStorage
const mostrarLocalStorageYJSON = () => {
  console.log("ITEMS EN CATALOGO JSON");
  console.log(guardarCatalogoJSON);
  console.log("");
  console.log("ITEMS EN CARRITO JSON");
  if (guardarCarritoJSON == undefined) {
    console.warn("VACIO , Agregar productos y mostrar denuevo");
  } else {
    console.log(guardarCarritoJSON);
  }
  console.log("");
  console.log("ITEMS EN LOCAL STORAGE");
  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
  }
};

//llama a todas las funciones
const app = () => {
  inicializarProductos();
  crearCatalogo();
  clickAgregarCarrito();
  clickIconoCarrito();
  clickVaciarCarrito();
  mostrarLocalStorageYJSON();
};

app();
