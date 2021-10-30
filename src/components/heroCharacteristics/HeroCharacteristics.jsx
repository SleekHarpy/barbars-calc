import styles from './HeroCharacteristics.module.scss';
import {useEffect, useState} from "react";


const LEVEL_BONUS = 10;

function HeroCharacteristics({titleBonuses}) {
    const [level, setLevel] = useState(1);
    const [strength, setStrength] = useState(0);
    const [health, setHealth] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [regeneration, setRegeneration] = useState(0);
    const [shield, setShield] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

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
    }, [level, titleBonuses]);

    const countSum = () => {
        const levelBonus = LEVEL_BONUS * level;
        const sumStrength = levelBonus + titleBonuses.strength;
        const sumHealth = levelBonus + titleBonuses.health;
        const sumEnergy = levelBonus + titleBonuses.energy;
        const sumRegeneration = levelBonus + titleBonuses.regeneration;
        const sumShield = levelBonus + titleBonuses.shield;

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

export default HeroCharacteristics;
