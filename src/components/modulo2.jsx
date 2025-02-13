import React, { useState } from "react";

const productos = [
  {
    nombre: "Zapatillas de Running Nike Air Zoom",
    imagen: "/images/chaqueta.jpeg",
    precio: 250000,
  },
  {
    nombre: "Chaqueta Deportiva Adidas",
    imagen: "/images/adidas-jacket.jpg",
    precio: 180000,
  },
  {
    nombre: "Mochila Deportiva Under Armour",
    imagen: "/images/under-armour-backpack.jpg",
    precio: 120000,
  },
  {
    nombre: "Pelota de Fútbol Adidas",
    imagen: "/images/adidas-soccer-ball.jpg",
    precio: 70000,
  },
  { nombre: "Gorra Nike", imagen: "/images/nike-cap.jpg", precio: 40000 },
  {
    nombre: "Guantes de Portero Puma",
    imagen: "/images/puma-gloves.jpg",
    precio: 90000,
  },
  {
    nombre: "Shorts de Deporte Reebok",
    imagen: "/images/reebok-shorts.jpg",
    precio: 80000,
  },
  {
    nombre: "Zapatillas de Gimnasio Asics",
    imagen: "/images/asics-gym-shoes.jpg",
    precio: 220000,
  },
  {
    nombre: "Ropa de Ciclismo",
    imagen: "/images/cycling-clothes.jpg",
    precio: 150000,
  },
  {
    nombre: "Gafas de Sol Oakley",
    imagen: "/images/oakley-sunglasses.jpg",
    precio: 300000,
  },
  {
    nombre: "Reloj Deportivo Casio",
    imagen: "/images/casio-sports-watch.jpg",
    precio: 100000,
  },
  {
    nombre: "Bandana Deportiva",
    imagen: "/images/sports-bandana.jpg",
    precio: 20000,
  },
  {
    nombre: "Chaleco de Entrenamiento",
    imagen: "/images/training-vest.jpg",
    precio: 50000,
  },
  {
    nombre: "Sudadera con Capucha",
    imagen: "/images/hoodie.jpg",
    precio: 120000,
  },
  {
    nombre: "Zapatillas de Tenis",
    imagen: "/images/tennis-shoes.jpg",
    precio: 200000,
  },
  { nombre: "Bolsa de Gimnasio", imagen: "/images/gym-bag.jpg", precio: 80000 },
  {
    nombre: "Tanga de Deporte",
    imagen: "/images/sports-tights.jpg",
    precio: 90000,
  },
  {
    nombre: "Pelota de Baloncesto",
    imagen: "/images/basketball.jpg",
    precio: 60000,
  },
  {
    nombre: "Guantes de Boxeo",
    imagen: "/images/boxing-gloves.jpg",
    precio: 100000,
  },
  { nombre: "Set de Yoga", imagen: "/images/yoga-set.jpg", precio: 120000 },
  {
    nombre: "Ropa de Natación",
    imagen: "/images/swimwear.jpg",
    precio: 150000,
  },
  {
    nombre: "Zapatillas de Running New Balance",
    imagen: "/images/new-balance.jpg",
    precio: 200000,
  },
];

const Modulo2 = () => {
  const [imagenGrande, setImagenGrande] = useState(null); // Estado para la imagen grande

  const abrirImagenGrande = (imagen) => {
    setImagenGrande(imagen); // Establecer la imagen grande
  };

  const cerrarImagenGrande = () => {
    setImagenGrande(null); // Cerrar la imagen grande
  };

  return (
    <div className="tarjetas-productos">
      {productos.map((producto, index) => (
        <div className="tarjeta-producto" key={index}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="imagen-producto"
            onClick={() => abrirImagenGrande(producto.imagen)} // Abrir imagen en grande
          />
          <h3 className="titulo-producto">{producto.nombre}</h3>
          <p className="precio-producto">
            ${producto.precio.toLocaleString("es-CO")} COP
          </p>
          <button className="boton-comprar">Agregar al Carrito</button>
        </div>
      ))}

      {/* Modal para la imagen grande */}
      {imagenGrande && (
        <div className="modal" onClick={cerrarImagenGrande}>
          <img
            src={imagenGrande}
            alt="Imagen Grande"
            className="imagen-grande"
          />
        </div>
      )}
    </div>
  );
};

export default Modulo2;
