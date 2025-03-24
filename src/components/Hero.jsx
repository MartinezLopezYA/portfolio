import React, { useEffect, useState } from 'react';
import '../styles/hero.scss';
import { motion } from 'framer-motion';
import { Folders, MessagesSquare } from 'lucide-react';
import ProfileImage from '../assets/profile-photo.png';

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className='container'>
                <motion.div 
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="hero-content">

                    <motion.h1 
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        >Hi, I'm<span className="highlight"> Andres Martinez </span> 
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.8}}
                        >A passionate web developer specialized in building elegant and modern solutions. 
                    </motion.p>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 1.5}}
                        className="cta">
                        <motion.a
                            href="#projects"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 1.5}}
                            className="btn btn-primary" > 
                            <Folders width={20} className='btn-icon'/> 
                            <label htmlFor="view-projects">Projects</label>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 1.5}}
                            className="btn btn-secondary" > 
                            <MessagesSquare width={20} className='btn-icon'/> 
                            <label htmlFor="view-projects">Contact Me</label>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <div className="image-container">
                    <div className="circle-background"></div> 
                    <img src={ProfileImage.src} srcSet={`${ProfileImage.src}`} 
                        alt="Profile logo" 
                        className="profile-image" 
                        loading="eager" 
/>

                </div>
            </div>
        </section>
    )
}