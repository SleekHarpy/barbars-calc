import styles from './HeroCharacteristics.module.scss';
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {autorun} from "mobx";


const LEVEL_BONUS = 10;

function HeroCharacteristics({store}) {
    const [level, setLevel] = useState(1);
    const [strength, setStrength] = useState(0);
    const [health, setHealth] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [regeneration, setRegeneration] = useState(0);
    const [shield, setShield] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

    const titleBonuses = store.titleBonuses;
    const abilities = store.abilities;

    useEffect(() => {
        const totalSum = strength + health + energy + regeneration + shield;

        setTotalSum(totalSum);
    }, [strength, health, energy, regeneration, shield]);

    const handleChangeLevel = (evt) => {
        const level = Number(evt.target.value);

        setLevel(level);
    };

    useEffect(() => {
        countSum();
    }, [level]);

    useEffect(() => autorun(() => {
        countSum();
    }))

    const countSum = () => {
        const levelBonus = LEVEL_BONUS * level;
        const sumStrength = levelBonus + titleBonuses.strength + abilities.strength;
        const sumHealth = levelBonus + titleBonuses.health + abilities.health;
        const sumEnergy = levelBonus + titleBonuses.energy + abilities.energy;
        const sumRegeneration = levelBonus + titleBonuses.regeneration;
        const sumShield = levelBonus + titleBonuses.shield + abilities.shield;

        setStrength(sumStrength);
        setHealth(sumHealth);
        setEnergy(sumEnergy);
        setRegeneration(sumRegeneration);
        setShield(sumShield);
    };

    return (
        <section className={styles.heroCharacteristics}>
            <div className={styles.levelWrap}>
                <input
                    className={styles.field}
                    id="level"
                    type="number"
                    min="1"
                    value={level}
                    onChange={handleChangeLevel}
                />
                <label htmlFor="level"> уровень</label>
            </div>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.itemStrength}`}>
                    сила: <span className={styles.value}>{strength}</span>
                </li>
                <li className={`${styles.item} ${styles.itemHealth}`}>
                    здоровье: <span className={styles.value}>{health}</span>
                </li>
                <li className={`${styles.item} ${styles.itemEnergy}`}>
                    энергия: <span className={styles.value}>{energy}</span>
                </li>
                <li className={`${styles.item} ${styles.itemRegeneration}`}>
                    регенерация: <span className={styles.value}>{regeneration}</span>
                </li>
                <li className={`${styles.item} ${styles.itemShield}`}>
                    броня: <span className={styles.value}>{shield}</span>
                </li>
                <li className={styles.item}>
                    сумма: <span className={styles.value}>{totalSum}</span>
                </li>
            </ul>
        </section>
    );
}

export default observer(HeroCharacteristics);
