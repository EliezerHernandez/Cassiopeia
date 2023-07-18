import "../Styles/App.css";
import Imagen from "../Componentes/img/contacto-servicio.JPG";
import Gif from "../Componentes/img/Cobertura nacional.gif";

function Nosotros() {
  return (
    <div className="curva">
      <div className="Secundario">
        <div className="quienes-somos">
          <h2>Cassiopeia Petrolíferos</h2>
          <h3>¿Quienes somos?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            saepe nisi debitis iure, alias perferendis corporis voluptatibus hic
            blanditiis iusto culpa accusamus reprehenderit delectus dolorem odit
            dolores illo, vel corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            saepe nisi debitis iure, alias perferendis corporis voluptatibus hic
            blanditiis iusto culpa accusamus reprehenderit delectus dolorem odit
            dolores illo, vel corrupti.
          </p>
        </div>
        <div className="Foto">
          <img
            src={Imagen}
            className="Imagen1"
            alt="Contacto-Servicio"
            width={500}
            height={400}
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#32518e"
          fill-opacity="1"
          d="M0,128L120,149.3C240,171,480,213,720,197.3C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Nosotros;
