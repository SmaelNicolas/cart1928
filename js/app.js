let id = 1; // id para diferenciar todos los productos
let catalogo = []; //array para mostrar lso productos en la tienda
let carrito; // variable para guardar carrito en localStorage
let cantEnCarrito; //variable para guardar cant en el carrito en localStorage
let precioTotal; //variable para guardar el total de los productos

const URLJSON = "./data/productos.json";

//FUNCIONES

//busca en el LS si hay guardado, si hay lo utiliza, si no hay inicializa. Agrega la etiqueta sobre el carrito
const iniciarLocalStorage = () => {
  localStorage.getItem("carrito") == undefined
    ? (carrito = [])
    : (carrito = JSON.parse(localStorage.getItem("carrito")));

  localStorage.getItem("cantEnCarrito") == undefined
    ? (cantEnCarrito = 0)
    : (cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito")));

  localStorage.getItem("precioTotal") == undefined
    ? (precioTotal = 0)
    : (precioTotal = JSON.parse(localStorage.getItem("precioTotal")));

  $("#itemsCarrito").text(cantEnCarrito);
};

const clickMostrarTodos = () => {
  $(`#botonTodos`).click(() => {
    $("#tienda").empty();
    crearCatalogo("Todos");
  });
};

const clickMostrarRemeras = () => {
  $(`#soloRemeras`).click(() => {
    $("#tienda").empty();
    crearCatalogo("Remera");
  });
};

const clickMostrarJeans = () => {
  $(`#soloJeans`).click(() => {
    $("#tienda").empty();
    crearCatalogo("Jean");
  });
};

const clickMostrarSweaters = () => {
  $(`#soloSweaters`).click(() => {
    $("#tienda").empty();
    crearCatalogo("Sweater");
  });
};

const clickMostrarAccesorios = () => {
  $(`#soloAccesorios`).click(() => {
    $("#tienda").empty();
    crearCatalogo("Accesorio");
  });
};

const botonesSeleccion = () => {
  clickMostrarTodos();
  clickMostrarRemeras();
  clickMostrarJeans();
  clickMostrarSweaters();
  clickMostrarAccesorios();
};

//activa los botones de todos los id del catalogo y del modal.
const clickAgregarCarrito = () => {
  $.ajax({
    method: "GET",
    url: URLJSON,
    success: (respuesta) => {
      let misDatos = respuesta;

      for (let i = 1; i < misDatos.length; i++) {
        $(`#botonComprar${i}`).click(() => {
          estaEnCarrito(i);
          mensajeAgregado();
        });

        $(`#botonComprarModal${i}`).click(() => {
          estaEnCarrito(i);
          mensajeAgregado();
        });
      }
    },
  });
};

//crea un mensaje para corroborar que se agrego al carrito
const mensajeAgregado = () => {
  $("#contenedorMensajeAgregado").append(
    `<div class="confirmacion">
        <p>agregado al carrito<p>
    </div>`
  );
};

//Si el elemento con id esta en carrito , aumenta en 1 la cantidad y cambia la etiqueta cantidad , agrega al carrito
const estaEnCarrito = (idRepetido) => {
  let producto = carrito.find((producto) => producto.id == idRepetido);

  cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));

  if (producto) {
    producto.cantidad += 1;
    cantEnCarrito += 1;
    $("#itemsCarrito").text(cantEnCarrito);
    precioTotal += producto.precio;
    actualizarLocalStorage();
  } else {
    agregarCarrito(idRepetido);
  }
};

//Agrega el producto al carrito , aumenta en 1 la cantidad de items en carrito y cambia la etiqueta del carrito
const agregarCarrito = (idProducto) => {
  let producto = catalogo.find((producto) => producto.id == idProducto);

  cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));

  carrito.push(producto);

  cantEnCarrito += 1;
  $("#itemsCarrito").text(cantEnCarrito);
  precioTotal += producto.precio;
  actualizarLocalStorage();
};

//actualiza el localStorage
const actualizarLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("cantEnCarrito", JSON.stringify(cantEnCarrito));
  localStorage.setItem("precioTotal", JSON.stringify(precioTotal));
  $("#itemsCarrito").text(cantEnCarrito);
};

//actualiza y abre el modal con la lista cada vez que se hace click
const clickIconoCarrito = () => {
  $("#iconoCarrito").click(() => {
    limpiarListaModal();
    crearModalCarrito();

    if (carrito.length == 0) {
      $("#continuarCompra").prop("disabled", true);
      $("#vaciarCarrito").prop("disabled", true);
    } else {
      $("#continuarCompra").prop("disabled", false);
      $("#vaciarCarrito").prop("disabled", false);
    }
  });
};

