import "../Styles/App.css";

function Contacto() {
  return (
    <div className="General2">
      <div className="Contenedor1">
        <div className="subtitulo1">
          <h3>Información de Contacto</h3>
        </div>
        <h4>Correo Electrónico</h4>
        <p>corporativo@cassiopeiamx.com</p>
        <h4>Dirección</h4>
        <p>
          Av. Insurgentes Sur #1571-203 Col. San José Insurgentes C.P. 03900
          Benito Juárez, Ciudad de México.{" "}
        </p>
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0936432034596!2d-99.18469332567481!3d19.365097542834864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8c3a8f5203%3A0x59bb2819580d3581!2sAv.%20Insurgentes%20Sur%201571-203%2C%20San%20Jos%C3%A9%20Insurgentes%2C%20Benito%20Ju%C3%A1rez%2C%2003900%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1687990624911!5m2!1ses!2smx"
            width="100%"
            height="300px"
          ></iframe>
        </div>
      </div>
      <div className="Contenedor2">
        <p>Haznos saber tu situación y te atenderemos a la brevedad</p>
        <div className="formulario">
          <label className="nombre">Nombre o Razón Social</label>
          <input className="nombre"></input>
          <label className="combustible">Combustible de interés</label>
          <input className="combustible"></input>
          <label className="correo">Correo</label>
          <input className="correo"></input>
          <label className="telefono">Teléfono</label>
          <input className="telefono"></input>
          <label className="direccion">Dirección</label>
          <input className="direccion"></input>
          <label className="descripcion">Descripción</label>
          <input className="descripcion"></input>
          <button className="btn">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
