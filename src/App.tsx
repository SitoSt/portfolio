import './css/App.css';
import { Project } from './components';
import { HeaderView, OverviewView, ContactView } from './views';
import { ProjectModel } from './interfaces';

export const App = () => {
  return (
    <div className="App">

      <header>
        <HeaderView />
      </header>

      <OverviewView />

      <section id="projects">
        {
          projectsData.map(project =>
            <Project key={project.name} project={project} />
          )
        }

      </section>

      <section id='contact'>
        <ContactView />
      </section>

    </div>
  );
}



const projectsData: ProjectModel[] = [
  {
    name: "Dl YouTube",
    imgUrl: "/imgs/projects/preview_dlyoutube.webp",
    url: "dlyoutube.alfonsogarre.com",
    resumen: ["Una web para descargar videos de YouTube. Fue un desafió desarrollarla en Flask y aprender a desplegarla."],
    skills: ['python', 'flask', 'docker'],
    GitHubUrl: 'https://github.com/SitoSt/Dl_YouTube'
  },
  {
    name: "Clima App",
    imgUrl: "/imgs/projects/preview_clima_app.webp",
    url: "clima.alfonsogarre.com",
    resumen: ["Web simple que se conecta a la API de OpenWeather para mostrar el clima. Resulta una buena practica de manejo de API con NEXT"],
    skills: ['next', 'react', 'typescript'],
    GitHubUrl: 'https://github.com/SitoSt/Clima'
  }
]