import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Mi Tienda Deportiva</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/categorias">Categorías</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <a href="/carrito">
            <i className="fa fa-shopping-cart"></i> Carrito
          </a>
        </li>
      </ul>
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
