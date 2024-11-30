import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/tcuarmni-logo.jpg"
          alt="SIMPLE"
          className={styles.logo}
          width={400}
          height={100}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
