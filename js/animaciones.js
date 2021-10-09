const animarLoading = () => {
  $("#loading")
    .show(700)
    .delay(500)
    .animate({ bottom: "-600px" }, 2500, () => {
      $("#loading").remove();
    });
};

const animarTienda = () => {
  $("#tituloTienda").hide();
  $("#tituloTienda").fadeIn(4500);

  $("#tienda").hide();
  $("#tienda").fadeIn(4500);
};

const animarEnvioDomicilio = () => {
  $("#paraEnvio").hide();
  $("#paraEnvio").slideDown(500);
};

const animarRetiraLocal = () => {
  $("#retiraLocal").hide();
  $("#retiraLocal").slideDown(500);
};
