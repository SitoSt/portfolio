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
                            <a href="https://github.com/SitoSt" target="_blank" rel="noopener noreferrer"><img src="/imgs/svg/github.svg" alt="Perfil de GitHub" /></a>
                        </li>
                        <li className='contact-item'>
                            <a href="mailto:alfonsogarrelopez@gmail.com"><img src="/imgs/svg/mail.svg" alt="Correo electrónico" /></a>
                        </li>
                        <li className='contact-item'>
                            <a href="https://www.linkedin.com/in/alfonsolopezgarre" target="_blank" rel="noopener noreferrer"><img src="/imgs/svg/Linkedin.svg" alt="Perfil de linkedIn" /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='skills'>
                <Icon name="react" size={50} />
                <Icon name='html5' size={50} />
                <Icon name='css' size={50} />
                <Icon name='python' size={50} />
            </div>

            <div className='presentacion'>
                <p>
                    Empecé a programar con 12 años, primero aprendí a desarrollar videojuegos en unity con
                    un curso de Domestika. Desde entonces he aprendido gran cantidad de lenguajes y me he
                    movido por muchos lenguajes y tecnologías.
                </p>
                <p>
                    Llevo años avanzando en el desarrollo web, lo que mas me gusta es el back-end, pero también
                    domino front-end y mucho mas para poder desarrollar mis proyectos
                </p>
            </div>

        </section>
    );
}