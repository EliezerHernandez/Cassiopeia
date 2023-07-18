import "../Styles/App.css";
import Gif from "../Componentes/img/Cobertura nacional.gif";

function Principal() {
  return (
    <div className="cobertura">
      <div className="mapa">
        <div className="Titulo">
          <h3>Cobertura Nacional</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          saepe nisi debitis iure, alias perferendis corporis voluptatibus hic
          blanditiis iusto culpa accusamus reprehenderit delectus dolorem odit
          dolores illo, vel corrupti.
        </p>
        <img src={Gif} className="Gif1" alt="Cobertura-Nacional" width={800} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#32508e"
          fill-opacity="1"
          d="M0,96L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Principal;
