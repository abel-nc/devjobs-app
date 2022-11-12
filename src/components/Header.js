import React from 'react'
import logo from '../assets/desktop/logo.svg'
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Header = () => {

    const { isDarkMode, setIsDarkMode } = useGlobalContext()

    return (
        <header className='main-header'>
            <Link to="/">
                <img className='logo' src={logo} alt="logo" draggable="false" />
            </Link>
            <div className='theme-switch'>
                <img src={sun} alt="light" draggable="false" />
                <span className={isDarkMode ? 'active switch-btn' : 'switch-btn'} onClick={() => setIsDarkMode(!isDarkMode)}></span>
                <img src={moon} alt="dark" draggable="false" />
            </div>
        </header>
    )
}

export default Header