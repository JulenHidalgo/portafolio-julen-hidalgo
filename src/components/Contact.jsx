import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { DATA } from '../data';
import styles from './Contact.module.css';

// Mapa de iconos SVG — añade claves aquí si amplías data.js
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

// Estado inicial del formulario
const EMPTY_FORM = { name: '', email: '', message: '' };

export default function Contact() {
  const ref = useReveal();

  // Copy email
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Contact form
  const [form, setForm] = useState(EMPTY_FORM);
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
  const [formError, setFormError] = useState('');

  // ── Copy email via /api/email ──────────────────────
  const handleCopyEmail = async (index) => {
    try {
      const res = await fetch('/api/email');
      const { email, error } = await res.json();
      if (error || !email) throw new Error(error ?? 'Sin respuesta');
      await navigator.clipboard.writeText(email);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback: abre cliente de correo sin exponer la dirección
      window.location.href = '/api/email';
    }
  };

  // ── Contact form via /api/contact ─────────────────
  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setFormError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? 'Error desconocido');

      setFormStatus('success');
      setForm(EMPTY_FORM);
    } catch (err) {
      setFormStatus('error');
      setFormError(err.message);
    }
  };

  const linkedinUrl = DATA.contact.find((c) => c.iconType === 'linkedin')?.url ?? '#';

  return (
    <section id="contacto" className={styles.section}>
      <div className="reveal" ref={ref}>

        {/* ── Header ── */}
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

        {/* ── Layout: cards + formulario ── */}
        <div className={styles.layout}>

          {/* Contact cards */}
          <div className={styles.cards}>
            {DATA.contact.map((c, i) => {
              const isCopied = copiedIndex === i;
              const isInteractive = c.copyOnClick || c.url;

              const inner = (
                <>
                  <div className={styles.cardIcon}>{ICONS[c.iconType] ?? null}</div>
                  <div className={styles.cardText}>
                    <span className={styles.cardLabel}>{c.label}</span>
                    <span className={styles.cardVal}>{isCopied ? '¡Copiado!' : c.val}</span>
                  </div>
                  {isInteractive && (
                    <div className={styles.cardArrow}>
                      {c.copyOnClick ? (isCopied ? ICON_CHECK : ICON_COPY) : ICON_ARROW}
                    </div>
                  )}
                  <div className={styles.cardGlow} />
                </>
              );

              if (c.copyOnClick) {
                return (
                  <button
                    key={i}
                    className={`${styles.card} ${isCopied ? styles.cardCopied : ''}`}
                    onClick={() => handleCopyEmail(i)}
                  >
                    {inner}
                  </button>
                );
              }

              if (c.url) {
                return (
                  <a key={i} href={c.url} className={styles.card} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                );
              }

              return (
                <div key={i} className={`${styles.card} ${styles.cardStatic}`}>
                  {inner}
                </div>
              );
            })}

            <div className={styles.ctaRow}>
              <button
                className="btn btn-primary"
                onClick={() => handleCopyEmail(-1)}
              >
                {copiedIndex === -1 ? '¡Email copiado! ✓' : 'Copiar email →'}
              </button>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className={styles.formWrap}>
            {formStatus === 'success' ? (
              <div className={styles.successMsg}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <p>¡Mensaje enviado! Te respondo pronto.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.formInput}
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                    maxLength={100}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.formInput}
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                    maxLength={200}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formTextarea}
                    placeholder="Cuéntame tu proyecto..."
                    value={form.message}
                    onChange={handleFormChange}
                    required
                    maxLength={2000}
                    rows={4}
                  />
                </div>
                {formStatus === 'error' && (
                  <p className={styles.errorMsg}>{formError}</p>
                )}
                <button
                  type="submit"
                  className={`btn btn-primary ${styles.formBtn}`}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}