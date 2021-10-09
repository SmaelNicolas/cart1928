$("#carritoSeccion").append(`   <section class="carrito" id="carrito">
            <span class="carrito__itemstotal" id="itemsCarrito"></span>
            <a class="carrito__icon" href="#" data-toggle="modal" data-target="#modalCarrito"><i
                    class="fas fa-shopping-cart carrito__imagen" id="iconoCarrito"></i></a>
        </section>
        <!-- Modal -->
        <div class="modal fade" id="modalCarrito" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCenterLongTitle">Articulos Seleccionados
                        </h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>

                    </div>
                    <div class="modal-body" id="listaDelCarrito">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark " data-dismiss="modal" id="vaciarCarrito">Vaciar
                            Carrito</button>
                        <button type="button" class="btn btn-rosa" data-dismiss="modal" id="continuarCompra" disabled href="#" data-toggle="modal" data-target="#modalFinalizarCompra">CONTINUAR</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        <!- MODAL FINALIZAR COMPRA-->
        <div class="modal fade" id="modalFinalizarCompra" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCenterLongTitle">Finalizar Compra
                        </h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>

                    </div>
                    <div class="modal-body" id="bodyModalFinalizar">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark " data-dismiss="modal" id="cancelarCompra">CANCELAR</button>
                        <button type="button" class="btn btn-rosa" data-dismiss="modal" id="finalizarCompra" href="#" data-toggle="modal" data-target="#modalFinalizarCompra">FINALIZAR COMPRA</button>
                    </div>
                </div>
            </div>
        </div>
        `);
