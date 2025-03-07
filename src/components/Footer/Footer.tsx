import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        © 2025 Alejandro Abad Noriega. Todos los derechos reservados
      </p>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Image
              src='/assets/lnkdn.png'
              alt='Linkedin logo'
              width={30}
              height={30}
            />
            <Link
              href='https://www.linkedin.com/in/alejandroabadnoriega/'
              target='_blank'
              className={styles.navLink}
            >
              Linkedin
            </Link>
          </li>
          <li className={styles.navItem}>
            <Image
              src='/assets/github.svg'
              alt='GitHub logo'
              width={30}
              height={30}
              className={styles.navIcon}
            />
            <Link
              href='https://github.com/Abanoral'
              target='_blank'
              className={styles.navLink}
            >
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
