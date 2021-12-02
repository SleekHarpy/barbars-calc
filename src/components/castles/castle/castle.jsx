import styles from './castle.module.scss';
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";


function Castle({store, castle}) {
    const [isActive, setActive] = useState(false);
    const [bonusName, setBonusName] = useState(``);
    const sumCharms = store.sumCharms;

    useEffect(() => {
        if (isActive) store.updateCastle(bonusName, true);
    }, [sumCharms]);

    const handleChangeCheckbox = (evt) => {
        const bonus = evt.target.dataset.bonus;
        const checked = evt.target.checked;

        setActive(checked);
        setBonusName(bonus);
        store.updateCastle(bonus, checked);
    }

    return (
        <li className={styles.item}>
            <input className={`${styles.checkbox} visually-hidden`} onChange={handleChangeCheckbox} data-bonus={castle.bonus} type="checkbox" id={`castle-${castle.id}`}/>
            <label className={styles.label} htmlFor={`castle-${castle.id}`}>{castle.name}</label>
            { isActive &&
                <p className={styles.bonusWrap}>
                    <span className={styles.bonus}>бонус:</span> <span className={styles.bonusValue}>+{store.castleBonuses[castle.bonus]}</span> {castle.bonusLabel}
                </p>
            }
        </li>
    );
}

export default observer(Castle);
