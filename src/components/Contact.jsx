import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contacto">
      <div className="reveal" ref={ref}>
        <div className={styles.inner}>
          <div className={styles.text}>
            <div className="section-label">Contacto</div>
            <h2 className={styles.heading}>
              Construyamos algo<br />que tenga impacto
            </h2>
            <p className={styles.subtext}>
            Me especializo en desarrollo full stack con IA aplicada, creando sistemas que automatizan procesos y escalan productos reales.
            Si tienes una idea o necesitas construir un producto, puedo ayudarte a llevarlo a producción.
            </p>
            <a
              href="mailto:julenhidalgo2005@gmail.com"
              className="btn btn-primary"
            >
              Hablemos →
            </a>
          </div>

          <div className={styles.items}>
            {DATA.contact.map((c, i) =>
              c.url ? (
                <a
                  key={i}
                  href={c.url}
                  className={styles.item}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.icon}>{c.icon}</div>
                  <div>
                    <span className={styles.label}>{c.label}</span>
                    <span className={styles.val}>{c.val}</span>
                  </div>
                  <span className={styles.arrow}>→</span>
                </a>
              ) : (
                <div key={i} className={styles.item}>
                  <div className={styles.icon}>{c.icon}</div>
                  <div>
                    <span className={styles.label}>{c.label}</span>
                    <span className={styles.val}>{c.val}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
