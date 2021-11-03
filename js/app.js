//------------------------------------------------------------------------------VARIABLES

let id = 1; // id para diferenciar todos los productos
let catalogo = []; //array para guardar los productos de productos.json
let carrito; // variable para guardar carrito en localStorage
let cantEnCarrito; //variable para guardar cant en el carrito en localStorage
let precioTotal; //variable para guardar el total de los productos
let txt; // variable para guardar el texto a mostrar al finalizar compra
const URLJSON = "./data/productos.json"; //url de .json donde se almacenan los productos a mostrar

//------------------------------------------------------------------------------FIN VARIABLES

//------------------------------------------------------------------------------LOCAL STORAGE

//busca en el LocalStorage si existen datos guardado, si hay lo utiliza, si no hay los inicializa. Agrega la etiqueta sobre el carrito
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

//actualiza el localStorage y la entiqueta cant en carrito
const actualizarLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("cantEnCarrito", JSON.stringify(cantEnCarrito));
  localStorage.setItem("precioTotal", JSON.stringify(precioTotal));
  $("#itemsCarrito").text(cantEnCarrito);
};

//------------------------------------------------------------------------------FIN LOCAL STORAGE

//------------------------------------------------------------------------------ BOTONES MOSTRAR Y AGREGAR

// Muestra todos los productos de productos.json (undefined)
const clickMostrarTodos = () => {
  $(`#botonTodos`).click(() => {
    $(".main__botones__click").prop("disabled", false); //habilita todos los botones
    $(`#botonTodos`).prop("disabled", true); //se desabilita el del click

    $("#tienda").empty(); //Elimina el contenido de la seccion de tienda
    animarLoadingTienda(); //Agrega animacion de "Loading..."
    crearProductosEnCatalogoDOM(); //crea el catalogo de productos que coincidan con el parametro
    clickAgregarCarrito(); //activa todos los botones agregar al carrito
  });
};

// Muestra todas las Remeras de productos.json con categoria ("Remera")
const clickMostrarRemeras = () => {
  $(`#soloRemeras`).click(() => {
    $(".main__botones__click").prop("disabled", false);
    $(`#soloRemeras`).prop("disabled", true);

    $("#tienda").empty();
    animarLoadingTienda();
    crearProductosEnCatalogoDOM("remera");
    clickAgregarCarrito();
  });
};

// Muestra todas los Jeans de productos.json con categoria ("Jean")
const clickMostrarJeans = () => {
  $(`#soloJeans`).click(() => {
    $(".main__botones__click").prop("disabled", false);
    $(`#soloJeans`).prop("disabled", true);

    $("#tienda").empty();
    animarLoadingTienda();
    crearProductosEnCatalogoDOM("jean");
    clickAgregarCarrito();
  });
};

// Muestra todas los Sweaters de productos.json con categoria ("Sweater")
const clickMostrarSweaters = () => {
  $(`#soloSweaters`).click(() => {
    $(".main__botones__click").prop("disabled", false);
    $(`#soloSweaters`).prop("disabled", true);

    $("#tienda").empty();
    animarLoadingTienda();
    crearProductosEnCatalogoDOM("sweater");
    clickAgregarCarrito();
    $(`.main__botones__click`).prop("disable", false);
  });
};

// Muestra todas los Accesorios de productos.json con categoria ("Accesorio")
const clickMostrarAccesorios = () => {
  $("#yourElesoloAccesoriosment").attr("title", "mostrar todos");
  $(`#soloAccesorios`).click(() => {
    $(".main__botones__click").prop("disabled", false);
    $(`#soloAccesorios`).prop("disabled", true);

    $("#tienda").empty();
    animarLoadingTienda();
    crearProductosEnCatalogoDOM("accesorio");
    clickAgregarCarrito();
  });
};

