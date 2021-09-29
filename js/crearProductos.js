//Clase Producto , llama a funcion para guardar en LocalStorage
class Producto {
  constructor(categoria, descripcion, precio, imagen) {
    this.id = id;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
    this.imagen = imagen;
    this.cantidad = 1;
  }
}

//Crea producto llamando a la clase Producto y aumenta el id
const crearProducto = (categoria, descripcion, precio, imagen) => {
  catalogo.push(new Producto(categoria, descripcion, precio, imagen));
  id += 1;
};

//Llama a crearProductos y crearAccesorios y despues crea un JSON con el catalogo completo
const inicializarProductos = () => {
  crearProducto(
    "Remera",
    "Remera talle XXL manga corta estampada color azul",
    1240,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );
  crearProducto(
    "Jean",
    "Talle 50 tipo Chupin color claro",
    3600,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );
  crearProducto(
    "Sweater",
    "Talle XL de hilo color negro",
    2700,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );
  crearProducto(
    "Jean",
    "Talle 52 recto color oscuro",
    3600,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );
  crearProducto(
    "Sweater",
    "Talle XL de lanilla color negro",
    2700,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );

  crearProducto(
    "Accesorio",
    "Anillo de Oro grabado a pedido",
    4300,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );
  crearProducto(
    "Accesorio",
    "Cadenita de Acero Quirurgico con medalla",
    1250,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );
  crearProducto(
    "Accesorio",
    "Pulsera de plata con inicial",
    1500,
    "https://i.ibb.co/h8n8x59/p.jpg"
  );

  guardarCatalogoJSON = JSON.stringify(catalogo);
};
