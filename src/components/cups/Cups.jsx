import styles from './Cups.module.scss';


function Cups({store}) {
    const handleChangeCups = (evt) => {
        const value = Number(evt.target.value);

        store.updateCups(value);
    };

    return (
        <section className={styles.cups}>
            <label className={styles.label}>
                Бонус кубков +<input className={styles.field} onChange={handleChangeCups} type="number" placeholder="0" min="0"/> ко всем параметрам
            </label>
        </section>
    );
}

export default Cups;
