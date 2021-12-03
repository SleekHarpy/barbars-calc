import styles from './Premium.module.scss';
import {useState} from "react";


function Premium({store}) {
    const [isPremium, setIsPremium] = useState(false);

    const handleChangeCheckbox = (evt) => {
        const isChecked = evt.target.checked;

        setIsPremium(isChecked);
        store.updatePremium(isChecked);
    };

    return (
        <section className={styles.premium}>
            <input className={`${styles.checkbox} visually-hidden`} onChange={handleChangeCheckbox} type="checkbox" id="premiumCheckbox"/>
            <label className={styles.label} htmlFor="premiumCheckbox">Премиум</label>
            { isPremium && <span><span className="value"> +100</span> к параметрам</span> }
        </section>
    );
}

export default Premium;
