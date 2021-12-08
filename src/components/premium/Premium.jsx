import styles from './Premium.module.scss';
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useLocalStorage from "../../hooks/useLocalStorage";


function Premium({store}) {
    const [premiumStorage, setPremiumStorage] = useLocalStorage(`premium`);
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        if (premiumStorage) {
            store.updatePremium(premiumStorage);
            setIsPremium(premiumStorage);
        }
    }, []);

    const handleChangeCheckbox = (evt) => {
        const isChecked = evt.target.checked;

        setIsPremium(isChecked);
        store.updatePremium(isChecked);
        setPremiumStorage(isChecked);
    };

    return (
        <section className={styles.premium}>
            <input className={`${styles.checkbox} visually-hidden`} onChange={handleChangeCheckbox} type="checkbox" id="premiumCheckbox" checked={isPremium} />
            <label className={styles.label} htmlFor="premiumCheckbox">Премиум</label>
            { isPremium && <span><span className="value"> +100</span> к параметрам</span> }
        </section>
    );
}

export default observer(Premium);
