import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import '../styles/contact.scss';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20% 0px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío (reemplaza con tu API real)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get In <span className="highlight">Touch</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="info-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="info-icon">
                <Mail size={24} className="icon" />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href="mailto:hello@andresdev.com">hello@andresdev.com</a>
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            >
              <div className="info-icon">
                <Phone size={24} className="icon" />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            >
              <div className="info-icon">
                <MapPin size={24} className="icon" />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Bogotá, Colombia</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>

            {submitStatus && (
              <motion.p 
                className={`submit-status ${submitStatus}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Error sending message. Please try again.'}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}