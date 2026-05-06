import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Contact.module.css';

// Mapa de iconos SVG por tipo — añade nuevos tipos aquí si amplías data.js
const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.24 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.15 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
};

const ICON_COPY = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="1" width="9" height="11" rx="1.5"/>
    <path d="M2 5v9a1.5 1.5 0 0 0 1.5 1.5H11"/>
  </svg>
);

const ICON_CHECK = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 8l4 4 8-8"/>
  </svg>
);

const ICON_ARROW = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

// Encuentra el email a copiar en el CTA (primer item con copyOnClick: true)
const ctaEmail = DATA.contact.find((c) => c.copyOnClick)?.val ?? '';

export default function Contact() {
  const ref = useReveal();
  // Tracks which item index was just copied (null = none)
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (val, index) => {
    navigator.clipboard.writeText(val).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="reveal" ref={ref}>

        <div className={styles.header}>
          <div className="section-label">Contacto</div>
          <h2 className={styles.heading}>
            ¿Tienes un proyecto<br />
            <span className={styles.accentLine}>en mente?</span>
          </h2>
          <p className={styles.subtext}>
            Estoy disponible para nuevas oportunidades, proyectos freelance o simplemente
            para hablar de tecnología. Escríbeme y te respondo en menos de 24h.
          </p>
        </div>

        <div className={styles.grid}>
          {DATA.contact.map((c, i) => {
            const isCopied = copiedIndex === i;
            const isInteractive = c.copyOnClick || c.url;

            const inner = (
              <>
                <div className={styles.cardIcon}>
                  {ICONS[c.iconType] ?? null}
                </div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>{c.label}</span>
                  <span className={styles.cardVal}>
                    {isCopied ? '¡Copiado!' : c.val}
                  </span>
                </div>
                {isInteractive && (
                  <div className={styles.cardArrow}>
                    {c.copyOnClick
                      ? (isCopied ? ICON_CHECK : ICON_COPY)
                      : ICON_ARROW}
                  </div>
                )}
                <div className={styles.cardGlow} />
              </>
            );

            // copyOnClick → button
            if (c.copyOnClick) {
              return (
                <button
                  key={i}
                  className={`${styles.card} ${isCopied ? styles.cardCopied : ''}`}
                  onClick={() => handleCopy(c.val, i)}
                >
                  {inner}
                </button>
              );
            }

            // tiene url → enlace externo
            if (c.url) {
              return (
                <a key={i} href={c.url} className={styles.card} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              );
            }

            // sin url ni copy → estático
            return (
              <div key={i} className={`${styles.card} ${styles.cardStatic}`}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <button
            className="btn btn-primary"
            onClick={() => handleCopy(ctaEmail, -1)}
          >
            {copiedIndex === -1 ? '¡Email copiado! ✓' : 'Copiar email →'}
          </button>
          <a
            href={DATA.contact.find((c) => c.iconType === 'linkedin')?.url ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            Conectar en LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}