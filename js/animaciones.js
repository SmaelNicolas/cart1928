const animarLoading = () => {
  $("#loading")
    .show(700)
    .delay(500)
    .animate({ bottom: "-600px" }, 2500, () => {
      $("#loading").remove();
    });
};

const animarTitulo = () => {
  $("#tituloTienda").hide();
  $("#tituloTienda").fadeIn(4500);
};

const animarTienda = () => {
  $("#tienda").hide();
  $("#tienda").fadeIn(4500);
};

const animarDatosContacto = () => {
  $("#datosContacto").hide();
  $("#datosContacto").fadeIn(800);
};
