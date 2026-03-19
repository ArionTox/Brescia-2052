import React from 'react';
import { motion } from 'framer-motion';

const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="conclusion-bg"></div>
      <motion.div 
        className="conclusion-content"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.div 
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem"
          }}
          variants={revealVariant}
        >
          Conclusione · 2052
        </motion.div>
        
        <motion.h2 className="conclusion-title" variants={revealVariant}>
          Non una Spesa.<br/>Un Salto nel Futuro.
        </motion.h2>
        
        <motion.p className="conclusion-text" variants={revealVariant}>
          Con un investimento di <em>9 miliardi di euro</em>, Brescia non acquista solo un evento sportivo: acquista una nuova identità di metropoli globale, sostenibile e tecnologica.
        </motion.p>
        
        <motion.p className="conclusion-text" variants={revealVariant}>
          Un ritorno stimato di <em>€15 miliardi</em> nei dieci anni successivi dimostra che ogni euro investito oggi è la fondazione di un domani più prospero per l'intera regione.
        </motion.p>
        
        <motion.div className="tags-row" variants={revealVariant}>
          <span className="tag">€9 Mld Investimento</span>
          <span className="tag">€15 Mld Ritorno</span>
          <span className="tag">Smart City</span>
          <span className="tag">Impatto Zero</span>
          <span className="tag">1M Alberi</span>
          <span className="tag">Rete 7G/8G</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Conclusion;
