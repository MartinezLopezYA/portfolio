import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.scss';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [theme, setTheme] = useState('light');
    const [activeItem, setActiveItem] = useState('#hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);
    const observer = useRef(null);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }

        const handleResize = () => {
            setShowMenuButton(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        handleResize();

        const sections = document.querySelectorAll('section[id]');
        
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = '#' + entry.target.id;
                        setActiveItem(id);
                        window.history.replaceState(null, null, id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );
        
        sections.forEach(section => {
            observer.current.observe(section);
        });
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            if (observer.current) {
                sections.forEach(section => {
                    observer.current.unobserve(section);
                });
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };
    
    const handleNavClick = (hash, event) => {
        if (showMenuButton) {
            event.preventDefault();
            setIsMenuOpen(false);
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
            setTimeout(() => {
                setActiveItem(hash);
            }, 300);
        } else {
            setActiveItem(hash);
        }
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    return (
        <nav className="navbar">
            <div className={`container ${isMenuOpen ? 'with-overlay' : ''}`}>
                <a href="#hero" className="logo" onClick={(e) => handleNavClick('#hero', e)}>
                    <img src="/profile-photo.png" alt="Logo profile" className="img" />
                    <span>Andres Martinez</span>
                </a>
                <ul className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
                    <li><a href="#hero" className={`nav-item ${activeItem === '#hero' ? 'active' : ''}`} onClick={(e) => handleNavClick('#hero', e)}>Home</a></li>
                    <li><a href="#about" className={`nav-item ${activeItem === '#about' ? 'active' : ''}`} onClick={(e) => handleNavClick('#about', e)}>About Me</a></li>
                    <li><a href="#experience" className={`nav-item ${activeItem === '#experience' ? 'active' : ''}`} onClick={(e) => handleNavClick('#experience', e)}>Experience</a></li>
                    <li><a href="#projects" className={`nav-item ${activeItem === '#projects' ? 'active' : ''}`} onClick={(e) => handleNavClick('#projects', e)}>Projects</a></li>
                    <li><a href="#contact" className={`nav-item ${activeItem === '#contact' ? 'active' : ''}`} onClick={(e) => handleNavClick('#contact', e)}>Contact</a></li>
                </ul>
                <div className="btn-div">
                    <button type="button" className="btn-theme" onClick={toggleTheme} aria-label={theme === 'light' ? 'Active dark mode' : 'Active light mode'}>
                        {theme === 'light' ?
                            <Sun size={24} className='icon-theme' /> :
                            <Moon size={24} className='icon-theme' />
                        }
                    </button>
                    {showMenuButton && (
                        <button type="button" className="btn-menu" aria-label={isMenuOpen ? 'Close menu' : 'Show menu'} onClick={toggleMenu}>
                            {!isMenuOpen ? <Menu size={24} className='icon-theme' /> : <X size={24} className='icon-theme' />}
                        </button>
                    )}
                </div>
                {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            </div>
        </nav>
    );
}