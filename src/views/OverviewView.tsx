import './css/overview.css';
import { Icon } from '../components';

export const OverviewView = () => {

    return (
        <section id='Overview'>
            <div className='profile'>

                <div className='me'>
                    <img className='avatar' src='/imgs/avatar.webp' alt='Foto de perfil' />
                    <div className='name-container'>
                        <h1 className='name'>Alfonso López Garre</h1>
                        <p className='profesion'>Programador Web full-stack</p>
                    </div>
                </div>

                <div className="contacto">
                    <ul>
                        <li className='contact-item'>
                            <a href="https://github.com/SitoSt" target="_blank" rel="noreferrer"><img src="/imgs/svg/github_blue.svg" alt="Perfil de GitHub" /></a>
                        </li>
                        <li className='contact-item'>
                            <a href="mailto:alfonsogarrelopez@gmail.com"><img src="/imgs/svg/mail.svg" alt="Correo electrónico" /></a>
                        </li>
                        <li className='contact-item'>
                            <a href="https://www.linkedin.com/in/alfonsolopezgarre" target="_blank" rel="noreferrer"><img src="/imgs/svg/linkedin.svg" alt="Perfil de linkedIn" /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='skills'>
                <Icon name="react" size={50} />
                <Icon name='typescript' size={50} />
                <Icon name='next' size={50} />
                <Icon name='python' size={50} />
            </div>

            <div className='presentacion'>
                <p>
                    Soy un desarrollador Full-Stack autodidacta que lleva años en el mundo del desarrollo web, aunque hasta
                    el año pasado no empecé a publicar mis proyectos y a afianzar mis conocimientos en arquitectura de software.
                </p>
                <p>
                    Actualmente, estoy estudiando Ingeniería Informática en la Universidad de Valencia. En la carrera he aprendido
                    cosas como, estructuras de datos complejas, gestión de memoria y arquitecturas de software, cosas que
                    estoy poniendo en práctica en los nuevos proyectos que estoy desarrollando actualmente.
                </p>
            </div>

        </section>
    );
}