import styles from './Citadel.module.scss';
import { getInputValue } from '../../utils/common';
import { observer } from 'mobx-react-lite';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useEffect } from 'react';


function Citadel({store}) {
    const [pedestalStorage, setPedestalStorage, removePedestalStorage] = useLocalStorage(`pedestal`);
    const [armoryStorage, setArmoryStorage, removeArmoryStorage] = useLocalStorage(`armory`);
    const pedestal = store.pedestal;
    const armory = store.armory;
    const resetStatus = store.isReset;

    useEffect(() => {
        if (resetStatus) reset();
    }, [resetStatus]);

    useEffect(() => {
        if (pedestalStorage) store.updatePedestal(pedestalStorage);
        if (armoryStorage) store.updateArmory(armoryStorage);
    }, []);

    const handleChangeField = (evt) => {
        const value = Number(evt.target.value);
        const name = evt.target.name;

        switch (name) {
            case `pedestal`:
                store.updatePedestal(value);
                value > 0 ? setPedestalStorage(value) : removePedestalStorage();
                break;
            case `armory`:
                store.updateArmory(value);
                value > 0 ? setArmoryStorage(value) : removeArmoryStorage();
                break;
            default:
                throw new Error();
        }
    };

    const reset = () => {
        store.updatePedestal(0);
        store.updateArmory(0);
        removePedestalStorage();
        removeArmoryStorage();
    };

    return (
        <section className={styles.citadel}>
            <h2 className={styles.title}>Цитадель клана</h2>

            <ul className={styles.list}>
                <li>
                    <label className={styles.label}>
                        Постамент алтаря <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeField} value={getInputValue(pedestal)} name="pedestal" type="number" placeholder="0" min="0"/></span> к параметрам
                    </label>
                </li>
                <li>
                    <label className={styles.label}>
                        Оружейная <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeField} value={getInputValue(armory)} name="armory" type="number" placeholder="0" min="0"/></span> к параметрам
                    </label>
                </li>
            </ul>
        </section>
    );
}

export default observer(Citadel);
