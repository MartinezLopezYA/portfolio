import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import "../styles/contact.scss";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    Contact
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="section-description"
                >
                    Feel free to reach out to me for any project inquiries or collaborations.
                </motion.p>
                <div className="contact-info">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className="contact-item"
                    >
                        <Mail size={24} />
                        <span>email@example.com</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.6 }}
                        className="contact-item"
                    >
                        <Phone size={24} />
                        <span>+123 456 7890</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.7 }}
                        className="contact-item"
                    >
                        <MapPin size={24} />
                        <span>City, Country</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
