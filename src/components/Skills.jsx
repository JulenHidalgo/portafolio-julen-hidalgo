import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills">
      <div className="reveal" ref={ref}>
        <div className="section-label">Tecnologías</div>
        <h2 className="section-title">Stack técnico</h2>
        <p className="section-sub">
          Un perfil versátil que cubre todo el ciclo de desarrollo, desde la interfaz hasta el
          servidor y la base de datos.
        </p>

        <div className={styles.grid}>
          {DATA.skills.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cat}>{s.category}</div>
              <div className={styles.name}>{s.name}</div>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t, j) => (
                  <span key={j} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
