import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Mi CV</h1>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href='/' className={styles.navLink}>
              Inicio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about' className={styles.navLink}>
              Sobre mí
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/projects' className={styles.navLink}>
              Proyectos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/contact' className={styles.navLink}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
