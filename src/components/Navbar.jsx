import React, { useState, useEffect } from 'react';
import '../styles/navbar.scss';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [theme, setTheme] = useState('light');
    const [activeItem, setActiveItem] = useState('#hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }

        const setActiveNavItem = () => {
            const currentHash = window.location.hash || '#hero';
            setActiveItem(currentHash);
        };

        setActiveNavItem();

        const handleResize = () => {
            setShowMenuButton(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        handleResize();
        
        window.addEventListener('hashchange', setActiveNavItem);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('hashchange', setActiveNavItem);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };
    
    const handleNewClick = (hash) => {
        setActiveItem(hash);
        if (showMenuButton) {
            setIsMenuOpen(false);
        }
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    return (
        <nav className="navbar">
            <div className={`container ${isMenuOpen ? 'with-overlay' : ''}`}>
                <a href="#hero" className="logo" onClick={() => handleNewClick('#hero')}>
                    <img src="/profile.jpg" alt="Logo profile" className="img" />
                    <span>Andres Martinez</span>
                </a>
                <ul className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
                    <li><a href="#hero" className={`nav-item ${activeItem === '#hero' ? 'active' : ''}`} onClick={() => handleNewClick('#hero')}>Inicio</a></li>
                    <li><a href="#about" className={`nav-item ${activeItem === '#about' ? 'active' : ''}`} onClick={() => handleNewClick('#about')}>Sobre mí</a></li>
                    <li><a href="#projects" className={`nav-item ${activeItem === '#projects' ? 'active' : ''}`} onClick={() => handleNewClick('#projects')}>Proyectos</a></li>
                    <li><a href="#contact" className={`nav-item ${activeItem === '#contact' ? 'active' : ''}`} onClick={() => handleNewClick('#contact')}>Contacto</a></li>
                </ul>
                <div className="btn-div">
                    <button  type="button"  className="btn-theme"  onClick={toggleTheme}  aria-label={theme === 'light' ? 'Active dark mode' : 'Active light mode'}>
                        {theme === 'light' ?
                            <Sun size={24} className='icon-theme' /> :
                            <Moon size={24} className='icon-theme' />
                        }
                    </button>
                    {showMenuButton && (
                        <button  type="button"  className="btn-menu"  aria-label={isMenuOpen ? 'Close menu' : 'Show menu'}  onClick={toggleMenu}>
                            {!isMenuOpen ? <Menu size={24} className='icon-theme' /> : <X size={24} className='icon-theme' />}
                        </button>
                    )}
                </div>
                {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            </div>
        </nav>
    );
}