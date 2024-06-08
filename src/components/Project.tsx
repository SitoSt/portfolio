import "./css/projects.css";
import { ProjectModel } from '../interfaces'

export const Project = ({ project, key }: { project: ProjectModel, key: string }) => {
    return (
        <div className="project-container" key={key}>
            <img src={project.imgUrl} alt="" className="project-img" />
            <div className="project-body">
                <div className="project-head">
                    <h1>{project.name}</h1>
                    {project.url &&
                        <a href={project.url} target="_blank" rel="noreferrer">
                            Enlace de la web
                            <img src="/imgs/svg/www.svg" alt="www" />
                        </a>
                    }


                </div>

                <p className="project-resume">{project.resumen}</p>

                <div className="project-footer">
                    {project.GitHubUrl &&
                        <a href={project.GitHubUrl} className="project-github">
                            <img src="/imgs/svg/github.svg" alt="Proyecto de GitHub" />
                            Proyecto de GitHub
                        </a>
                    }

                    <div className="project-skills">
                        {project.skillsImgUrl && project.skillsImgUrl.map(url =>
                            <img src={url} className='project-skill' alt="habilidad aprendida con este proyecto" />
                        )}
                    </div>


                </div>
            </div>



        </div>
    );
}

