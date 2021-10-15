const animarLoading = () => {
  $("#loadingTienda").hide();
  $("#loading")
    .show(700)
    .delay(500)
    .animate({ bottom: "-400px" }, 1000, () => {
      $("#loading").remove();
    });
};

const animarTitulo = () => {
  $("#tituloTienda").hide();
  $("#tituloTienda").fadeIn(3000);
};

const animarTienda = () => {
  $("#tienda").hide();

  $("#tienda").fadeIn(3000);
};

const animarLoadingTienda = () => {
  $("#loadingTienda").show();

  $("#loadingTienda").fadeIn(1);
  $("#loadingTienda").fadeOut(1000);

  // show(1700).delay(1500).remove();
};

const animarDatosContacto = () => {
  $("#datosContacto").hide();
  $("#datosContacto").fadeIn(800);
};
