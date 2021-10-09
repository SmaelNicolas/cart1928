$("#loading")
  .show(500)
  .delay(1000)
  .animate({ bottom: "-1000px" }, 2500, () => {
    $("#loading").remove();
  });

$("#tituloTienda").hide();
$("#tituloTienda").fadeIn(4000);
$("#tienda").hide();
$("#tienda").fadeIn(5000);
