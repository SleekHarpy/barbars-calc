import styles from './Level.module.scss';
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { observer } from "mobx-react-lite";
import { getInputValue } from "../../utils/common";


function Level({store}) {
    const [levelStorage, setLevelStorage, removeLevelStorage] = useLocalStorage(`level`, 1);
    const level = store.level;
    const resetStatus = store.isReset;

    useEffect(() => {
        if (resetStatus) reset();
    }, [resetStatus]);

    useEffect(() => {
        if (levelStorage) store.updateLevel(levelStorage);
    }, []);

    const handleChangeLevel = (evt) => {
        const level = Number(evt.target.value);

        store.updateLevel(level);
        level > 0 ? setLevelStorage(level) : removeLevelStorage();
    };

    const reset = () => {
        store.updateLevel(1);
        removeLevelStorage();
    };

    return (
        <section className={styles.levelWrap}>
            <label className={styles.label} htmlFor="level">Уровень персонажа </label>
            <input
                className={styles.field}
                id="level"
                type="number"
                min="1"
                value={getInputValue(level)}
                onChange={handleChangeLevel}
                placeholder="1"
            />
        </section>
    );
}

export default observer(Level);
