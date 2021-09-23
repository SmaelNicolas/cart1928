let catalogo = document.getElementById("catalogo");

const productos = [
  {
    id: 1,
    nombre: "Remera",
    Talle: "XLL",
    color: "Negro",
    precio: "1750",
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 2,
    nombre: "Remera",
    Talle: "XL",
    color: "Blanco",
    precio: 950,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 4,
    nombre: "Remera",
    Talle: "XXL",
    color: "Gris",
    precio: 1450,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 5,
    nombre: "Jean",
    Talle: 50,
    color: "Claro",
    precio: 2350,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 6,
    nombre: "Jean",
    Talle: 54,
    color: "Claro",
    precio: 2200,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 7,
    nombre: "Jean",
    Talle: 52,
    color: "Oscuro",
    precio: 2950,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 8,
    nombre: "Sweater",
    Talle: "L",
    color: "Gris",
    precio: 1970,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 9,
    nombre: "Sweater",
    Talle: "XXL",
    color: "Marron",
    precio: 2020,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 10,
    nombre: "Sweater",
    Talle: "XL",
    color: "Negro",
    precio: 2430,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 11,
    nombre: "Accesorio",
    Talle: "",
    color: "",
    precio: 2940,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 12,
    nombre: "Accesorio",
    Talle: "",
    color: "",
    precio: 850,
    descripcion: "Breve Descripcion del Producto",
  },
  {
    id: 13,
    nombre: "Accesorio",
    Talle: "",
    color: "",
    precio: 550,
    descripcion: "Breve Descripcion del Producto",
  },
];

for (const item of productos) {
  let producto = `  <!-- Button trigger modal -->
            <div class="main__productos__card" id="item1">
                <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter">

                    <img class="main__productos__card__image" src="https://i.ibb.co/h8n8x59/p.jpg" alt="">
                </button>
                <p class="main__productos__card__title">${item.nombre} - ${item.color} - ${item.Talle}</p>
                <p class="main__productos__card__precio">$ ${item.precio}</p>
                <a class="main__productos__card__button" type="button">Comprar</a>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalCenterLongTitle">${item.nombre} - ${item.color} - ${item.Talle}
                            </h5>
                        </div>
                        <div class="modal-body">
                            <img class="main__productos__card__image__modal" src="https://i.ibb.co/h8n8x59/p.jpg"
                                alt="">
                            <p class="main__productos__card__title">${item.descripcion} </p>
                            <p class="main__productos__card__precio">$ ${item.precio}</p>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
                            <button type="button" class="btn btn-dark">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
`;

  let contenedorProducto = document.createElement("div");
  contenedorProducto.innerHTML = producto;
  catalogo.appendChild(contenedorProducto);
}