//obtiene los datos de .json y activa los botones agregar al carrito
const clickAgregarCarrito = () => {
  $.ajax({
    method: "GET",
    url: URLJSON,
    success: (respuesta) => {
      for (let i = 1; i <= respuesta.length; i++) {
        //recorro lo recibido del .json
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
        <p>producto agregado al carrito<p>
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
  precioTotal += producto.precio;
  actualizarLocalStorage();
};

// ------------------------------------------------------------------------------ FIN BOTONES MOSTRAR Y AGREGAR

// ------------------------------------------------------------------------------MODAL LISTA CARRITO

//actualiza y abre el la lista de productos del carrito
const clickIconoCarrito = () => {
  $("#iconoCarrito").click(() => {
    actualizarListaCarrito();
  });
};

//limpia la lista del carrito , la vuelve a crear y chequea los botones vaciar  y continuar
const actualizarListaCarrito = () => {
  actualizarLocalStorage();
  $("#listaDelCarrito").empty();
  crearListaCarritoDOM();
  activarBotonesVaciarContinuar();
};

//Si hay productos en el carrito los botones se activan sino se desactivan
const activarBotonesVaciarContinuar = () => {
  if (carrito.length == 0) {
    $("#continuarCompra").prop("disabled", true);
    $("#vaciarCarrito").prop("disabled", true);
  } else {
    $("#continuarCompra").prop("disabled", false);
    $("#vaciarCarrito").prop("disabled", false);
  }
};

//si hay mas de 1 item del mismo producto , resta 1 en cantidad si hay solo 1 item lo elimina ,  despues  actualiza la lista del carrito
const clickBorrarItem = (item) => {
  cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));

  $(`#botonEliminar${item.id}`).click(() => {
    item.cantidad > 1
      ? (item.cantidad -= 1)
      : item.cantidad == 1
      ? (carrito = carrito.filter((prodEliminar) => prodEliminar.id != item.id))
      : undefined;

    cantEnCarrito -= 1;
    precioTotal -= item.precio;

    actualizarListaCarrito();
  });
};

// 2 variables nuevo y anterior para cambiar la cantiddad
// si hay cambios en la etiqueta de cantidad , chequea que sea un numero valido y cambia la cantidad del producto en el carrito, despues actualiza la lista
const clickModificarCantidad = (item) => {
  cantEnCarrito = JSON.parse(localStorage.getItem("cantEnCarrito"));
  let cantAnterior = parseInt($(`#inputCantidad${item.id}`).val());

  $(`#inputCantidad${item.id}`).change(() => {
    let cantNueva = parseInt($(`#inputCantidad${item.id}`).val());

    if (cantNueva <= 0 || isNaN(cantNueva) || cantNueva > 100) {
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

      actualizarListaCarrito();
    }
  });
};

//elimina si hay productos en carrito
const clickVaciarCarrito = () => {
  $("#vaciarCarrito").click(() => {
    vaciarCarrito();
  });
};

// ------------------------------------------------------------------------------ FIN  PRIMER MODAL LISTA CARRITO

// ------------------------------------------------------------------------------ SEGUNDO MODAL DATOS DE ENVIO

//abre segundo modal , actualiza etiquetas y variable en LS
const clickContinuar = () => {
  $("#continuarCompra").click(() => {
    $("#valorEnvio").html(0);
    $("#valorTotalConEnvio").html(precioTotal);
    localStorage.setItem("precioTotalConEnvio", precioTotal);

    animarDatosContacto();
    cambiosEnEnviar();

    $("#finalizarCompra").prop("disabled", true);
  });
};

//depende q tipo se elija, se actualizan los preciostotales y de envio y se activa boton continuar
const cambiosEnEnviar = () => {
  $("#clickRetiro").click(() => {
    $("#valorEnvio").html(0);
    $("#valorTotalConEnvio").html(precioTotal);

    localStorage.setItem("precioTotalConEnvio", precioTotal);
    localStorage.setItem("envio", 0);

    $("#finalizarCompra").prop("disabled", false);
  });

  $("#clickEnvio").click(() => {
    $("#valorEnvio").html(400);
    $("#valorTotalConEnvio").html(precioTotal + 400);

    localStorage.setItem("precioTotalConEnvio", precioTotal + 400);
    localStorage.setItem("envio", 400);

    $("#finalizarCompra").prop("disabled", false);
  });
};

//si todos los campos estan completos muestra por consola los productos "comprados" , vacia el carrito y recarga la pagina
const clickFinalizarCompra = () => {
  $("#finalizarCompra").click(() => {
    txt = "";

    if ($(".infoEnviar").val() != "") {
      for (const i of carrito) {
        txt += `${i.cantidad} x ${i.categoria} ${i.descripcion} = ${
          i.precio * i.cantidad
        } \n`;
      }
      txt += `\n Total segun metodo de envio: $${localStorage.getItem(
        "precioTotalConEnvio"
      )} \n `;
      console.log(txt);
      vaciarCarrito();
    } else {
      alert("COMPLETE LOS DATOS");
    }
  });
};
// ------------------------------------------------------------------------------ FIN SEGUNDO MODAL DATOS DE ENVIO

//elimina los productos en carrito, limpia la lista del carrito , vacia el LS  y pone todo a 0
const vaciarCarrito = () => {
  carrito = [];
  precioTotal = 0;
  cantEnCarrito = 0;
  localStorage.clear();

  catalogo.forEach((item) => {
    item.cantidad = 1;
  });

  $("#itemsCarrito").text(0);

  $("#listaDelCarrito").empty();
};

//llamada a todos los clicks
const botones = () => {
  clickMostrarTodos();
  clickMostrarRemeras();
  clickMostrarJeans();
  clickMostrarSweaters();
  clickMostrarAccesorios();
  clickAgregarCarrito();
  clickIconoCarrito();
  clickVaciarCarrito();
  clickContinuar();
  clickFinalizarCompra();
};

//llama a todas las funciones
const app = () => {
  iniciarLocalStorage();
  crearProductosEnCatalogoDOM();
  botones();
};

$(document).ready(function () {
  app();
  animarLoading();
  animarTitulo();
  animarTienda();
});
