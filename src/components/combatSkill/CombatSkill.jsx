import styles from './CombatSkill.module.scss';
import { observer } from "mobx-react-lite";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getInputValue } from "../../utils/common";
import { useEffect } from "react";


function CombatSkill({store}) {
    const [combatSkillStorage, setCombatSkillStorage] = useLocalStorage(`combatSkill`);
    const combatSkill = store.combatSkill;

    useEffect(() => {
        if (combatSkillStorage) store.updateCombatSkill(combatSkillStorage);
    }, []);

    const handleChangeSkill = (evt) => {
        const value = Number(evt.target.value);

        store.updateCombatSkill(value);
        setCombatSkillStorage(value);
    };

    return (
        <section className={styles.skill}>
            <label className={styles.label}>
                Боевой навык <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeSkill} value={getInputValue(combatSkill)} type="number" placeholder="0" min="0"/></span> к параметрам
            </label>
        </section>
    );
}

export default observer(CombatSkill);
