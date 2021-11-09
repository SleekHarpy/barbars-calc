import styles from './quenching.module.scss';

function Quenching({store}) {
    const handleChangeQuenching = (evt) => {
        const value = Number(evt.target.value);

        store.quenchingUpdate(value);
    }
    return (
        <section className={styles.quenching}>
            <label className={styles.label}>
                Закалка <input className={styles.field} onChange={handleChangeQuenching} type="number" placeholder="0" min="0" max="10"/> уровень
            </label>
        </section>
    );
}

export default Quenching;
