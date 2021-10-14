$("#main").append(` <h1 class="main__titulo" id="tituloTienda">SHOP</h1>

            <div class="main__botones">
                      <button class="btn main__botones__click" id="botonTodos">Todos</button>
                      <button class="btn main__botones__click" id="soloRemeras">Remeras</button>
                      <button class="btn main__botones__click" id="soloJeans">Jeans</button>
                      <button class="btn main__botones__click" id="soloSweaters">Sweaters</button>
                      <button class="btn main__botones__click" id="soloAccesorios">accesorios</button>
            </div>

            <div class="main__productos" id="tienda">
            <div class="loadingTienda" id="loadingTienda"></div>
            
           


`);

//Crea todas las "tarjetas" de los productos agregandolos un DIV y luego el div ,como hijo al id="tienda"
const crearCatalogo = (categoria) => {
  $.ajax({
    method: "GET",
    url: URLJSON,
    success: (respuesta) => {
      let misDatos = respuesta;
      for (const item of misDatos) {
        if (categoria == undefined) {
          $("#tienda").append(` 
          <!-- Button trigger modal ZOOM -->
          <div class="main__productos__card " id="${item.id}">

          <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter${item.id}">
              <img class="main__productos__card__image" src="${item.imagen}" alt="">
          </button>

          <p class="main__productos__card__title">${item.categoria} ${item.descripcion}</p>

          <p class="main__productos__card__precio">$ ${item.precio}</p>

          <button class="main__productos__card__button" type="button" id="botonComprar${item.id}">agregar  <i
                    class="fas fa-shopping-cart carrito__imagen" id="iconoCarrito"></i></button>
          
          </div>
          
          <!-- Modal ITEM ZOOM-->
          <div class="modal fade" id="modalCenter${item.id}" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered" role="document">

              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title" id="modalCenterLongTitle">${item.categoria}</h5>
                </div>

                <div class="modal-body">
                  <img class="main__productos__card__image__modal" src="https://i.ibb.co/h8n8x59/p.jpg" alt="">
                  <p class="main__productos__card__title">${item.categoria} ${item.descripcion} </p>
                  <p class="main__productos__card__precio">$ ${item.precio}</p>
                </div>

                <div class="modal-footer"> 
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
                <button type="button" class="btn btn-dark" id="botonComprarModal${item.id}">al carrito</button>
                </div>
              </div>
            </div>
          </div>
          `);
        } else {
          if (item.categoria == categoria) {
            $("#tienda").append(` 
          <!-- Button trigger modal ZOOM -->
          <div class="main__productos__card " id="${item.id}">

          <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter${item.id}">
              <img class="main__productos__card__image" src="${item.imagen}" alt="">
          </button>

          <p class="main__productos__card__title">${item.categoria} ${item.descripcion}</p>

          <p class="main__productos__card__precio">$ ${item.precio}</p>

          <button class="main__productos__card__button" type="button" id="botonComprar${item.id}">al Carrito</button>
          
          </div>
          
          <!-- Modal ITEM ZOOM-->
          <div class="modal fade" id="modalCenter${item.id}" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered" role="document">

              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title" id="modalCenterLongTitle">${item.categoria}</h5>
                </div>

                <div class="modal-body">
                  <img class="main__productos__card__image__modal" src="https://i.ibb.co/h8n8x59/p.jpg" alt="">
                  <p class="main__productos__card__title">${item.categoria} ${item.descripcion} </p>
                  <p class="main__productos__card__precio">$ ${item.precio}</p>
                </div>

                <div class="modal-footer"> 
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
                <button type="button" class="btn btn-dark" id="botonComprarModal${item.id}">al carrito</button>
                </div>
              </div>
            </div>
          </div>
          `);
          }
        }
        catalogo.push(item);
      }
    },
  });
};
