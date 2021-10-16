//crea dentro del modal del carrito: la lista de productos , el boton eliminar, el precio total de la suma y los botones de vaciar y finalizar
const crearListaCarritoDOM = () => {
  for (const item of carrito) {
    $("#listaDelCarrito").append(
      `<div class="itemModal">
          <img class="itemModal__imagen" src="${item.imagen}" alt="">
          <div class="itemModal__info">
            <h5 class="itemModal__info__titulo">${item.categoria} ${
        item.descripcion
      }</h5>
            <div class="itemModal__info__cantidad" id="infoCantidad">
                  <div>Cantidad</div>
                   <input class="itemModal__info__cantidad__input" id="inputCantidad${
                     item.id
                   }" type="text">

                  
            </div>
            <div class="itemModal__info__precio" id="infoPrecio">
              <p>precio</p>
              <div>$${item.precio * item.cantidad}</div>
            </div>
        </div>
        <button class="itemModal__eliminar" id="botonEliminar${
          item.id
        }"><i class="far fa-trash-alt"></i></button>
      </div>`
    );

    $(`#inputCantidad${item.id}`).val(`${item.cantidad}`);

    clickModificarCantidad(item);
    clickBorrarItem(item);
  }

  $("#listaDelCarrito").append(
    `<div class="modal__total">
      total : $
      <span class="modal__total__valor" id="valorTotal">
      ${precioTotal}
      </span>
    </div>`
  );
};
