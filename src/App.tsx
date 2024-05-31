import './assets/css/App.css';
import Overview from './assets/components/Overview';
import Project from './assets/components/Project';
import Contact from './assets/components/Contact';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src="/imgs/svg/logo_Alfonso_Garre.svg" alt="logo Alfonso" className='logo' />
        <nav className='header-nav'>

          <ul className='nav-list'>

            <li className='nav-item'>
              <a className='nav-link' href='/'>Presentación</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href="#projects">Proyectos</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href="#contact">Contacto</a>
            </li>

          </ul>
        </nav>
      </header>

      <Overview />

      <section id="projects">
        <Project project={{
          name: "Dl YouTube",
          imgUrl: "/imgs/projects/preview_dlyoutube.webp",
          url: "https://dlyoutube.alfonsogarre.com",
          resumen: "Una web para descargar videos de YouTube. Fue un desafió desarrollarla en Flask y aprender a desplegarla.",
          skillsImgUrl: ['imgs/svg/python.svg', 'imgs/svg/flask.svg', 'imgs/svg/docker.svg'],
          GitHubUrl: 'https://github.com/SitoSt/Dl_YouTube'
        }} />

        <Project project={{
          name: "Clima App",
          imgUrl: "/imgs/projects/preview_clima_app.webp",
          url: "https://clima.alfonsogarre.com/",
          resumen: "Web simple que se conecta a la API de OpenWeather para mostrar el clima. Resulta una buena practica de manejo de API con NEXT",
          skillsImgUrl: ['imgs/svg/next.svg', 'imgs/svg/react.svg', 'imgs/svg/typescript.svg'],
          GitHubUrl: 'https://github.com/SitoSt/Clima'
        }} />
      </section>

      <section id='contact'>
        <Contact />
      </section>

    </div>
  );
}

export default App;
