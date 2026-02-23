import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary', // primary, ghost, white, outline
    className = '',
    type = 'button',
}) {
    const btnClass = `${styles.btn} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={btnClass} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
}
