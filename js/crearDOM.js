//Crea todas las "tarjetas" de los productos agregandolos un DIV y luego el div ,como hijo al id="tienda"
const crearCatalogo = () => {
  //  for (const item of catalogo) {     ,
  for (const item of JSON.parse(guardarCatalogoJSON)) {
    $("#tienda").append(` 
    <!-- Button trigger modal -->
    <div class="main__productos__card" id="${item.id}">

    <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter${item.id}">
        <img class="main__productos__card__image" src="${item.imagen}" alt="">
    </button>

    <p class="main__productos__card__title">${item.descripcion}</p>

    <p class="main__productos__card__precio">$ ${item.precio}</p>

    <button class="main__productos__card__button" type="button" id="botonComprar${item.id}">Agregar al Carrito</button>
    
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="modalCenter${item.id}" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">

      <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalCenterLongTitle">${item.categoria}</h5>
          </div>

          <div class="modal-body">
            <img class="main__productos__card__image__modal" src="https://i.ibb.co/h8n8x59/p.jpg" alt="">
            <p class="main__productos__card__title">${item.descripcion} </p>
            <p class="main__productos__card__precio">$ ${item.precio}</p>
          </div>

          <div class="modal-footer"> 
            <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
          <button type="button" class="btn btn-dark" id="botonComprarModal${item.id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
    `);
  }
};

//crea dentro del modal del carrito: la lista de productos , el boton eliminar, el precio total de la suma y los botones de vaciar y finalizar
const crearModalCarrito = () => {
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
              <p>Precio</p>
              <div>$${item.precio * item.cantidad}</div>
            </div>
        </div>
        <button class="itemModal__eliminar" id="botonEliminar${
          item.id
        }"><i class="far fa-trash-alt"></i></button>
      </div>
`
    );
    $(`#inputCantidad${item.id}`).val(`${item.cantidad}`);

    clickModificarCantidad(item);
    clickBorrarItem(item);
  }

  $("#listaDelCarrito").append(
    `<div class="modal__total">
      Total : $
      <span class="modal__total__valor" id="valorTotal">
      ${precioTotal}
      </span>
    </div>`
  );
};
