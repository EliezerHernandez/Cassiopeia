import "../Styles/App.css";
import logo from "./logo.png";

function Footer() {
  return (
    <footer>
      <div className="Resumen">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Empresa 100% Mexicana dedicada a la comercialización de petrolíferos a
          nivel nacional a precios competitivos.
        </p>
        <p>
          Comprometidos a suministrar combustibles de calidad certificada que
          garanticen la seguridad y confiabilidad operativa en las instalaciones
          y equipos de nuestros clientes.
        </p>
      </div>
      <div className="Info">
        <h4>Información</h4>
        <p>Aviso de Privacidad</p>
        <p>Términos y Condiciones</p>
        <p>Horario de atención: Lunes a Viernes de 09:00 a 18:00 hrs.</p>
      </div>
      <div className="Redes">
        <h4>Síguenos en Redes Sociales</h4>
        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="Menu">
        <h4>Menú</h4>
        <ul>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="copyright">
        <p>CASSIOPEIA PETROLÍFEROS © 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
