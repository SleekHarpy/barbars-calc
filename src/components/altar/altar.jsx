import styles from './altar.module.scss';
import {observer} from "mobx-react-lite";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";
import { getInputValue } from "../../utils/common";

function Altar({store}) {
    const [altarStorage, setAltarStorage, removeAltarStorage] = useLocalStorage(`altar`, 0);
    const altar = store.altar;

    useEffect(() => {
        if (altarStorage) store.updateAltar(altarStorage);
    }, []);

    const handleChangeAltar = (evt) => {
      const value = Number(evt.target.value);

      store.updateAltar(value);
      value > 0 ? setAltarStorage(value) : removeAltarStorage();
    };

    return (
        <section className={styles.altar}>
            <label className={styles.label}>
                Алтарь <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeAltar} value={getInputValue(altar)} type="number" placeholder="0" min="0"/>%</span>
            </label>
        </section>
    );
}

export default observer(Altar);
