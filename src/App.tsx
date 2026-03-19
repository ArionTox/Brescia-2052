import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Shield, Cpu, Globe, Anchor, Activity } from 'lucide-react';

const Reveal = ({ children, delay = 0, yOffset = 40 }: { children: React.ReactNode, delay?: number, yOffset?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const BudgetBar = ({ width, delay = 0 }: { width: number, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <div className="bar-track" ref={ref}>
      <motion.div 
        className="bar-fill" 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: width } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 1000], [0, 300]);
  const yHeroBg = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav style={{ background: scrolled ? 'rgba(10, 14, 26, 0.85)' : 'transparent', borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : '1px solid transparent' }}>
        <div className="nav-inner">
          <a href="#" className="nav-logo bebas-font">Brescia 2052</a>
          <ul className="nav-links">
            <li><a href="#budget" className="mono-font">Investimenti</a></li>
            <li><a href="#socio" className="mono-font">Socio-politico</a></li>
            <li><a href="#economia" className="mono-font">Economia</a></li>
            <li><a href="#infra" className="mono-font">Infrastrutture</a></li>
            <li><a href="#eco" className="mono-font">Ecologia</a></li>
            <li><a href="#media" className="mono-font">Media</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div className="hero-bg" style={{ y: yHeroBg }} />
        <div className="hero-grid" />
        
        <svg className="rings-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="240" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 8"/>
          <circle cx="250" cy="250" r="180" stroke="#C9A84C" strokeWidth="1"/>
          <circle cx="250" cy="250" r="120" stroke="#4A7FA5" strokeWidth="1"/>
          <circle cx="250" cy="250" r="60" stroke="#C9A84C" strokeWidth="0.5"/>
          <line x1="0" y1="250" x2="500" y2="250" stroke="#C9A84C" strokeWidth="0.5"/>
          <line x1="250" y1="0" x2="250" y2="500" stroke="#C9A84C" strokeWidth="0.5"/>
          <circle cx="250" cy="250" r="4" fill="#C9A84C"/>
        </svg>

        <motion.div 
          className="hero-year bebas-font"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          2052
        </motion.div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          <div className="hero-eyebrow mono-font">Giochi Olimpici &nbsp;·&nbsp; Edizione XXXII</div>
          <h1 className="hero-title">Olimpiadi<br/>di Brescia</h1>
          <div className="hero-divider" />
          <p className="hero-sub serif-font">Oltre il Limite: L'Avvento di un Nuovo Paradigma</p>
          <p className="hero-desc">
            Proiettandoci nell'orizzonte del 2052, constatiamo come il concetto stesso di tessuto urbano abbia subìto una profonda trasfigurazione. Le metropoli, affrancate dai vincoli geografici, convergono in una macro-rete quantistica e infrastrutturale a levitazione magnetica. In questo ecosistema iper-connesso, lo spirito olimpico viene ridefinito: Brescia assume il ruolo di avanguardia globale, sintetizzando innovazione tecnologica ed etica sportiva in un inedito scenario a gravità modificata.
          </p>
          <a href="#budget" className="action-btn" onClick={(e) => { e.preventDefault(); document.getElementById('budget')?.scrollIntoView({ behavior: 'smooth' }); }}>Analizza il Prospetto Strategico</a>
        </motion.div>
      </section>

      {/* BUDGET */}
      <section id="budget" className="budget-section">
        <div className="budget-inner">
          <Reveal>
            <div className="section-eyebrow mono-font">Sintesi Economica Globale</div>
            <h2 className="section-heading">Piano Finanziario<br/>& Tokenomics</h2>
          </Reveal>
          
          <table className="budget-table">
            <tbody>
              <tr>
                <td className="mono-font">Impatto Socio-Politico & Governance Algoritmica</td>
                <td className="bar-cell"><BudgetBar width={0.089} delay={0.1} /></td>
                <td className="cost bebas-font">€0,8 Mld</td>
              </tr>
              <tr>
                <td className="mono-font">Economia Quantistica ed Ecosistema Start-up</td>
                <td className="bar-cell"><BudgetBar width={0.133} delay={0.2} /></td>
                <td className="cost bebas-font">€1,2 Mld</td>
              </tr>
              <tr>
                <td className="mono-font">Infrastrutture LevMag & Riqualificazione Spaziale</td>
                <td className="bar-cell"><BudgetBar width={0.5} delay={0.3} /></td>
                <td className="cost bebas-font">€4,5 Mld</td>
              </tr>
              <tr>
                <td className="mono-font">Eco-Sostenibilità & Bonifica Atmosferica</td>
                <td className="bar-cell"><BudgetBar width={0.167} delay={0.4} /></td>
                <td className="cost bebas-font">€1,5 Mld</td>
              </tr>
              <tr>
                <td className="mono-font">Broadcasting Sensoriale & Realtà Mista</td>
                <td className="bar-cell"><BudgetBar width={0.111} delay={0.5} /></td>
                <td className="cost bebas-font">€1,0 Mld</td>
              </tr>
              <tr className="total">
                <td className="mono-font">Volume Complessivo dell'Investimento</td>
                <td className="bar-cell"></td>
                <td className="cost bebas-font">€9,0 Mld</td>
              </tr>
            </tbody>
          </table>

          <Reveal delay={0.6}>
            <div className="roi-callout">
              <Activity style={{ float: 'left', marginRight: '1rem', color: 'var(--gold)' }} />
              <strong>Analisi Predittiva Quantistica:</strong> L'esternalità positiva derivante dal circuito <em>Hyperloop Padano</em> e dal turismo immersivo genererà, secondo i rigorosi modelli stocastici, un ritorno stimato superiore ai <strong>€15,3 Miliardi</strong> entro il 2060.
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <div className="pillars-wrap">
        
        {/* 1 */}
        <div id="socio" className="pillar-block">
          <div className="pillar-img">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200" alt="Governance" />
            <div className="pillar-img-overlay" />
            <div className="pillar-img-num bebas-font">01</div>
          </div>
          <div className="pillar-content">
            <Reveal>
              <div className="pillar-tag mono-font">Ecosistema Civico</div>
              <h2 className="pillar-title bebas-font">Governance<br/>Algoritmica e Partecipativa</h2>
              <p className="pillar-body">
                L'evento olimpico trascende la tradizionale impostazione verticistica ed elitista per abbracciare un modello di governance neurale decentralizzata. In virtù di ciò, Brescia si attesta come laboratorio pionieristico di democrazia diretta, laddove le variabili logistiche vengono costantemente ottimizzate dall'Intelligenza Artificiale "Leonessa".
              </p>
              <div className="strategy-block">
                <div className="strategy-label mono-font">Linee Guida Operative</div>
                <ul className="strategy-list">
                  <li><strong>DAO "Brescia Decide":</strong> Implementazione di smart contracts su rete quantistica volti a garantire l'effettiva sovranità popolare nelle scelte urbanistiche.</li>
                  <li><strong>Volontariato Aumentato:</strong> Adozione di esoscheletri cognitivi per abbattere le anacronistiche barriere linguistiche e fisiche, promuovendo un'etica dell'inclusione totale.</li>
                </ul>
              </div>
              <div className="cost-tag mono-font">Allocazione <span>€800 Mln</span></div>
            </Reveal>
          </div>
        </div>

        {/* 2 */}
        <div id="economia" className="pillar-block flip">
          <div className="pillar-img">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" alt="Space economy" />
            <div className="pillar-img-overlay" />
            <div className="pillar-img-num bebas-font">02</div>
          </div>
          <div className="pillar-content">
            <Reveal>
              <div className="pillar-tag mono-font">Sviluppo Capitale</div>
              <h2 className="pillar-title bebas-font">Tokenomics<br/>e Finanza Distribuita</h2>
              <p className="pillar-body">
                Assistiamo alla radicale decostruzione dei paradigmi finanziari classici. L'emissione del "BresciaToken", entità crittografica ancorata al surplus energetico delle infrastrutture, democratizza l'accesso ai dividendi dell'evento, allocando i profitti direttamente nel social-wallet della cittadinanza.
              </p>
              <div className="strategy-block">
                <div className="strategy-label mono-font">Linee Guida Operative</div>
                <ul className="strategy-list">
                  <li><strong>Distretto "Mella Valley 2.0":</strong> L'auspicata riconversione post-industriale delle aree siderurgiche ha partorito un polo informatico d'eccellenza, interamente sostenuto dalla fusione nucleare a freddo.</li>
                  <li><strong>Brixia Bond Quantistici:</strong> Strumenti macro-finanziari inviolabili, il cui rendimento fluttua in stretta e oggettiva correlazione al superamento dei limiti atletici registrati.</li>
                </ul>
              </div>
              <div className="cost-tag mono-font">Allocazione <span>€1,2 Mld</span></div>
            </Reveal>
          </div>
        </div>

        {/* 3 */}
        <div id="infra" className="pillar-block">
          <div className="pillar-img">
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200" alt="Smart Infrastructure" />
            <div className="pillar-img-overlay" />
            <div className="pillar-img-num bebas-font">03</div>
          </div>
          <div className="pillar-content">
            <Reveal>
              <div className="pillar-tag mono-font">Reti & LevMag</div>
              <h2 className="pillar-title bebas-font">Hyper-Infrastrutture</h2>
              <p className="pillar-body">
                La frammentazione territoriale viene sublimata dall'impiego dei flussi Hyperloop sotto vuoto: la traslazione spaziale Milano-Brescia è ormai confinata a soli 6 minuti. La lungimirante 'Agenda Digitale Smart City' degli anni '20 funge oggi da impalcatura per una metropoli organica, in grado di gestire omeostaticamente viabilità aerea, risorse idriche e veicoli autonomi.
              </p>
              <div className="strategy-block">
                <div className="strategy-label mono-font">Linee Guida Operative</div>
                <ul className="strategy-list">
                  <li><strong>Villaggio Olimpico Swarm-Built:</strong> Edificazione repentinea tramite intelligenza a sciame per limitare il consumo di suolo: complessi modulari prontamente riconvertibili in moduli di edilizia residenziale pubblica.</li>
                  <li><strong>Cieli Aperti:</strong> La mobilità verticale (EVTOL), scevra da esternalità negative, funge da collante vitale e connettivo tra il polo aeroportuale e i plessi sportivi.</li>
                </ul>
              </div>
              <div className="cost-tag mono-font">Allocazione <span>€4,5 Mld</span></div>
            </Reveal>
          </div>
        </div>

        {/* 4 */}
        <div id="eco" className="pillar-block flip">
          <div className="pillar-img">
            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200" alt="Ecology" />
            <div className="pillar-img-overlay" />
            <div className="pillar-img-num bebas-font">04</div>
          </div>
          <div className="pillar-content">
            <Reveal>
              <div className="pillar-tag mono-font">Simbiosi Naturale</div>
              <h2 className="pillar-title bebas-font">Impatto Ambientale<br/>Rigenerativo</h2>
              <p className="pillar-body">
                L'obiettivo preposto trascende l'ormai obsoleta pretesa di neutralità carbonica, istituendo un paradigma di ecologia attiva e performativa. Le Olimpiadi si pongono a guisa di recettori di CO2, avvalendosi di processi biotecnologici luminescenti atti a preservare i fragili ecosistemi naturalistici limitrofi.
              </p>
              <div className="strategy-block">
                <div className="strategy-label mono-font">Linee Guida Operative</div>
                <ul className="strategy-list">
                  <li><strong>Olimpic Bio-Park Ex-Caffaro:</strong> L'acclarato trauma ambientale dell'area SIN, magistralmente sanato dalle procedure post-2026, si palesa oggi in un ecosistema urbano d'avanguardia interamente votato alla sostenibilità circolare.</li>
                  <li><strong>Scudi Ionici Atmosferici:</strong> Barriere immateriali mirate al filtraggio massivo delle polveri sottili padane, capaci parallelamente di operare una perenne calibrazione micro-climatica.</li>
                  <li><strong>Pavimentazione Kinetica:</strong> L'assimilazione dell'energia cinetica dei flussi turistici innesca un circolo palesemente virtuoso volto ad auto-sostenere l'impianto olografico monumentale.</li>
                </ul>
              </div>
              <div className="cost-tag mono-font">Allocazione <span>€1,5 Mld</span></div>
            </Reveal>
          </div>
        </div>

        {/* 5 */}
        <div id="media" className="pillar-block">
          <div className="pillar-img">
            <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1200" alt="Neuralink Broadcasting" />
            <div className="pillar-img-overlay" />
            <div className="pillar-img-num bebas-font">05</div>
          </div>
          <div className="pillar-content">
            <Reveal>
              <div className="pillar-tag mono-font">Comunicazione Sensoriale</div>
              <h2 className="pillar-title bebas-font">Neural<br/>Broadcasting</h2>
              <p className="pillar-body">
                Si assiste al tramonto ineluttabile dell'interfaccia a schermo bidimensionale. La stantia dicotomia spettatore-evento viene annullata mediante avanzate tecnologie di broadcasting neuro-aptico. La fruizione si eleva a esperienza empirica e sensoriale, infrangendo metaforicamente 'il velo di Maya' della rappresentazione mediatica classica.
              </p>
              <div className="strategy-block">
                <div className="strategy-label mono-font">Linee Guida Operative</div>
                <ul className="strategy-list">
                  <li><strong>Simbiosi Storica in Realtà Mista:</strong> Presso l'antico sito del Capitolium, la narrazione espositiva intreccia a livello olografico la figura gladiatoria all'eccellenza biomeccanica dei moderni atleti.</li>
                  <li><strong>Infrastruttura Cloud Aptica 8G:</strong> L'annichilimento dei vincoli spaziali viene certificato da una rete abilitata al trasferimento istantaneo, e radicalmente a-latente, di stati percettivi e cinestetici globali.</li>
                </ul>
              </div>
              <div className="cost-tag mono-font">Allocazione <span>€1,0 Mld</span></div>
            </Reveal>
          </div>
        </div>

      </div>

      {/* SEDI DI GARA */}
      <section className="sedi-section">
        <div className="sedi-inner">
          <Reveal>
            <div className="section-eyebrow mono-font">Infrastrutture e Arene</div>
            <h2 className="section-heading">Sedi di Gara<br/>di Nuova Generazione</h2>
          </Reveal>
          
          <div className="sedi-grid">
            <Reveal delay={0.1}>
              <div className="sede-card">
                <div className="sede-card-body">
                  <Cpu className="sede-icon" size={40} strokeWidth={1.5} />
                  <div className="sede-name mono-font">Stadio Rigamonti Grav-Zero</div>
                  <div className="sede-desc">Campo magnetico controllato per permettere match di calcio acrobatico a gravità -30% e ginnastica tridimensionale.</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="sede-card">
                <div className="sede-card-body">
                  <Shield className="sede-icon" size={40} strokeWidth={1.5} />
                  <div className="sede-name mono-font">Olo-Arena del Castello</div>
                  <div className="sede-desc">Il Castello di Brescia trasformato tramite smart-glass in un'arena per eSports immersivi e droni da combattimento tattico.</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="sede-card">
                <div className="sede-card-body">
                  <Anchor className="sede-icon" size={40} strokeWidth={1.5} />
                  <div className="sede-name mono-font">Lago Garda-Iseo Waterplex</div>
                  <div className="sede-desc">Piattaforme galleggianti a energia solare desalinizzante per ospitare competizioni di hydrofoil e nuoto con esoscheletri idrodinamici.</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="sede-card">
                <div className="sede-card-body">
                  <Globe className="sede-icon" size={40} strokeWidth={1.5} />
                  <div className="sede-name mono-font">PalaLeonessa Strato-Dome</div>
                  <div className="sede-desc">Palazzetto con copertura autorigenerante a base di micelio fungino. Sede per basket olografico e arti marziali in gravità mista.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="conclusion">
        <div className="conclusion-bg" />
        <div className="conclusion-content">
          <Reveal>
            <div className="mono-font" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', textShadow: '0 0 10px rgba(201,168,76,0.3)' }}>
              Proiezione Finanziaria · 2052
            </div>
            <h2 className="conclusion-title bebas-font">L'Eredità Ideale della Leonessa</h2>
            <p className="conclusion-text">
              L'allocazione inziale di <em>9 miliardi di euro</em> non dev'essere superficialmente derubricata a spesa contingente per una mera <i>kermesse</i> ludica, bensì recepita come l'atto genetico costitutivo per delineare l'infrastruttura di una futuribile <em>Post-Scarcity City</em>.
            </p>
            <p className="conclusion-text">
              In tale ottica, avvalorata dai rigorosi modelli esplicativi dell'IA "Leonessa", il parametro numerico di <em>€15,3 miliardi</em> funge da mero orizzonte probabilistico intermedio: il telos, ovvero il fine autentico, risiede nell'elevazione delle facoltà umane in un substrato tecnologico inalienabile e perenne.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="tags-row">
              <span className="tag mono-font">€9 Mld CaPeX</span>
              <span className="tag mono-font">€15.3 Mld RoI (2060)</span>
              <span className="tag mono-font">Hyperloop Connected</span>
              <span className="tag mono-font">Zero Carbon & AI Governance</span>
              <span className="tag mono-font">Neural Streaming 8G</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        &copy; Comitato Olimpico Quantistico Brescia 2052 &nbsp;·&nbsp; Piano Strategico e Decentralizzato &nbsp;·&nbsp; Trasmesso dal Nodo Neurale Padano
      </footer>
    </>
  );
}

export default App;
