import "../Styles/App.css";
import productos from "./img/1.png";
import gasolina from "./img/recargagasolina.jpg"
import diesel from "./img/IMG_1679.JPG"

function Productos() {
  return (
    <div className="general1">
      <div className="contenido-Producto">
        <div className="Titulo-producto">
          <h3>Nuestros Productos</h3>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
          ultrices. Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
          ultrices. Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
          ultrices.
        </p>
      </div>
      <section className="products">
      <div>
        <h3>Gasolina Regular</h3>
        <img
            src={productos}
            className="Productos"
            alt="Productos"
            width="100%"
          />
          <p>Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
          ultrices.</p>
        </div>
        <div>
          <h3>Gasolina Premium</h3>
        <img
            src={gasolina}
            className="Productos"
            alt="Productos"
            width="100%"
            height="61%"
          />
          <p>Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
          ultrices.</p>
        </div>
        <div>
          <h3>Diésel Ultra Bajo en Azufre</h3>
        <img
            src={diesel}
            className="Productos"
            alt="Productos"
            width="100%"
            height="61%"
          />
          <p>Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
          ultrices.</p>
        </div>
        
      </section>
    </div>
  );
}

export default Productos;
