import styles from './PortfolioFilter.module.css';

const categories = ['All', 'Cricket', 'Football', 'Rugby', 'Motor Racing', '3D Advertising', 'Instadia', 'Brand Strategy'];

export default function PortfolioFilter() {
    return (
        <div className={styles.filterBar}>
            <div className={`${styles.filterInner} container`}>
                {categories.map((c, i) => (
                    <button key={c} className={`${styles.filterBtn} ${i === 0 ? styles.filterBtnActive : ''}`}>
                        {c}
                    </button>
                ))}
            </div>
        </div>
    );
}
