$("#carritoSeccion").append(`<!- MODAL FINALIZAR COMPRA-->
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
                <section class="modalFinalizarCompra" id="listaEnvios">

                        <h5 class="modalFinalizarCompra__titulo">envios</h5>


                        <div class="modalFinalizarCompra__selector" name="envios" id="seleccionEnvios">
                            <button id="clickRetiro" class="btn btn__estilo">retirar por el Local</button>
                            <button id="clickEnvio" class="btn btn__estilo">envio a domicilio</button>
                        </div>

                        <section class="modalidadEnvio" id="modalidadEnvio">
                            <div class="modalFinalizarCompra__enviar hide" id="datosContacto">
                                <input class="infoEnviar" type="text" name="name" required placeholder="Nombre">
                                <input class="infoEnviar" type="text" name="apellido" required placeholder="Appelido">
                                <input class="infoEnviar" type="email" name="email" required placeholder="Email">
                                <input class="infoEnviar" type="text" name="telefono" required placeholder="Telefono">
                                <input class="infoEnviar" type="text" name="direccion" required placeholder="Direccion">
                                <input class="infoEnviar" type="text" name="ciudad" required placeholder="Ciudad">
                                <input class="infoEnviar" id="cp" type="text" name="cp" required placeholder="Codigo Postal">
                            </div>                  
                        </section>

                        <h5 class="modalFinalizarCompra__titulo">Medio de Pago</h5>

                        <select class="modalFinalizarCompra__selector" name="envios" id="seleccionPago">
                            <option value="retirar">efectivo al retirar</option>
                            <option value="enviar">debito</option>
                            <option value="enviar">credito - 1 Cuota</option>
                            <option value="enviar">credito - 3 Cuotas</option>
                        </select>

                        <div class="modal__total modal__total__valorEnvio">
                            Envio : $
                            <span class="modal__total__valorEnvio" id="valorEnvio">
                                
                            </span>

                        </div>

                        <div class="modal__total">
                            TOTAL : $ 
                            <span class="modal__total__valor" id="valorTotalConEnvio">
                                
                            </span>
                        </div>

                    </section>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark " data-dismiss="modal" id="cancelarCompra">CANCELAR</button>
                        <button type="button" class="btn btn__estilo" data-dismiss="modal" id="finalizarCompra" disabled href="#" data-target="#modalFinalizarCompra" type="submit">fINALIZAR COMPRA</button>
                    </div>
                </div>
            </div>
        </div>`);