import './assets/css/App.css';
import Overview from './assets/components/Overview';
import { Projects, Project } from './assets/components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='header-nav'>
          <ul className='nav-list'>

            <li className='nav-item'>
              <a className='nav-link' href='/'>sito</a>
            </li>

          </ul>
        </nav>
      </header>

      <Overview />

      <section id="projects">

        <Projects project={{
          name: "Dl YouTube",
          imgUrl: "/imgs/view-dl-yt.png",
          resumen: "Una web para descargar videos de YouTube. Fue un desafió desarrollarla en Flask y aprender a desplegarla.",
          skillsImgUrl: ['imgs/logo-python.svg', 'imgs/logo-flask.svg', 'imgs/logo-python.svg'],
          GitHubUrl: 'https://github.com/SitoSt/Dl_YouTube'
        }} />

      </section>

    </div>
  );
}

export default App;
