import React, { useState } from "react";

const productos = [
  {
    nombre: "Zapatillas de Running Nike Air Zoom",
    imagen: "/images/nike.jpeg",
    precio: 250000,
  },
  {
    nombre: "Chaqueta Deportiva Adidas",
    imagen: "/images/chaqueta.jpeg",
    precio: 180000,
  },
  {
    nombre: "Mochila Deportiva Under Armour",
    imagen: "/images/mochila.jpeg",
    precio: 120000,
  },
  {
    nombre: "Pelota de Fútbol Adidas",
    imagen: "/images/pelota-futbol.png",
    precio: 70000,
  },
  {
    nombre: "Guantes de Portero Puma",
    imagen: "/images/guantes.jpeg",
    precio: 90000,
  },
  {
    nombre: "Shorts de Deporte Reebok",
    imagen: "/images/shorts-deportes.jpeg",
    precio: 80000,
  },

  {
    nombre: "Ropa de Ciclismo",
    imagen: "/images/ropa-ciclismo.jpeg",
    precio: 150000,
  },
  {
    nombre: "Gafas de Sol Oakley",
    imagen: "/images/gafas-sol.jpeg",
    precio: 300000,
  },
  {
    nombre: "Reloj Deportivo Casio",
    imagen: "/images/reloj-deportivo.jpeg",
    precio: 100000,
  },
  {
    nombre: "Bandana Deportiva",
    imagen: "/images/banda-deportiva.jpeg",
    precio: 20000,
  },
  {
    nombre: "Chaleco de Entrenamiento",
    imagen: "/images/chaleco-entrenamiento.jpeg",
    precio: 50000,
  },
  {
    nombre: "Sudadera con Capucha",
    imagen: "/images/sudadera.jpeg",
    precio: 120000,
  },
  {
    nombre: "Zapatillas de Tenis",
    imagen: "/images/zapatillas-deporte.jpeg",
    precio: 200000,
  },

  {
    nombre: "Pelota de Baloncesto",
    imagen: "/images/pelota-baloncesto.jpeg",
    precio: 60000,
  },
  {
    nombre: "Guantes de Boxeo",
    imagen: "/images/guantes-boxeo.jpeg",
    precio: 100000,
  },

  {
    nombre: "Ropa de Natación",
    imagen: "/images/ropa-natacion.jpeg",
    precio: 150000,
  },
  {
    nombre: "Zapatillas de Running New Balance",
    imagen: "/images/zapatillas-tenis.jpeg",
    precio: 200000,
  },

  {
    nombre: "Pelota de Fútbol Adidas",
    imagen: "/images/pelota-futbol.png",
    precio: 70000,
  },
  {
    nombre: "Sudadera con Capucha",
    imagen: "/images/sudadera.jpeg",
    precio: 120000,
  },
 


];

const Modulo2 = () => {
  const [imagenGrande, setImagenGrande] = useState(null);

  const abrirImagenGrande = (imagen) => {
    setImagenGrande(imagen);
  };

  const cerrarImagenGrande = () => {
    setImagenGrande(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {productos.map((producto, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="card-img-top"
                onClick={() => abrirImagenGrande(producto.imagen)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">
                  ${producto.precio.toLocaleString("es-CO")} COP
                </p>
                <button className="btn btn-primary">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para la imagen grande */}
      {imagenGrande && (
        <div
          className="modal show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Imagen en Grande</h5>
                <button
                  type="button"
                  className="close"
                  onClick={cerrarImagenGrande}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={imagenGrande}
                  alt="Imagen Grande"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modulo2;
