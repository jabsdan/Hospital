import React from 'react';
import '../../App.css';

const Products =() => {
  return <div className="container">
  <header>
    <h1>Mi Página Web</h1>
  </header>

  <div className="row">
    <div className="col-md-6">
      <h2>Sección 1</h2>
      <p>Contenido de la sección 1</p>
    </div>
    <div className="col-md-6">
      <h2>Sección 2</h2>
      <p>Contenido de la sección 2</p>
    </div>
  </div>

  <footer>
    <p>&copy; 2023 Mi Página Web. Todos los derechos reservados.</p>
  </footer>
</div>;
}
export default Products;
