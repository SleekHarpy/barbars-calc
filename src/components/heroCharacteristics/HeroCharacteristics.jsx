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
    const altar = store.altar;
    const castles = store.castleBonuses;

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

        const castleStrength = levelBonus + castles.strength;
        const castleHealth = levelBonus + castles.health;
        const castleEnergy = levelBonus + castles.energy;
        const castleRegeneration = levelBonus + castles.regeneration;
        const castleShield = levelBonus + castles.shield;

        const sumAltarStrength = (castleStrength / 100 * altar) + castleStrength;
        const sumAltarHealth = (castleHealth / 100 * altar) + castleHealth;
        const sumAltarEnergy = (castleEnergy / 100 * altar) + castleEnergy;
        const sumAltarRegeneration = (castleRegeneration / 100 * altar) + castleRegeneration;
        const sumAltarShield = (castleShield / 100 * altar) + castleShield;


        const sumStrength = sumAltarStrength + titleBonuses.strength + abilities.strength;
        const sumHealth = sumAltarHealth + titleBonuses.health + abilities.health;
        const sumEnergy = sumAltarEnergy + titleBonuses.energy + abilities.energy;
        const sumRegeneration = sumAltarRegeneration + titleBonuses.regeneration;
        const sumShield = sumAltarShield + titleBonuses.shield + abilities.shield;

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
                    сила: <span className={altar > 0 ? styles.value : null}>{strength}</span>
                </li>
                <li className={`${styles.item} ${styles.itemHealth}`}>
                    здоровье: <span className={altar > 0 ? styles.value : null}>{health}</span>
                </li>
                <li className={`${styles.item} ${styles.itemEnergy}`}>
                    энергия: <span className={altar > 0 ? styles.value : null}>{energy}</span>
                </li>
                <li className={`${styles.item} ${styles.itemRegeneration}`}>
                    регенерация: <span className={altar > 0 ? styles.value : null}>{regeneration}</span>
                </li>
                <li className={`${styles.item} ${styles.itemShield}`}>
                    броня: <span className={altar > 0 ? styles.value : null}>{shield}</span>
                </li>
                <li className={styles.item}>
                    сумма: <span className={altar > 0 ? styles.value : null}>{totalSum}</span>
                </li>
            </ul>
        </section>
    );
}

export default observer(HeroCharacteristics);
