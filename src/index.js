import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import Princiapl from './Componentes/Principal'
import Nosotros from './Componentes/Nosotros';
import Mvv from './Componentes/MVV';
import Cobertura from './Componentes/Cobertura'
import Certificaciones from './Componentes/Certificaciones';
import Noticias from './Componentes/Noticias';
import Productos from './Componentes/Productos';
import Servicios from './Componentes/Servicios';
import Secundario from './Componentes/Secundario';
import Contacto from './Componentes/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Princiapl/>
    <Nosotros/>
    <Mvv/>
    <Cobertura/>
    <Certificaciones/>
    <Noticias/>
    <Productos/>
    <Servicios/>
    <Secundario/>
    <Contacto/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
