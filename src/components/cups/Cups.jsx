import styles from './Cups.module.scss';


function Cups({store}) {
    const handleChangeCups = (evt) => {
        const value = Number(evt.target.value);

        store.updateCups(value);
    };

    return (
        <section className={styles.cups}>
            <label className={styles.label}>
                Бонус кубков <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeCups} type="number" placeholder="0" min="0"/></span> к параметрам
            </label>
        </section>
    );
}

export default Cups;
