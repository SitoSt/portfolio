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
    url: "dlyoutube.alfonsogarre.com",
    resumen: [
      `Esta es una web que permite descargar videos y audios de YouTube, está escrita en Python usando las librerías de Flask
       y pytube. Esta última ofrece un montón de opciones, como descargar playlists enteras, buscar videos por canal o nombre y más.`,
      `Por ahora Dl YouTube solo puede descargar con la URL del video, pero estoy deseando mejorarlo y añadir el resto de 
       funcionalidades que proporciona pytube.`
    ],
    skills: ['python', 'flask', 'docker'],
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