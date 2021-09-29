let tienda = document.getElementById("tienda"); //Donde se van a mostrar todos los productos
let etiquetaCantidadEnCarrito = document.getElementById("itemsCarrito"); // etiqueta agregar cantidad de items en el carrito
let modalCarritoLista = document.getElementById("listaDelCarrito"); // modal al hacer click en el icono del carrito

let id = 1; // id para diferenciar todos los productos

let catalogo = []; //array para mostrar lso productos en la tienda
let carrito; // variable para guardar carrito en localStorage
let cantEnCarrito; //variable para guardar cant en el carrito en localStorage

let guardarCatalogoJSON; // variable para el  array catalogo en formato JSON

//FUNCIONES

//busca en el LS si hay guardado, si hay lo utiliza, si no hay inicializa. Agrega la etiqueta sobre el carrito
const iniciarLocalStorage = () => {
  if (localStorage.getItem("carrito") == undefined) {
    carrito = [];
  } else {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }

  if (localStorage.getItem("cantEnCarrito") == undefined) {
    cantEnCarrito = 0;
  } else {
    cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));
  }

  etiquetaCantidadEnCarrito.innerHTML = cantEnCarrito;
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

//crea un mensaje para corroborar que se agrego al carrito
const mensajeAgregado = () => {
  let contenedorMensaje = document.createElement("div");
  contenedorMensaje.classList.add("confirmacion");
  contenedorMensaje.innerHTML = "Agregado al carrito";
  document
    .getElementById("contenedorMensajeAgregado")
    .appendChild(contenedorMensaje);
};

//Si el elemento con id esta en carrito , aumenta en 1 la cantidad y cambia la etiqueta cantidad , agrega al carrito
const estaEnCarrito = (idRepetido) => {
  let estaItem = carrito.find((estaItem) => estaItem.id == idRepetido);

  let cantEnCarritoLS = JSON.parse(localStorage.getItem("cantEnCarrito"));

  if (estaItem) {
    estaItem.cantidad += 1;
    cantEnCarritoLS += 1;
    etiquetaCantidadEnCarrito.innerHTML = cantEnCarritoLS;
    actualizarLocalStorage(carrito, cantEnCarritoLS);
  } else {
    agregarCarrito(idRepetido);
  }
};

//Agrega el producto al carrito , aumenta en 1 la cantidad de items en carrito y cambia la etiqueta del carrito
const agregarCarrito = (idProducto) => {
  let producto = catalogo.find((producto) => producto.id == idProducto);

  let cantEnCarritoLS = JSON.parse(localStorage.getItem("cantEnCarrito"));

  carrito.push(producto);

  cantEnCarritoLS += 1;
  etiquetaCantidadEnCarrito.innerHTML = cantEnCarritoLS;

  actualizarLocalStorage(carrito, cantEnCarritoLS);
};

//actualiza el localStorage
const actualizarLocalStorage = (array, integer) => {
  localStorage.setItem("carrito", JSON.stringify(array));
  localStorage.setItem("cantEnCarrito", JSON.stringify(integer));
};

//actualiza y abre el modal con la lista cada vez que se hace click
const clickIconoCarrito = () => {
  let botonIconCarrito = document.getElementById("iconoCarrito");

  botonIconCarrito.onclick = () => {
    limpiarListaModal();
    crearModalCarrito();
  };
};

//si hay mas de 1 item del mismo producto , resta 1 en cantidad si hay solo 1 item lo elimina ,  despues  actualiza la lista y la cantidad en carrito.
const clickBorrarItem = (item) => {
  let botonEliminar = document.getElementById(`botonEliminar${item.id}`);

  let cantEnCarritoLS = JSON.parse(localStorage.getItem("cantEnCarrito"));

  botonEliminar.onclick = () => {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      if (item.cantidad == 1) {
        carrito = carrito.filter((prodEliminar) => prodEliminar.id != item.id);
      }
    }
    cantEnCarritoLS -= 1;
    actualizarLocalStorage(carrito, cantEnCarritoLS);

    etiquetaCantidadEnCarrito.innerHTML = cantEnCarritoLS;

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
  carrito = [];
  localStorage.clear();

  catalogo.forEach((item) => {
    item.cantidad = 1;
  });

  etiquetaCantidadEnCarrito.innerHTML = 0;

  limpiarListaModal();
};

//remueve todos los hijos creados cada vez que se agrega un item de distinto id al carrito y actualiza la cantidad de productos en carrito
const limpiarListaModal = () => {
  while (modalCarritoLista.firstChild) {
    modalCarritoLista.removeChild(modalCarritoLista.firstChild);
  }
};

//muestra por consola los JSON y el localStorage
const mostrarCatalogoJSON = () => {
  console.log("ITEMS EN CATALOGO JSON");
  console.log("");
  console.log(guardarCatalogoJSON);
};

//llama a todas las funciones
const app = () => {
  iniciarLocalStorage();
  inicializarProductos();
  crearCatalogo();
  clickAgregarCarrito();
  clickIconoCarrito();
  clickVaciarCarrito();
  mostrarCatalogoJSON();
};

app();
