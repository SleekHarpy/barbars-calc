import styles from './Level.module.scss';
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { observer } from "mobx-react-lite";
import { getInputValue } from "../../utils/common";

function Level({store}) {
    const [levelStorage, setLevelStorage] = useLocalStorage(`level`, 1);
    const level = store.level;

    useEffect(() => {
        if (levelStorage) store.updateLevel(levelStorage);
    }, []);

    const handleChangeLevel = (evt) => {
        const level = Number(evt.target.value);

        store.updateLevel(level);
        setLevelStorage(level);
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
