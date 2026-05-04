import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <div className={styles.tag}>
          <div className={styles.tagDot} />
          Abierto a nuevas oportunidades
        </div>

        <h1 className={styles.name}>
          Julen<br />
          <span className={styles.accent}>Hidalgo.</span>
        </h1>

        <p className={styles.role}>
          <strong>Desarrollador Full Stack</strong> · Especialista en IA y Big Data
        </p>

        <p className={styles.desc}>
          Construyo productos digitales de principio a fin, transformando ideas en sistemas reales que ya están en uso. 
          He trabajado en proyectos de empresa, IA y desarrollo full stack, creando soluciones que automatizan procesos, 
          mejoran la toma de decisiones y conectan usuarios con tecnología de forma inteligente.
        </p>

        <div className={styles.cta}>
          <a href="#proyectos" className="btn btn-primary">Ver proyectos →</a>
          <a href="#contacto" className="btn btn-ghost">Contactar</a>
        </div>

        <div className={styles.langs}>
          <span className={styles.badge}>ES Castellano nativo</span>
          <span className={styles.badge}>EUS Euskera nativo</span>
          <span className={styles.badge}>EN Inglés B2</span>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.avatarRing}>
          <div className={styles.avatarInitials}>JH</div>
        </div>

        <div className={styles.floatCards}>
          <div className={styles.floatCard} style={{ animationDelay: '0.6s' }}>
            <strong>3</strong>
            <span>Empresas</span>
          </div>
          <div className={styles.floatCard} style={{ animationDelay: '0.75s' }}>
            <strong>8+</strong>
            <span>Proyectos completados</span>
          </div>
          <div className={styles.floatCard} style={{ animationDelay: '0.9s' }}>
            <strong>Full</strong>
            <span>Stack developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
