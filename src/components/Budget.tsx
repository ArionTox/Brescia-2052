import React from 'react';
import { motion } from 'framer-motion';

const budgetData = [
  { name: 'Socio-Politico', cost: '€0,8 Mld', width: 0.089 },
  { name: 'Economia & Start-up', cost: '€1,2 Mld', width: 0.133 },
  { name: 'Infrastrutture & Sedi', cost: '€4,5 Mld', width: 0.5 },
  { name: 'Ecologia & Ambiente', cost: '€1,5 Mld', width: 0.167 },
  { name: 'Media & Tech', cost: '€1,0 Mld', width: 0.111 },
];

const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

const Budget = () => {
  return (
    <section id="budget" className="budget-section">
      <div className="budget-inner">
        <motion.div 
          className="section-eyebrow"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
          variants={revealVariant}
        >
          Sintesi Economica
        </motion.div>
        
        <motion.h2 
          className="section-heading"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
          variants={revealVariant}
        >
          Piano Finanziario
        </motion.h2>

        <motion.table 
          className="budget-table"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <tbody>
            {budgetData.map((item, i) => (
              <motion.tr key={i} variants={revealVariant}>
                <td>{item.name}</td>
                <td className="bar-cell">
                  <div className="bar-track">
                    <motion.div 
                      className="bar-fill" 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: item.width }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 + 0.2 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </td>
                <td className="cost">{item.cost}</td>
              </motion.tr>
            ))}
            <motion.tr className="total" variants={revealVariant}>
              <td>Totale Investimento</td>
              <td className="bar-cell"></td>
              <td className="cost">€9,0 Mld</td>
            </motion.tr>
          </tbody>
        </motion.table>
      </div>
    </section>
  );
};

export default Budget;
