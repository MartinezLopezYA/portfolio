import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "../styles/projects.scss";

const projects = [
    {
        id: 1,
        title: "Davivienda",
        image: '../assets/davivienda.png',
        description: "Davivienda es una empresa de seguros de vida y seguros de riesgo, con sede en México. Desarrollé un sitio web en WordPress para ofrecer servicios de seguros de vida y seguros de riesgo."
    },
    {
        id: 2,
        title: "Practi",
        image: "../assets/Practi.png",
        description: "Practi es una empresa de seguros de vida y seguros de riesgo, con sede en México. Desarrollé un sitio web en WordPress para ofrecer servicios de seguros de vida y seguros de riesgo."
    },
]


export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: false,
        margin: '20% 0px -20% 0px',
        amount: 0.2
    });

    //is necessary change the content here because, is just testing

    return (
        <section id="projects" className="projects-section" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView?  { opacity: 1, y: 0 } : { opacity: 0, y: 100}}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    Projects
                </motion.h2>
                <div className="projects-grid">
                    <AnimatePresence>
                        {projects.map((project, index) => (
                            <motion.div 
                                key={project.id} 
                                className="project-card" 
                                initial={{ opacity: 0, y: 200 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                exit={{ opacity: 0, y: 200 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={project.image} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )

}
