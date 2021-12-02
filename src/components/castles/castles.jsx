import styles from './castles.module.scss';
import {observer} from "mobx-react-lite";
import Castle from "./castle/castle";


const castles = [
    {
        id: 0,
        name: `Голова дракона`,
        bonus: `strength`,
        bonusLabel: `силы`,
    },
    {
        id: 1,
        name: `Сердце титана`,
        bonus: `health`,
        bonusLabel: `здоровья`,
    },
    {
        id: 2,
        name: `Гроза миров`,
        bonus: `energy`,
        bonusLabel: `энергии`,
    },
    {
        id: 3,
        name: `Крепость духа`,
        bonus: `shield`,
        bonusLabel: `брони`,
    },
    {
        id: 4,
        name: `Исцеление предков`,
        bonus: `regeneration`,
        bonusLabel: `регенерации`,
    },
];

function Castles({store}) {
    return (
        <section className={styles.castles}>
            <h2 className={styles.title}>Бонусы замков</h2>
            <ul className={styles.list}>
                { castles.map((castle) => (
                    <Castle store={store} castle={castle} key={castle.id} />
                )) }
            </ul>
            <p className={styles.text}><span className={styles.bonusValue}>+10%</span> от суммы всех твоих чар</p>
            <p className={styles.text}>Твоя сумма чар: <span className={styles.bonusValue}>{store.sumCharms}</span></p>
        </section>
    );
}

export default observer(Castles);
