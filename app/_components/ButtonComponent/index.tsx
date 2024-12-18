import Link from 'next/link';
import styles from './index.module.css';

interface ButtonProps {
    label: string;
    href: string;
}

export default function ButtonComponent({ label, href }: ButtonProps) {
    return (
        <button className={styles.btn} type="button" >
            <Link href={href}> 
                {label}
            </Link>
        </button>
    );
}