//si hay mas de 1 item del mismo producto , resta 1 en cantidad si hay solo 1 item lo elimina ,  despues  actualiza la lista y la cantidad en carrito.
const clickBorrarItem = (item) => {
  cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));

  $(`#botonEliminar${item.id}`).click(() => {
    item.cantidad > 1
      ? (item.cantidad -= 1)
      : item.cantidad == 1
      ? (carrito = carrito.filter((prodEliminar) => prodEliminar.id != item.id))
      : console.log("ERROR CLICK BORRAR");

    cantEnCarrito -= 1;
    precioTotal -= item.precio;
    actualizarLocalStorage();

    limpiarListaModal();
    crearModalCarrito();
  });
};

const clickModificarCantidad = (item) => {
  cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));
  let cantAnterior = parseInt($(`#inputCantidad${item.id}`).val());

  $(`#inputCantidad${item.id}`).change(() => {
    let cantNueva = parseInt($(`#inputCantidad${item.id}`).val());

    if (cantNueva <= 0) {
      $(`#inputCantidad${item.id}`).val(cantAnterior);
    } else {
      if (cantNueva > cantAnterior) {
        cantEnCarrito += cantNueva - cantAnterior;
        precioTotal += (cantNueva - cantAnterior) * item.precio;
      } else {
        cantEnCarrito -= cantAnterior - cantNueva;
        precioTotal -= (cantAnterior - cantNueva) * item.precio;
      }

      let producto = carrito.find((producto) => producto == item);

      producto.cantidad = cantNueva;

      actualizarLocalStorage();

      limpiarListaModal();

      crearModalCarrito();
    }
  });
};

//si hay productos devuelve un alert por la suma de precios
const clickContinuar = () => {
  $("#continuarCompra").click(() => {
    crearModalFinalizarCompra();
    $("#modalidadEnvio").empty();

    $("#finalizarCompra").prop("disabled", true);

    $("#valorEnvio").html(0);
    $("#valorTotalConEnvio").html(precioTotal);
    localStorage.setItem("precioTotalConEnvio", precioTotal);
    cambiosEnEnviar();
  });
};

const cambiosEnEnviar = () => {
  $("#clickEnvio").click(() => {
    $("#modalidadEnvio").empty();
    datosContacto();
    animarDatosContacto();
    $("#valorEnvio").html(400);
    $("#valorTotalConEnvio").html(precioTotal + 400);
    localStorage.setItem("precioTotalConEnvio", precioTotal + 400);
    localStorage.setItem("envio", 400);

    $("#finalizarCompra").prop("disabled", false);
  });

  $("#clickRetiro").click(() => {
    datosContacto();
    animarDatosContacto();
    $("#valorEnvio").html(0);
    $("#valorTotalConEnvio").html(precioTotal);
    localStorage.setItem("precioTotalConEnvio", precioTotal);
    localStorage.setItem("envio", 0);

    $("#finalizarCompra").prop("disabled", false);
  });

  clickFinalizarCompra();
};

const clickFinalizarCompra = () => {
  let txt = "";
  $("#finalizarCompra").click(() => {
    if ($(".infoEnviar").val() != "") {
      for (const i of carrito) {
        txt += `${i.cantidad} x ${i.categoria} ${i.descripcion} = ${
          i.precio * i.cantidad
        } \n`;
      }
      txt += `Total Con Envio: $${localStorage.getItem("precioTotalConEnvio")}`;
      console.log(txt);
      vaciarCarrito();
    } else {
      alert("COMPLETE LOS DATOS");
    }
  });
};

//click en boton vaciar carrito elimina si hay productos en la lista
const clickVaciarCarrito = () => {
  $("#vaciarCarrito").click(() => {
    vaciarCarrito();
  });
};

//elimina los productos en carrito
const vaciarCarrito = () => {
  carrito = [];
  precioTotal = 0;
  localStorage.clear();

  catalogo.forEach((item) => {
    item.cantidad = 1;
  });

  $("#itemsCarrito").text(0);

  limpiarListaModal();
};

//remueve todos los hijos creados cada vez que se agrega un item de distinto id al carrito y actualiza la cantidad de productos en carrito
const limpiarListaModal = () => {
  $("#listaDelCarrito").empty();
};

//muestra por consola los JSON y el localStorage
const mostrarCatalogoJSON = () => {
  $.getJSON(URLJSON, (respuesta, estado) => {
    if (estado == "success") {
      let misDatos = respuesta;
      console.log("");
      console.log("productos.json");
      console.log(misDatos);
    }
  });
};

//llama a todas las funciones
const app = () => {
  iniciarLocalStorage();
  // inicializarProductos();
  crearCatalogo();
  botonesSeleccion();
  clickAgregarCarrito();
  clickIconoCarrito();
  clickVaciarCarrito();
  clickContinuar();

  mostrarCatalogoJSON();
};

$(document).ready(function () {
  animarLoading();
  animarTitulo();
  animarTienda();
  app();
});
