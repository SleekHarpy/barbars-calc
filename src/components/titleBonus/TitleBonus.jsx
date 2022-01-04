import styles from './TitleBonus.module.scss';
import { observer } from "mobx-react-lite";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getInputValue, isEmptyParams } from "../../utils/common";
import { useEffect } from "react";


function TitleBonus({store}) {
    const [titleBonusStorage, setTitleBonusStorage, removeTitleBonusStorage] = useLocalStorage(`titleBonusStorage`);
    const titleBonus = store.titleBonuses;

    useEffect(() => {
        if (titleBonusStorage) store.updateBonuses({...titleBonusStorage});
    }, []);

    const handleChangeBonus = (evt) => {
        const name = evt.target.name;
        const value = Number(evt.target.value);
        const newTitleBonuses = {...titleBonus, [name]: value}

        store.updateBonuses({...newTitleBonuses});
        !isEmptyParams(newTitleBonuses) ? setTitleBonusStorage({...newTitleBonuses}) : removeTitleBonusStorage();
    };

    return (
        <section className={styles.titleBonus}>
            <h2 className={styles.title}>Бонус титулов</h2>
            <ul className={styles.list}>
                <li>
                    +<input className={styles.field} onChange={handleChangeBonus} value={getInputValue(titleBonus.strength)} type="number" id="bonusStrength" name="strength" placeholder="0" min="0"/>
                    <label className={styles.label} htmlFor="bonusStrength"> силы</label>
                </li>
                <li>
                    +<input className={styles.field} onChange={handleChangeBonus} value={getInputValue(titleBonus.health)} type="number" id="bonusHealth" name="health" placeholder="0" min="0"/>
                    <label className={styles.label} htmlFor="bonusHealth"> здоровья</label>
                </li>
                <li>
                    +<input className={styles.field} onChange={handleChangeBonus} value={getInputValue(titleBonus.shield)} type="number" id="bonusShield" name="shield" placeholder="0" min="0"/>
                    <label className={styles.label} htmlFor="bonusShield"> брони</label>
                </li>
                <li>
                    +<input className={styles.field} onChange={handleChangeBonus} value={getInputValue(titleBonus.energy)} type="number" id="bonusEnergy" name="energy" placeholder="0" min="0"/>
                    <label className={styles.label} htmlFor="bonusEnergy"> энергии</label>
                </li>
                <li>
                    +<input className={styles.field} onChange={handleChangeBonus} value={getInputValue(titleBonus.regeneration)} type="number" id="bonusRegeneration" name="regeneration" placeholder="0" min="0"/>
                    <label className={styles.label} htmlFor="bonusRegeneration"> регенерации</label>
                </li>
            </ul>
        </section>
    );
}

export default observer(TitleBonus);
