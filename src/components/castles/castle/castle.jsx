import styles from './castle.module.scss';
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { initialStatuses } from "../../../mock/appMocks";
import React from "react";


function Castle({store, castle}) {
    const [castleStorage, setCastleStorage, removeCastleStorage] = useLocalStorage(`castles`);
    const [isActive, setActive] = useState(false);
    const sumCharms = store.sumCharms;

    useEffect(() => {
        reset();
    }, [store.isReset]);

    useEffect(() => {
        if (castleStorage) {
            store.updateCastle(castle.bonus, castleStorage[castle.bonus]);
            setActive(castleStorage[castle.bonus]);
        }
    }, []);

    useEffect(() => {
        if (isActive) store.updateCastle(castle.bonus, true);
    }, [sumCharms]);

    const handleChangeCheckbox = (evt) => {
        const bonus = evt.target.dataset.bonus;
        const checked = evt.target.checked;
        const getStorage = JSON.parse(localStorage.getItem(`castles`));
        const newStorage = getStorage ? {...getStorage} : {...initialStatuses};

        setActive(checked);
        store.updateCastle(bonus, checked);
        setCastleStorage({...newStorage, [bonus]: checked});
    };

    const reset = () => {
        setActive(false);
        store.updateCastle(castle.bonus, false);
        removeCastleStorage();
    };

    return (
        <li className={styles.item}>
            <input className={`${styles.checkbox} visually-hidden`} onChange={handleChangeCheckbox} data-bonus={castle.bonus} type="checkbox" id={`castle-${castle.id}`} checked={isActive}/>
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
