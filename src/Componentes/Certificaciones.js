import "../Styles/App.css";
import cert9001 from "./img/cert9001.png";
import cert14001 from "./img/cert14001.png";
import cert45001 from "./img/cert45001.png";
import dosbocas from "./img/dosbocas.png";
import cre from "./img/cre.png";
import sener from "./img/sener.png";
import pemex from "./img/pemex.png";
import GT from "./img/grupo-transportes.png";

function Certificaciones() {
  return (
    <div className="Cert-acre">
      <div className="certificaciones">
        <div className="Titulo-certacre">
          <h3>Certificaciones</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elit elit mauris hendrerit
          commodo lorem diam dolor massa. Massa dolor amet tellus eget nibh
          aenean morbi ultrices.
        </p>
        <div className="iconos">
          <img src={cert9001} className="cert9001" alt="ISO 9001"
          width="200px" />
          <img src={cert14001} className="cert14001" alt="ISO 14001" 
          width="200px"/>
          <img src={cert45001} className="cert45001" alt="ISO 45001" 
          width="200px"/>
          <img src={dosbocas} className="dosbocas" alt="Dos Bocas"
          width="250px" />
        </div>
      </div>
      <div className="Acreditaciones">
        <div className="Titulo-certacre">
          <h3>Acreditaciones</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elit elit mauris hendrerit
          commodo lorem diam dolor massa. Massa dolor amet tellus eget nibh
          aenean morbi ultrices.
        </p>
        <div className="iconos">
        <img
            src={cre}
            className="cert9001"
            alt="ISO 9001"
            width="200px"
          />
          <img
            src={sener}
            className="cert14001"
            alt="ISO 14001"
            width="200px"
          />
          <img
            src={pemex}
            className="cert45001"
            alt="ISO 45001"
            width="200px"
          />
          <img
            src={GT}
            className="dosbocas"
            alt="Dos Bocas"
            width="200px"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificaciones;
