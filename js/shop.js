let catalogo = document.getElementById("catalogo");

let producto = `  <!-- Button trigger modal -->
            <div class="main__productos__card" id="item1">
                <button type="button" class="btn" data-toggle="modal" data-target="#modalCenter">

                    <img class="main__productos__card__image" src="https://i.ibb.co/JjmP5YW/jeans2.jpg" alt="">
                </button>
                <p class="main__productos__card__title">Jean Negro - Talle 50</p>
                <p class="main__productos__card__precio">$ 3.500</p>
                <a class="main__productos__card__button" type="button">Comprar</a>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalCenterLongTitle">Jean Negro - Talle 50</h5>
                        </div>
                        <div class="modal-body">
                            <img class="main__productos__card__image__modal" src="https://i.ibb.co/JjmP5YW/jeans2.jpg"
                                alt="">
                            <p class="main__productos__card__title">Jean negro , talle 50 estilo chupin. </p>
                            <p class="main__productos__card__title">Elastizado </p>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
                            <button type="button" class="btn btn-dark">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
`;

for (let i = 0; i < 5; i++) {
  let div = document.createElement("div");
  div.innerHTML = producto;
  catalogo.appendChild(div);
}
