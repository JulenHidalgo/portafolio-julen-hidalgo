import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Projects.module.css';

const filters = [
  { value: 'all', label: 'Todos' },
  { value: 'emp', label: '🏢 Proyectos de empresa' },
  { value: 'edu', label: '🎓 Proyectos académicos' },
];

export default function Projects() {
  const [active, setActive] = useState('all');
  const ref = useReveal();

  const filtered =
    active === 'all' ? DATA.projects : DATA.projects.filter((p) => p.type === active);

  return (
    <section id="proyectos">
      <div className="reveal" ref={ref}>
        <div className="section-label">Trabajo</div>
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="section-sub">
          Una selección de proyectos reales y académicos que demuestran mi versatilidad técnica.
        </p>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${active === f.value ? styles.activeFilter : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <div key={i} className={`${styles.card} ${styles[p.type]}`}>
              
              <div
                className={styles.thumb}
                style={{ background: p.bg }}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className={styles.image}
                  />
                )}

                <div className={`${styles.typeBadge} ${styles[`badge_${p.type}`]}`}>
                  {p.type === 'emp' ? '🏢 Empresa' : '🎓 Académico'}
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.tags}>
                  {p.tags.map((t, j) => (
                    <span key={j} className={`${styles.tag} ${styles[`tag_${p.type}`]}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.name}>{p.name}</div>
                <p className={styles.desc}>{p.desc}</p>

                {p.links.length > 0 && (
                  <div className={styles.links}>
                    {p.links.map((l, j) => (
                      <a
                        key={j}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.link} ${styles[`link_${p.type}`]}`}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
