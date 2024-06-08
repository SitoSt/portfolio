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
    url: "https://dlyoutube.alfonsogarre.com",
    resumen: ["Una web para descargar videos de YouTube. Fue un desafió desarrollarla en Flask y aprender a desplegarla."],
    skillsImgUrl: ['imgs/svg/python.svg', 'imgs/svg/flask.svg', 'imgs/svg/docker.svg'],
    GitHubUrl: 'https://github.com/SitoSt/Dl_YouTube'
  },
  {
    name: "Clima App",
    imgUrl: "/imgs/projects/preview_clima_app.webp",
    url: "https://clima.alfonsogarre.com/",
    resumen: ["Web simple que se conecta a la API de OpenWeather para mostrar el clima. Resulta una buena practica de manejo de API con NEXT"],
    skillsImgUrl: ['imgs/svg/next.svg', 'imgs/svg/react.svg', 'imgs/svg/typescript.svg'],
    GitHubUrl: 'https://github.com/SitoSt/Clima'
  }
]