const crearModalFinalizarCompra = () => {
  $("#bodyModalFinalizar").empty();
  $("#bodyModalFinalizar")
    .append(`<section class="modalFinalizarCompra" id="modalFinalizarCompra">
        <h5 class="modalFinalizarCompra__titulo">Envios</h5>
        <select class="modalFinalizarCompra__selector" name="envios" id="seleccionEnvios">
            <option value="vacio">Seleccione Envio</option>
            <option value="retirar">Retirar por el Local</option>
            <option value="enviar">Envio a domicilio</option>
        </select>

        <section class="modalidadEnvio" id="modalidadEnvio">
        
       
        </section>

        <h5 class="modalFinalizarCompra__titulo">Medio de Pago</h5>

        <select class="modalFinalizarCompra__selector" name="envios" id="seleccionPago">
            <option value="retirar">Efectivo al retirar</option>
            <option value="enviar">Debito</option>
            <option value="enviar">Credito - 1 Cuota</option>
            <option value="enviar">Credito - 3 Cuotas</option>
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

    </section>`);
};

const retiraPorLocal = () => {
  $("#modalidadEnvio").append(` <div class="modalFinalizarCompra__retira">
        
        <input id="dato1" type="text" name="name" required placeholder="Nombre">
        <input id="dato2" type="text" name="celular" required placeholder="Telefono">
        <input id="dato3" type="email" name="email" required placeholder="Email">
        </div>`);
};

const enviarDomicilio = () => {
  $("#modalidadEnvio").append(`   <div class="modalFinalizarCompra__enviar">
        
        <input id="datos1" type="text" name="name" required placeholder="Nombre">
        <input id="datos2" type="text" name="apellido" required placeholder="Appelido">
        <input id="datos3" type="email" name="email" required placeholder="Email">
        <input id="datos4" type="text" name="telefono" required placeholder="Telefono">
        <input id="datos5" type="text" name="direccion" required placeholder="Direccion">
        <input id="datos6" type="text" name="ciudad" required placeholder="Ciudad">
        <input id="datos7" id="cp" type="text" name="cp" required placeholder="Codigo Postal">
        </div>`);
};
