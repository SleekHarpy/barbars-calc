import styles from './Cups.module.scss';
import useLocalStorage from "../../hooks/useLocalStorage";
import { getInputValue } from "../../utils/common";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";


function Cups({store}) {
    const [cupsStorage, setCupStorage] = useLocalStorage(`cups`, 0);
    const cups = store.cups;

    useEffect(() => {
        if (cupsStorage) store.updateCups(cupsStorage);
    })

    const handleChangeCups = (evt) => {
        const value = Number(evt.target.value);

        store.updateCups(value);
        setCupStorage(value);
    };

    return (
        <section className={styles.cups}>
            <label className={styles.label}>
                Бонус кубков <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeCups} value={getInputValue(cups)} type="number" placeholder="0" min="0"/></span> к параметрам
            </label>
        </section>
    );
}

export default observer(Cups);
