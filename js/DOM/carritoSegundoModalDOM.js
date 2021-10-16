$("#carritoSeccion").append(`
                                        <!- MODAL FINALIZAR COMPRA-->
                                        
        <div class="modal fade" id="modalFinalizarCompra" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCenterLongTitle">finalizar Compra
                        </h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>

                    </div>
                    <div class="modal-body" id="bodyModalFinalizar">
                <section class="modalFinalizarCompra" id="listaEnvios">

                        <h5 class="modalFinalizarCompra__titulo">envios</h5>


                        <div class="modalFinalizarCompra__selector" name="envios" id="seleccionEnvios">
                            <button id="clickRetiro" class="btn btn__estilo">retirar por el local</button>
                            <button id="clickEnvio" class="btn btn__estilo">envio a domicilio</button>
                        </div>

                        <section class="modalidadEnvio" id="modalidadEnvio">
                            <div class="modalFinalizarCompra__enviar hide" id="datosContacto">
                                <input class="infoEnviar" type="text" name="name" required placeholder="nombre">
                                <input class="infoEnviar" type="text" name="apellido" required placeholder="apellido">
                                <input class="infoEnviar" type="email" name="email" required placeholder="email">
                                <input class="infoEnviar" type="text" name="telefono" required placeholder="telefono">
                                <input class="infoEnviar" type="text" name="direccion" required placeholder="direccion">
                                <input class="infoEnviar" type="text" name="ciudad" required placeholder="ciudad">
                                <input class="infoEnviar" id="cp" type="text" name="cp" required placeholder="codigo postal">
                            </div>                  
                        </section>

                        <h5 class="modalFinalizarCompra__titulo">medio de pago</h5>

                        <select class="modalFinalizarCompra__selector" name="envios" id="seleccionPago">
                            <option value="retirar">efectivo al retirar</option>
                            <option value="enviar">debito</option>
                            <option value="enviar">credito - 1 Cuota</option>
                            <option value="enviar">credito - 3 Cuotas</option>
                        </select>

                        <div class="modal__total modal__total__valorEnvio">
                            envio : $
                            <span class="modal__total__valorEnvio" id="valorEnvio">
                                
                            </span>

                        </div>

                        <div class="modal__total">
                            total : $ 
                            <span class="modal__total__valor" id="valorTotalConEnvio">
                                
                            </span>
                        </div>

                    </section>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark " data-dismiss="modal" id="cancelarCompra">cancelar</button>
                        <button type="button" class="btn btn__estilo" data-dismiss="modal" id="finalizarCompra" disabled href="#" data-target="#modalFinalizarCompra" type="submit">finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>`);
