$("#carritoSeccion").append(`

                                                    <!-- MODAL CARRITO -->
        <div class="modal fade" id="modalCarrito" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCenterLongTitle">articulos Seleccionados
                        </h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>

                    </div>
                    <div class="modal-body" id="listaDelCarrito">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark " data-dismiss="modal" disabled id="vaciarCarrito">Vaciar
                            Carrito</button>
                        <button type="button" class="btn btn__estilo" data-dismiss="modal" id="continuarCompra" disabled data-toggle="modal" data-target="#modalFinalizarCompra">CONTINUAR</button>
                    </div>
                </div>
            </div>
        </div>`);
