import styles from './mastery.module.scss';
import {observer} from "mobx-react-lite";


function Mastery({store}) {
    const handleChangeBonus = (evt) => {
        const name = evt.target.name;
        const value = Number(evt.target.value);

        store.updateMastery(name, value);
    };

    return (
        <section className={styles.mastery}>
            <h2 className={styles.title}>Мастерство</h2>
            <label className={styles.label}>
                Мастер + <input className={styles.field} onChange={handleChangeBonus} name="master" type="number" placeholder="0" min="0"/> %
            </label>

            <ul className={styles.list}>
                <li>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusStrength" name="strength" placeholder="0" min="0"/>
                    <label htmlFor="bonusStrength"> силы</label>
                </li>
                <li>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusHealth" name="health" placeholder="0" min="0"/>
                    <label htmlFor="bonusHealth"> здоровья</label>
                </li>
                <li>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusShield" name="shield" placeholder="0" min="0"/>
                    <label htmlFor="bonusShield"> брони</label>
                </li>
                <li>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusEnergy" name="energy" placeholder="0" min="0"/>
                    <label htmlFor="bonusEnergy"> энергии</label>
                </li>
                <li>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusRegeneration" name="regeneration" placeholder="0" min="0"/>
                    <label htmlFor="bonusRegeneration"> регенерации</label>
                </li>
            </ul>

        </section>
    );
}

export default observer(Mastery);
