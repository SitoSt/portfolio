import "./css/projects.css";
import { ProjectModel } from '../interfaces'
import { Icon } from './Icon';


export const Project = ({ project, key }: { project: ProjectModel, key: string }) => {
    return (
        <div className="project-container" key={key}>
            <img src={project.imgUrl} alt={`imagen de ${project.name}`} className="project-img" />

            <div className="project-body">
                <div className="project-head">
                    <h1>{project.name}</h1>
                    {project.url &&
                        <a href={`https://${project.url}`} target="_blank" rel="noreferrer">
                            {project.url}
                        </a>
                    }
                </div>

                {project.resumen.map(paragraph => {
                    return (
                        <p className="project-resume">{paragraph}</p>
                    )
                })}

                <div className="project-footer">
                    {project.GitHubUrl &&
                        <a href={project.GitHubUrl} target="_blank" rel="noreferrer" className="project-github">
                            <Icon name="github" size={25} />
                            Ver código
                        </a>
                    }

                    <div className="project-skills">
                        {project.skills && project.skills.map(skill =>
                            <Icon name={skill} size={40} />
                        )}
                    </div>


                </div>
            </div>



        </div>
    );
}

