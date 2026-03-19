import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <svg className="rings-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="240" stroke="#C9A84C" strokeWidth="1"/>
        <circle cx="250" cy="250" r="180" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="120" stroke="#C9A84C" strokeWidth="1"/>
        <line x1="0" y1="250" x2="500" y2="250" stroke="#C9A84C" strokeWidth="0.5"/>
        <line x1="250" y1="0" x2="250" y2="500" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="5" fill="#C9A84C"/>
      </svg>
      
      <motion.div 
        className="hero-year"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        2052
      </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <div className="hero-eyebrow">Giochi Olimpici &nbsp;·&nbsp; Edizione XXXII</div>
        <h1 className="hero-title">Olimpiadi<br/>di Brescia</h1>
        <div className="hero-divider"></div>
        <p className="hero-sub">Uno sguardo al futuro</p>
        <p className="hero-desc" style={{ marginTop: '1.5rem' }}>
          Immaginate il 2052. Il mondo è cambiato. Le città sono più intelligenti,
          più attente all'ambiente e alle persone. In questo contesto nasce un evento
          straordinario: le Olimpiadi di Brescia.
        </p>
      </motion.div>

      <motion.div 
        className="scroll-hint"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
      >
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
