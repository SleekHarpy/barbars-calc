import styles from './altar.module.scss';
import {observer} from "mobx-react-lite";

function Altar({store}) {
    const handleChangeAltar = (evt) => {
      const value = Number(evt.target.value);

      store.updateAltar(value);
    }
    return (
        <section className={styles.altar}>
            <label className={styles.label}>
                Алтарь <span className={styles.fieldWrap}>+<input className={styles.field} onChange={handleChangeAltar} type="number" placeholder="0" min="0"/>%</span>
            </label>

        </section>
    );
}

export default observer(Altar);
