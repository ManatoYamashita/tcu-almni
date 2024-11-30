import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">知る</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">参加する</Link>
          </li>
          <li className={styles.item}>
            <Link href="">集う</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">手続き</Link>
          </li>
          <li className={styles.item}>
            <Link href="/">学ぶ</Link>
          </li>
        </ul>
      </nav>
      <p>© 東京都市大学校友会. All Rights Reserved 2024</p>
    </footer>
  );
}
