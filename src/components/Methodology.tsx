import React from 'react';
import { motion } from 'framer-motion';

const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

const Methodology = () => {
  return (
    <section id="metodologia" className="metodologia-section">
      <div className="metodologia-inner">
        <motion.div className="section-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
          Trasparenza
        </motion.div>
        
        <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
          Metodologia delle Stime
        </motion.h2>
        
        <motion.p className="metodo-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
          Le stime di costo per le Olimpiadi di Brescia 2052 non sono numeri casuali: si basano su dati reali delle edizioni più recenti, corretti con un fattore di inflazione proiettata al 2052 e adattati alla scala e al contesto del territorio bresciano.
        </motion.p>

        {/* CONFRONTO OLIMPIADI PASSATE */}
        <motion.div className="metodo-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariant}>
          <div className="metodo-block-header">
            <div className="metodo-num">01</div>
            <div>
              <div className="metodo-label">Punto di partenza</div>
              <div className="metodo-title">Costi delle Olimpiadi Recenti</div>
            </div>
          </div>
          <div className="olimpiadi-grid">
            <div className="olimpiade-card">
              <div className="olimpiade-flag">🇯🇵</div>
              <div className="olimpiade-name">Tokyo 2020</div>
              <div className="olimpiade-cost">~€13 Mld</div>
              <div className="olimpiade-note">Edizione più costosa della storia, condizionata dal rinvio Covid. Costo infrastrutture: €7,9 Mld. Fonte: Comitato Organizzatore Tokyo 2020.</div>
            </div>
            <div className="olimpiade-card">
              <div className="olimpiade-flag">🇫🇷</div>
              <div className="olimpiade-name">Parigi 2024</div>
              <div className="olimpiade-cost">~€8,7 Mld</div>
              <div className="olimpiade-note">Costo finale con +146% rispetto alle previsioni iniziali. Infrastrutture: €4,9 Mld, di cui €1,6 Mld solo per il Villaggio Olimpico. Fonte: Università di Oxford / Truenumbers.</div>
            </div>
            <div className="olimpiade-card">
              <div className="olimpiade-flag">🇺🇸</div>
              <div className="olimpiade-name">Los Angeles 2028</div>
              <div className="olimpiade-cost">~€5,9 Mld</div>
              <div className="olimpiade-note">Stima attuale basata sul riuso degli impianti esistenti. Modello virtuoso che Brescia 2052 prende come riferimento. Fonte: Università di Oxford / LAOCOG.</div>
            </div>
            <div className="olimpiade-card highlight">
              <div className="olimpiade-flag">🇮🇹</div>
              <div className="olimpiade-name">Brescia 2052 <em>(stima)</em></div>
              <div className="olimpiade-cost">~€9,0 Mld</div>
              <div className="olimpiade-note">Media ponderata tra i modelli Tokyo, Parigi e LA e costi aggiuntivi per tecnologie futuristiche.</div>
            </div>
          </div>
        </motion.div>

        {/* RIPARTIZIONE PER VOCE */}
        <motion.div className="metodo-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariant}>
          <div className="metodo-block-header">
            <div className="metodo-num">02</div>
            <div>
              <div className="metodo-label">Dettaglio</div>
              <div className="metodo-title">Perché Ogni Voce Costa Così</div>
            </div>
          </div>
          <div className="voci-list">
            {[
              { name: 'Infrastrutture & Sedi — €4,5 Mld', pct: '50%', w: '50%', desc: 'La voce più grande, coerente con Parigi 2024 (€4,9 Mld solo per strutture sportive). Include metro, stadi, Villaggio Olimpico e recupero delle aree ex-industriali.' },
              { name: 'Ecologia & Ambiente — €1,5 Mld', pct: '17%', w: '17%', desc: 'Parigi ha speso €1,4 Mld solo per la bonifica della Senna. La Cintura Verde e i sistemi energetici rinnovabili di Brescia richiedono un investimento comparabile.' },
              { name: 'Economia & Start-up — €1,2 Mld', pct: '13%', w: '13%', desc: 'Include incentivi alle imprese, marketing globale e il distretto tecnologico "Mella Valley". Confrontabile con i fondi per lo sviluppo economico di Tokyo 2020.' },
              { name: 'Media & Tech — €1,0 Mld', pct: '11%', w: '11%', desc: 'LA 2028 ha già incassato €2 Mld in sponsorizzazioni tech. I costi per rete 7G/8G, piattaforme VR e cybersicurezza sono stimati in proporzione agli investimenti digitali attuali.' },
              { name: 'Socio-Politico — €0,8 Mld', pct: '9%', w: '9%', desc: 'Sicurezza, programmi educativi e gestione diplomatica. A Tokyo 2020, la sola sicurezza è costata €2 Mld — l\'utilizzo di tecnologie digitali consente a Brescia di contenere questa voce.' }
            ].map((voce, i) => (
              <div className="voce-item" key={i}>
                <div className="voce-header">
                  <div className="voce-name">{voce.name}</div>
                  <div className="voce-pct">{voce.pct}</div>
                </div>
                <div className="voce-bar">
                  <motion.div 
                    className="voce-fill" 
                    initial={{ width: 0 }} 
                    whileInView={{ width: voce.w }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }} 
                  />
                </div>
                <div className="voce-desc">{voce.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Methodology;
