import React, { useRef } from 'react';
import '../styles/hero.scss';
import { motion, useInView } from 'framer-motion';
import { Folders, MessagesSquare } from 'lucide-react';
import ProfileImage from '../assets/profile-photo.png';

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="hero" className="hero-section" ref={ref}>
            <div className='container'>
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        duration: 0.6
                    }}
                    className="hero-content">

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            delay: 0.2
                        }}
                    >
                        Hi, I'm <span className="highlight">Andres Martinez</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                        }}
                    >
                       A passionate web developer specialized in building elegant and modern solutions, with a strong focus on delivering high-quality, user-friendly, and responsive websites and applications. I have a deep understanding of front-end and back-end technologies
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="cta"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 150,
                                damping: 8,
                                delay: 0.7
                            }}
                            className="btn btn-primary"
                        >
                            <Folders width={20} className='btn-icon'/> 
                            <label htmlFor="view-projects">Projects</label>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 150,
                                damping: 8,
                                delay: 0.8
                            }}
                            className="btn btn-secondary"
                        >
                            <MessagesSquare width={20} className='btn-icon'/> 
                            <label htmlFor="view-projects">Contact Me</label>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 60,
                        damping: 10,
                        delay: 0.3
                    }}
                >
                    <div className="circle-background"></div> 
                    <img 
                        src={ProfileImage.src} 
                        srcSet={`${ProfileImage.src}`} 
                        alt="Profile logo" 
                        className="profile-image" 
                        loading="eager" 
                    />
                </motion.div>
            </div>
        </section>
    )
}