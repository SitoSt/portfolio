import './css/header.css'
import { useRef } from 'react'

export const HeaderView = () => {

    const menu = useRef<HTMLDivElement | null>(null)

    const toggleMenu = () => {
        if (menu.current) {
            menu.current.classList.toggle('active')
        }
    }

    const onClickLink = () => {
        if (menu.current) {
            if (menu.current.classList.contains('active')) {
                menu.current.classList.toggle('active')
            }
        }
    }

    return (
        <div className='header'>
            <img src="/imgs/svg/logo_Alfonso_Garre.svg" alt="logo Alfonso" className='logo' />

            <button className='menu-button' onClick={toggleMenu}>
                <img src="/imgs/svg/menu.svg" alt="Desplegar menu" />
            </button>

            <nav className='header-nav' ref={menu}>

                <ul className='nav-list'>

                    <li className='nav-item'>
                        <a className='nav-link' href='/' onClick={onClickLink}>Presentación</a>
                    </li>

                    <li className='nav-item'>
                        <a className='nav-link' href="#projects" onClick={onClickLink}>Proyectos</a>
                    </li>

                    <li className='nav-item'>
                        <a className='nav-link' href="#contact" onClick={onClickLink}>Contacto</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}