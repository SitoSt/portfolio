import './css/App.css';
import { Project } from './components';
import { HeaderView, OverviewView, AboutMeView } from './views';
import { ProjectModel } from './interfaces';

export const App = () => {
  return (
    <div className="App">

      <header>
        <HeaderView />
      </header>

      <OverviewView />

      <section id="projects">
        <h1 className='title'>Mis Proyectos</h1>

        {
          projectsData.map(project =>
            <Project key={project.name} project={project} />
          )
        }

      </section>

      <section id='aboutMe'>
        <h1 className='title'>Sobre mi</h1>
        <AboutMeView />
      </section>

    </div>
  );
}



const projectsData: ProjectModel[] = [
  {
    name: "Dl YouTube",
    imgUrl: "/imgs/projects/preview_dlyoutube.webp",
    resumen: [
      `Desarrollé una aplicación web desde cero que permite a los usuarios descargar videos de YouTube sin problemas.`,
      `Aunque actualmente está inactiva debido a la discontinuación de la biblioteca de Pytube, el proyecto demuestra mi 
      dominio de la arquitectura back-end basada en Flask, la gestión de rutas y  un front-end responsivo con HTML puro.`,
      `También muestra mi capacidad de adaptación a tecnologías desconocidas, desarrollando y aprendiendo desde cero de
      forma independiente`
    ],
    skills: ['python', 'flask'],
    GitHubUrl: 'https://github.com/SitoSt/Dl_YouTube'
  },
  {
    name: "Clima App",
    imgUrl: "/imgs/projects/preview_clima_app.webp",
    url: "clima.alfonsogarre.com",
    resumen: [
      `Realmente lo interesante de este proyecto es su código. Utilizo una arquitectura basada en un contexto, un provider
       y un reducer, para poder gestionar la geolocalización del usuario, las peticiones a las diferentes API y sobre todo 
       para hacerlo más escalable.`,
      `Me ha servido mucho a la hora de añadir nuevas funcionalidades (como el autocompletado) sin tener que hacer grandes
       cambios en el código.`],
    skills: ['next', 'react', 'typescript'],
    GitHubUrl: 'https://github.com/SitoSt/Clima'
  }
]