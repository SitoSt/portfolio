import '../css/overview.css';

export default function Overview() {

    return (
        <section id='Overview'>
            <div className='profile'>
                <img className='avatar' src='/imgs/avatar.JPG' alt='Foto de perfil'></img>

                <div className='me'>
                    <div className='name-container'>
                        <h1 className='name'>Alfonso López Garre</h1>
                    </div>
                    <hr />
                    <div className='skills'>
                        <p>Programador Web full-stack</p>

                        <img className='ability' src="/imgs/logo-react.svg" alt="React" />
                        <img className='ability' src="/imgs/logo-html.svg" alt="html" />
                        <img className='ability' src="/imgs/logo-css.svg" alt="css" />
                        <img className='ability' src="/imgs/logo-python.svg" alt="python" />
                    </div>
                </div>

                <div id="contacto">
                    <ul>
                        <li className='contact-item'>
                            <a href="https://github.com/SitoSt" target="_blank" rel="noopener noreferrer"><img src="/imgs/ico-github.svg" alt="" /></a>
                        </li>
                        <li className='contact-item'>
                            <a href="mailto:alfonsogarrelopez@gmail.com"><img src="/imgs/ico-mail.svg" alt="" /></a>
                        </li>
                        <li className='contact-item'>
                            <a href="https://www.linkedin.com/in/alfonsolopezgarre" target="_blank" rel="noopener noreferrer"><img src="/imgs/logo-Linkedin.svg" alt="" /></a>
                        </li>
                    </ul>
                </div>
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

            <div className='scroll-advise'>
                <p>Mis proyectos</p>
                <div>
                    <img src="/imgs/chevron.svg" alt="Mis proyectos" className='scroll-arrow' />
                    <img src="/imgs/chevron.svg" alt="Mis proyectos" className='scroll-arrow' />
                    <img src="/imgs/chevron.svg" alt="Mis proyectos" className='scroll-arrow' />
                    <img src="/imgs/chevron.svg" alt="Mis proyectos" className='scroll-arrow' />
                </div>
            </div>


        </section>
    );
}