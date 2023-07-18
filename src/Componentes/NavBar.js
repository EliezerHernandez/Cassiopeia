import logo from './logo.png';
import '../Styles/App.css';

function NavBar() {
  return (
    <div className="Nav-bar">
      <header className="Nav">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav>
          <ul className='nav-container'>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Productos</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
