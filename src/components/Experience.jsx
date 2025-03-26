import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    const isInView = useInView(ref, { once: false });

    return (
        <section id="experience" className="experience-section" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView ?  { opacity: 1, y: 0 } : { opacity: 0, y: 100}}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, y: 100}}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="timeline-icon">
                                {exp.logo}
                            </div>
                            <div className="timeline-content">
                                <h3 className="job-title">{exp.title}</h3>
                                <h4 className="company">
                                    {exp.company} <span className="period">{exp.period}</span>
                                </h4>
                                <ul>
                                    {exp.tasks.map((task, idx) => (
                                        <li key={idx}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
