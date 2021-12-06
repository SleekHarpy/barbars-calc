import styles from './CombatSkill.module.scss';


function CombatSkill({store}) {
    const handleChangeSkill = (evt) => {
        const value = Number(evt.target.value);

        store.updateCombatSkill(value);
    };

    return (
        <section className={styles.skill}>
            <label className={styles.label}>
                Боевой навык <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeSkill} type="number" placeholder="0" min="0"/></span> к параметрам
            </label>
        </section>
    );
}

export default CombatSkill;
