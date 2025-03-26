import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "../styles/experience.scss";
import Davivienda from '../assets/davivienda.png';
import Practi from '../assets/Practi.png';

const experiences = [
    {
        id: 1,
        title: "Frontend Engineer",
        company: "PRACTISISTEMAS",
        period: "May 2024 – Present",
        tasks: [
            "Designed intuitive UIs for internal projects.",
            "Gathered and analyzed requirements for various applications.",
            "Developed and maintained applications ensuring high performance.",
            "Integrated APIs to enhance functionality."
        ],
        logo: <img src={Practi.src} alt="Practisistemas" />
    },
    {
        id: 2,
        title: "University Intern",
        company: "DAVIVIENDA S.A.S",
        period: "July 2023 – Jan 2024",
        tasks: [
            "Assisted in modernizing company applications.",
            "Collaborated with teams to optimize development workflows.",
            "Managed databases ensuring integrity and performance.",
            "Integrated external APIs for enhanced interoperability.",
            "Organized and maintained repositories on GitHub & GitLab."
        ],
        logo: <img src={Davivienda.src} alt="Davivienda" />
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: '-20% 0px -20% 0px',
        amount: 0.2
    });

    return (
        <section id="experience" className="experience-section" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                        }
                    } : { opacity: 0, y: 50 }}
                    className="section-title"
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                            animate={isInView ? { 
                                opacity: 1, 
                                x: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: index * 0.15
                                }
                            } : { opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                        >
                            <motion.div 
                                className="timeline-icon"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {exp.logo}
                            </motion.div>
                            
                            <motion.div 
                                className="timeline-content"
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: 1,
                                    transition: { delay: index * 0.15 + 0.3 }
                                }}
                            >
                                <motion.h3 
                                    className="job-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { delay: index * 0.15 + 0.4 }
                                    }}
                                >
                                    {exp.title}
                                </motion.h3>
                                
                                <motion.h4 
                                    className="company"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { delay: index * 0.15 + 0.5 }
                                    }}
                                >
                                    {exp.company} <span className="period">{exp.period}</span>
                                </motion.h4>
                                
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: 1,
                                        transition: { delay: index * 0.15 + 0.6 }
                                    }}
                                >
                                    {exp.tasks.map((task, idx) => (
                                        <motion.li 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ 
                                                opacity: 1, 
                                                x: 0,
                                                transition: { 
                                                    delay: index * 0.15 + 0.7 + idx * 0.1 
                                                }
                                            }}
                                        >
                                            {task}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}