import React from 'react';
import { motion } from 'framer-motion';

const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

const Venues = () => {
  return (
    <section className="sedi-section">
      <div className="sedi-inner">
        <motion.div className="section-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
          Infrastrutture
        </motion.div>
        <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
          Sedi di Gara
        </motion.h2>
        
        <motion.div 
          className="sedi-grid"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {[
            { icon: '🏟️', name: 'Stadio Rigamonti 2.0', desc: 'Completamente ricostruito. Ospiterà calcio, atletica e la cerimonia di apertura.' },
            { icon: '🏰', name: 'Castello di Brescia', desc: 'Cornice storica unica sotto tensostrutture trasparenti per tiro con l\'arco e scherma.' },
            { icon: '🌊', name: 'Lago di Garda & Iseo', desc: 'Vela e canottaggio sul Garda. Nuoto di fondo e triathlon sulle acque del Lago d\'Iseo.' },
            { icon: '🏀', name: 'PalaLeonessa & Brixia Forum', desc: 'Basket, pallavolo e ginnastica nei palazzetti modernizzati nel cuore della città.' },
          ].map((venue, i) => (
            <motion.div className="sede-card" key={i} variants={revealVariant}>
              <div className="sede-card-body">
                <div className="sede-icon">{venue.icon}</div>
                <div className="sede-name">{venue.name}</div>
                <div className="sede-desc">{venue.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Venues;
