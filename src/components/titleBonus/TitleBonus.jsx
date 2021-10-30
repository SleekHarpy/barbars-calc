import styles from './TitleBonus.module.scss';
import {useEffect, useState} from "react";

function TitleBonus({handleBonuses}) {
    const [bonuses, setBonuses] = useState({
        strength: 0,
        health: 0,
        shield: 0,
        energy: 0,
        regeneration: 0,
    });

    useEffect(() => {
        handleBonuses(bonuses);
    }, [bonuses]);

    const handleChangeBonus = (evt) => {
        const name = evt.target.name;
        const value = Number(evt.target.value);

        setBonuses({...bonuses, [name]: value});
    };

    return (
        <section className={styles.titleBonus}>
            <h2 className={styles.title}>Бонус титулов</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusStrength" name="strength" placeholder="0" min="0"/>
                    <label htmlFor="bonusStrength"> силы</label>
                </li>
                <li className={styles.item}>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusHealth" name="health" placeholder="0" min="0"/>
                    <label htmlFor="bonusHealth"> здоровья</label>
                </li>
                <li className={styles.item}>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusShield" name="shield" placeholder="0" min="0"/>
                    <label htmlFor="bonusShield"> брони</label>
                </li>
                <li className={styles.item}>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusEnergy" name="energy" placeholder="0" min="0"/>
                    <label htmlFor="bonusEnergy"> энергии</label>
                </li>
                <li className={styles.item}>
                    + <input className={styles.field} onChange={handleChangeBonus} type="number" id="bonusRegeneration" name="regeneration" placeholder="0" min="0"/>
                    <label htmlFor="bonusRegeneration"> регенерации</label>
                </li>
            </ul>
        </section>
    );
}

export default TitleBonus;
