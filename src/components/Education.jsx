import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Education.module.css';

export default function Education() {
  const ref = useReveal();

  return (
    <section id="formacion">
      <div className="reveal" ref={ref}>
        <div className="section-label">Formación</div>
        <h2 className="section-title">Educación</h2>
        <p className="section-sub">
          Base técnica sólida con formación especializada en tecnologías emergentes.
        </p>

        <div className={styles.grid}>
          {DATA.education.map((e, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.year}>{e.year}</div>
              <div className={styles.degree}>{e.degree}</div>
              <div className={styles.school}>{e.school}</div>
              {e.badge && <div className={styles.badge}>{e.badge}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
