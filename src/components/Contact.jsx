import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/contact.scss";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    
    const [toolTip, setTooltip] = useState("Copy email");
    const [showTooltip, setShowTooltip] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText("correo@example.com");
        setTooltip("Copied!");
    
        setTimeout(() => {
          setTooltip("Copy email");
        }, 2000);
      };
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
                    transition={{ duration: 1 }}
                    className="section-description"
                >
                    Feel free to reach out to me for any project inquiries or collaborations.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1 }}
                    className="contact-info"
                >
                    <a className="whatsapp" href="https://api.whatsapp.com/send/?phone=573182848957&text&type=phone_number&app_absent=0" target="_blank">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                        </a>
                    <a className="instagram" href="https://www.instagram.com/_andres.z_5/" target="_blank">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                    </a>
                    <a className="email" 
                        onClick={copyToClipboard}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        >
                        {showTooltip && <div className="tooltip">{toolTip}</div>}
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
