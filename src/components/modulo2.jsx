import React from "react";

const Modulo2 = () => {
  const productos = [
    {
      nombre: "Zapatillas de Running Nike Air Zoom",
      imagen: "/images/chaqueta.jpeg",
      precio: 120.0,
    },
    {
      nombre: "Chaqueta Deportiva Adidas",
      imagen: "https://example.com/adidas-jacket.jpg",
      precio: 80.0,
    },
    {
      nombre: "Mochila Deportiva Under Armour",
      imagen: "https://example.com/under-armour-backpack.jpg",
      precio: 60.0,
    },
    {
      nombre: "Pelota de Fútbol Adidas",
      imagen: "https://example.com/adidas-soccer-ball.jpg",
      precio: 40.0,
    },
    {
      nombre: "Gorra Nike",
      imagen: "https://example.com/nike-cap.jpg",
      precio: 20.0,
    },
    {
      nombre: "Guantes de Portero Puma",
      imagen: "https://example.com/puma-gloves.jpg",
      precio: 70.0,
    },
  ];

  return (
    <div className="tarjetas-productos">
      {productos.map((producto, index) => (
        <div className="tarjeta-producto" key={index}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="imagen-producto"
          />
          <h3 className="titulo-producto">{producto.nombre}</h3>
          <p className="precio-producto">${producto.precio}</p>
          <button className="boton-comprar">Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Modulo2;
