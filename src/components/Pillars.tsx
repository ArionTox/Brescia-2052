import React from 'react';
import { motion } from 'framer-motion';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const pillarsData = [
  {
    id: 'socio',
    num: '01',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
    alt: 'Comunità e cooperazione',
    title: 'Socio-\nPolitico',
    body: 'Le Olimpiadi come strumento di partecipazione democratica e coesione internazionale. Brescia diventa laboratorio di governance del futuro.',
    strategies: [
      { strong: 'Piattaforma "Brescia Decide":', text: ' Blockchain comunale per il voto dei cittadini sulla destinazione dei fondi e il design degli spazi pubblici.' },
      { strong: 'Programma "Scuole Olimpiche":', text: ' Scambi internazionali obbligatori per formare una generazione di volontari multilingue e aperti al mondo.' }
    ],
    cost: '€800 Mln',
    flip: false
  },
  {
    id: 'economia',
    num: '02',
    img: 'https://www.visitbrescia.it/wp-content/uploads/brescia-palazzo-loggia.jpg',
    alt: 'Brescia, edifici storici',
    title: 'Economico',
    body: 'Un piano finanziario innovativo che coinvolge i cittadini come investitori e trasforma le aree dismesse in motori di crescita tecnologica.',
    strategies: [
      { strong: 'Bond "Brescia 2052":', text: ' Titoli di stato locali per permettere ai cittadini di investire nel progetto e ricevere dividendi dai ricavi turistici futuri.' },
      { strong: 'Distretto "Mella Valley":', text: ' Incubatore tecnologico nelle aree industriali dismesse per sviluppare i software di gestione dell\'evento.' }
    ],
    cost: '€1,2 Mld',
    flip: true
  },
  {
    id: 'infra',
    num: '03',
    img: 'https://i0.wp.com/ance.it/wp-content/uploads/2026/03/STAMPA3D.jpg?fit=1202%2C675&ssl=1',
    alt: 'Brescia, panorama urbano',
    title: 'Infra-\nstrutturale',
    body: 'La trasformazione di Brescia in Smart City totale, con poli strategici distribuiti su tutto il territorio per valorizzare paesaggi unici.',
    strategies: [
      { strong: 'Recupero Industriale:', text: ' Trasformazione dell\'area ex-Alfa Romeo in hub logistici e sportivi, senza consumo di suolo agricolo.' },
      { strong: 'Appalti "Smart":', text: ' Stampa 3D su larga scala con materiali riciclati per costruire i moduli del Villaggio Olimpico in tempi record.' }
    ],
    cost: '€4,5 Mld',
    flip: false
  },
  {
    id: 'eco',
    num: '04',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80',
    alt: 'Architettura verde sostenibile',
    title: 'Ecologico',
    body: 'Un modello olimpico a impatto zero. Tecnologie all\'avanguardia integrate nell\'infrastruttura urbana per generare energia dalla folla stessa.',
    strategies: [
      { strong: 'Pavimentazione Piezoelettrica:', text: ' Mattonelle nelle zone pedonali che generano energia dal calpestio, alimentando l\'illuminazione pubblica.' },
      { strong: 'Cintura Verde:', text: ' Piantumazione di 1 milione di alberi nella fascia periurbana per assorbire le emissioni residue dei voli internazionali.' }
    ],
    cost: '€1,5 Mld',
    flip: true
  },
  {
    id: 'media',
    num: '05',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=900&q=80',
    alt: 'Realtà virtuale e tecnologia',
    title: 'Media\n& Tech',
    body: 'Un ecosistema comunicativo completamente nuovo: la città diventa un ambiente aumentato, con guide olografiche e streaming in 16K senza lag.',
    strategies: [
      { strong: 'Rete 7G/8G Urbana:', text: ' Copertura totale della provincia per streaming in 16K e uso massiccio della realtà aumentata senza interruzioni.' },
      { strong: 'Avatar Assistenti:', text: ' Guide turistiche olografiche multilingue distribuite per tutta la città per assistere i visitatori in tempo reale.' }
    ],
    cost: '€1,0 Mld',
    flip: false
  }
];

const Pillars = () => {
  return (
    <div className="pillars-wrap">
      {pillarsData.map((pillar) => (
        <motion.div 
          key={pillar.id}
          id={pillar.id} 
          className={`pillar-block ${pillar.flip ? 'flip' : ''}`}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={revealVariant}
        >
          <div className="pillar-img">
            <img src={pillar.img} alt={pillar.alt} />
            <div className="pillar-img-overlay"></div>
            <div className="pillar-img-num">{pillar.num}</div>
          </div>
          <div className="pillar-content">
            <div className="pillar-tag">Aspetto</div>
            <h2 className="pillar-title" style={{ whiteSpace: 'pre-line' }}>{pillar.title}</h2>
            <p className="pillar-body">{pillar.body}</p>
            <div className="strategy-block">
              <div className="strategy-label">Come realizzarlo</div>
              <ul className="strategy-list">
                {pillar.strategies.map((strat, idx) => (
                  <li key={idx}><strong>{strat.strong}</strong>{strat.text}</li>
                ))}
              </ul>
            </div>
            <div className="cost-tag">Investimento stimato <span>{pillar.cost}</span></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Pillars;
