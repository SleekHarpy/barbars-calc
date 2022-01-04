import styles from './quenching.module.scss';
import useLocalStorage from "../../hooks/useLocalStorage";
import { getInputValue } from "../../utils/common";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";


function Quenching({store}) {
    const [quenchingStorage, setQuenchingStorage, removeQuenchingStorage] = useLocalStorage(`quenching`);
    const quenching = store.quenching;

    useEffect(() => {
        if (quenchingStorage) store.quenchingUpdate(quenchingStorage);
    }, []);

    const handleChangeQuenching = (evt) => {
        const value = Number(evt.target.value);

        store.quenchingUpdate(value);
        value > 0 ? setQuenchingStorage(value) : removeQuenchingStorage();
    };

    return (
        <section className={styles.quenching}>
            <label className={styles.label}>
                Закалка <input className={styles.field} onChange={handleChangeQuenching} value={getInputValue(quenching)} type="number" placeholder="0" min="0" max="10"/> уровень
            </label>
        </section>
    );
}

export default observer(Quenching);
