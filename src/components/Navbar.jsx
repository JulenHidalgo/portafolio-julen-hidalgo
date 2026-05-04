import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        JH<span className={styles.dot}>.</span>
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.link} onClick={handleLinkClick}>
            {l.label}
          </a>
        ))}
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
