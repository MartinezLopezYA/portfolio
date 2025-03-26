import React, { useState, useRef } from 'react';
import '../styles/about.scss';
import { motion, useInView } from 'framer-motion';
import { Code, Server, Database, Layers, Palette, Star } from 'lucide-react';

const skills = [
    { id: 1, name: 'Design', key: 'design', icon: <Palette size={20} /> },
    { id: 2, name: 'Frontend', key: 'front', icon: <Code size={20} /> },
    { id: 3, name: 'Backend', key: 'back', icon: <Server size={20} /> },
    { id: 4, name: 'Database', key: 'bd', icon: <Database size={20} /> }
];

const skillsData = {
    design: [
        { id: 1, name: 'Canva', stars: 3, icon: <Palette size={20} color='#23ACF4'/> },
        { id: 2, name: 'Figma', stars: 4, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg>, color: '#595BD4' },
        { id: 3, name: 'Pinterest', stars: 3, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 20l4 -9" /><path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg> ,  color: '#DC2E31'}
    ],
    front: [
        { id: 1, name: 'React', stars: 3, icon: <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>, color: '#01D8FF' },
        { id: 2, name: 'Angular', stars: 4, icon: <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-angular"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" /><path d="M9 15l3 -8l3 8" /><path d="M10 13h4" /></svg>, color: '#DC2E31' }
    ],
    back: [
        { id: 1, name: 'FastAPI', stars: 2, icon: <Server size={20} /> },
        { id: 2, name: 'Java', stars: 2, icon: <Server size={20} /> }
    ],
    bd: [
        { id: 1, name: 'MySQL', stars: 4, icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mysql"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" /><path d="M9 7h.01" /></svg>, color: '#015B85' },
        { id: 2, name: 'PostgreSQL', stars: 3, icon: <Database size={20} /> }
    ]
};

export default function AboutMe() {
    const [selectedSkill, setSelectedSkill] = useState("design");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="about" className="about-section" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ?  { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ?  { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="section-description"
                >
                    I'm a Systems Engineer since 2024, and I find joy in developing new projects. When I discovered web development and its vast array of tools, I uncovered a true passion: providing and developing solutions that make a difference for people. I have experience with differentes languages, tools and frameworks.
                </motion.p>
                <div className="skills-section">
                    <div className="skills-container">
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                className="skill-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0}}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedSkill(skill.key)}
                            >
                                <div className="skill-info">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <p className="skill-name">{skill.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        key={selectedSkill}
                        className="skills-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ?  { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {selectedSkill ? (
                            <ul>
                                {skillsData[selectedSkill].map((item) => (
                                    <li key={item.id} className="skill-item">
                                        <div className="skill-details">
                                            <div className="skill-head">
                                                <p style={{color: item.color}}>{item.icon}</p> <p>{item.name}</p>
                                            </div>
                                            <span className="stars">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    i < item.stars ? (
                                                        <Star key={i} size={14} className='star-selected'/>
                                                    ) : (
                                                        <Star key={i} size={14} className='star-unselected'/>
                                                    )
                                                ))}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Select a skill to see more details.</p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
