import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Experience.module.css';

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experiencia">
      <div className="reveal" ref={ref}>
        <div className="section-label">Trayectoria</div>
        <h2 className="section-title">Experiencia profesional</h2>
        <p className="section-sub">
          Experiencia real en entornos de empresa, con proyectos publicados en producción.
        </p>

        <div className={styles.timeline}>
          {DATA.experience.map((e, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.header}>
                <div className={styles.role}>{e.role}</div>
                <div className={styles.date}>{e.date}</div>
              </div>
              <div className={styles.company}>{e.company}</div>
              <p className={styles.desc}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
