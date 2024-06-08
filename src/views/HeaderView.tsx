import './css/header.css'

export const HeaderView = () => {
    return (
        <div className='header'>
            <img src="/imgs/svg/logo_Alfonso_Garre.svg" alt="logo Alfonso" className='logo' />
            <nav className='header-nav'>

                <ul className='nav-list'>

                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Presentación</a>
                    </li>

                    <li className='nav-item'>
                        <a className='nav-link' href="#projects">Proyectos</a>
                    </li>

                    <li className='nav-item'>
                        <a className='nav-link' href="#contact">Contacto</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}