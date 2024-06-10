import './css/index.css';
import { Analytics } from "@vercel/analytics/react"
import { App } from './App';
import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <footer>
    <div className="navigation">
      <nav className="footer-nav">
        <ul className="nav-list">
          /
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          /
          <li className="nav-item">
            <a href="#projects" className="nav-link">Mis proyectos</a>
          </li>
          /
          <li className="nav-item">
            <a href="#aboutMe" className="nav-link">Sobre mi</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="author">
      <img src="/imgs/svg/logo_Alfonso_Garre.svg" alt="logo Alfonso Garre" />
      <p>Web diseñada por <strong>Alfonso López Garre</strong></p>

      <div className="contact">
        <p>Contacto</p>
        <ul>
          <li className="contact-item">
            <a href="https://github.com/SitoSt" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li className="contact-item">
            <a href="https://www.linkedin.com/in/alfonsolopezgarre" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="contact-item">
            <a href="mailto:alfonsogarrelopez@gmail.com" target="_blank" rel="noreferrer">
              alfonsogarrelopez@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);

