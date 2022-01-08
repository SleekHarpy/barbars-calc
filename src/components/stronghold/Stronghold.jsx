import styles from './Stronghold.module.scss';


function Stronghold() {
    return (
        <section className={styles.stronghold}>
            <h2 className={styles.title}>Цитадель клана</h2>
            <p className={styles.desc}>В разработке. Учитывайте клановые строения при подсчёте параметров.</p>
        </section>
    );
}

export default Stronghold;
