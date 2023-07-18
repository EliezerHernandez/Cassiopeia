import "../Styles/App.css";
import comodato from "./img/comodato.png";
import combustibles from "./img/1.png";
import transporte from "./img/2.png";
import tanques from "./img/3.png";
import personal from "./img/4.JPG";
import ventas from "./img/5.png";
import garantia from "./img/6.JPG";
import servicio from "./img/atencion-siempre.jpeg";

function Servicios() {
  return (
    <div className="General">
      <div className="Titulo-certacre">
        <h3>Servicios</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cras vel felis auctor et amet
        ultrices.
      </p>
      <div className="servicios">
        <section className="img-derecha">
          <div>
            <div className="subtitulo">
              <h3>Equipos de Comodato</h3>
            </div>
            <p>
            Ofrecemos la estación de autoconsumo, para controlar cada carga de tu flotilla y una mayor productividad reduciendo el tiempo muerto por cada carga, además de seguridad en el producto, transparencia de la información e integración en tu Sistema de Administración.
            </p>
          </div>
          <div>
            <img
              src={comodato}
              className="comodato"
              alt="Comodato"
              width="200px"
            />
          </div>
        </section>
        <section className="img-izquierda">
          <div>
            <img
              src={combustibles}
              className="combustibles"
              alt="Combustibles"
              width="200px"
            />
          </div>
          <div>
            <div className="subtitulo1">
              <h3>Combustibles Certificados</h3>
            </div>
            <p>
            Ponemos a tu disposición toda la documentación correspondiente a Certificado de Calidad en combustible bajo la NOM.
            </p>
          </div>
        </section>
        <section className="img-derecha">
          <div>
            <div className="subtitulo">
              <h3>Transportes Especializados</h3>
            </div>
            <p>
            Nuestros operadores están calificados en servicio al cliente y nos comprometemos a realizar entregas en el tiempo establecido, además de conocer los procesos más seguros en materia de descargas.
            </p>
          </div>
          <div>
            <img
              src={transporte}
              className="transporte"
              alt="Transporte"
              width="200px"
            />
          </div>
        </section>
        <section className="img-izquierda1">
        <div>
            <img
              src={tanques}
              className="tanques"
              alt="Tanques"
            />
          </div>
          <div>
            <div className="subtitulo1">
              <h3>Tanques de Aautoconsumo</h3>
            </div>
            <p>
            Te ofrecemos nuestro servicio más competitivo donde la colocación de un tanque de autoconsumo nos permitirá ofrecerte los mejores precios y el monitoreo 24/7 de tu combustible además de un surtido automatizado con la Calidad Cassiopeia.
            </p>
          </div>
        </section>
        <section className="img-derecha">
          <div>
            <div className="subtitulo">
              <h3>Personal Capacitado</h3>
            </div>
            <p>
            Trabajamos bajo estándares de calidad y nos mantenemos actualizados con nuestro programa de mejora continua que nos permite ofrecerte la mejor calidad en servicio y atención desde tu cotización hasta la descarga de combustible.
            </p>
          </div>
          <div>
            <img
              src={personal}
              className="personal"
              alt="Personal"
              width="200px"
            />
          </div>
        </section>
        <section className="img-izquierda">
        <div>
            <img
              src={ventas}
              className="ventas"
              alt="Ventas"
              width="200px"
            />
          </div>
          <div>
            <div className="subtitulo1">
              <h3>Ventas directas con clientes</h3>
            </div>
            <p>
            Ponemos a tu disposición todos nuestros canales de comunicación para la comodidad de tu equipo y una comunicación constante y transparente.
            </p>
          </div>
        </section>
        <section className="img-derecha">
          <div>
            <div className="subtitulo">
              <h3>Garantía de Seguirdad y confiabilidad operativa</h3>
            </div>
            <p>
            Nuestro equipo estará en constante comunicación y total disponibilidad atendiendo seguimientos, dudas e indicaciones para llevar a cabo la operación con seguridad y profesionalismo.
            </p>
          </div>
          <div>
            <img
              src={garantia}
              className="garantia"
              alt="Garantía"
              width="200px"
            />
          </div>
        </section>
        <section className="img-izquierda">
        <div>
            <img
              src={servicio}
              className="Servicio"
              alt="Servicio Ténico"
              width="200px"
            />
          </div>
          <div>
            <div className="subtitulo1">
              <h3>Servicio Técnico</h3>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque enim ultrices elementum vitae ultrices. Libero elementum enim fames blandit neque auctor viverra tincidunt. Integer porttitor elit luctus cursus elementum libero duis.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Servicios;
