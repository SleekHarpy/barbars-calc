import styles from './HeroCharacteristics.module.scss';
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {autorun} from "mobx";


const LEVEL_BONUS = 10;

const paramNames = [`strength`, `health`, `shield`, `energy`, `regeneration`];

function HeroCharacteristics({store}) {
    const [params, setParams] = useState({
        strength: 0,
        health: 0,
        shield: 0,
        energy: 0,
        regeneration: 0,
    });
    const [totalSum, setTotalSum] = useState(0);

    const level = store.level;
    const cups = store.cups;
    const titleBonuses = store.titleBonuses;
    const abilities = store.abilities;
    const altar = store.altar;
    const castles = store.castleBonuses;
    const mastery = store.mastery;
    const quenching = store.quenching;
    const sumThings = store.sumThings;
    const charms = store.charms;
    const runes = store.runes;
    const combatSkill = store.combatSkill;
    const premium = store.premium;

    useEffect(() => autorun(() => {
        countSum();
    }), [level, altar, quenching, sumThings, charms, cups, runes, combatSkill, premium]);

    useEffect(() => {
        const totalSum = params.strength + params.health + params.energy + params.regeneration + params.shield;

        setTotalSum(totalSum);
    }, [params]);

    const handleChangeLevel = (evt) => {
        const level = Number(evt.target.value);

        store.updateLevel(level);
    };

    const countSum = () => {
        const params = {};

        paramNames.forEach((param) => {
            const levelBonus = LEVEL_BONUS * level;

            const sumParam =  sumThings[param] + levelBonus;

            const sumCharms = sumParam + charms[param];

            const castle = sumCharms + castles[param];

            const sumAltarMaster = Math.ceil((castle / 100 * (altar + mastery.master)) + castle);

            const quenchingSum = LEVEL_BONUS * quenching;

            const cupsSum = quenchingSum + cups;

            const runesSum = cupsSum + runes[param];

            const combatSkillSum = runesSum + combatSkill;

            const premiumSum = combatSkillSum + premium;

            params[param] = sumAltarMaster + titleBonuses[param] + abilities[param] + mastery[param] + premiumSum;
        });

        setParams({...params});
    };

    return (
        <section className={styles.heroCharacteristics}>
            <div className={styles.levelWrap}>
                <input
                    className={styles.field}
                    id="level"
                    type="number"
                    min="1"
                    defaultValue={level}
                    onChange={handleChangeLevel}
                    placeholder="1"
                />
                <label htmlFor="level"> уровень</label>
            </div>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.itemStrength}`}>
                    сила: <span className={altar > 0 ? styles.value : null}>{params.strength}</span>
                </li>
                <li className={`${styles.item} ${styles.itemHealth}`}>
                    здоровье: <span className={altar > 0 ? styles.value : null}>{params.health}</span>
                </li>
                <li className={`${styles.item} ${styles.itemEnergy}`}>
                    энергия: <span className={altar > 0 ? styles.value : null}>{params.energy}</span>
                </li>
                <li className={`${styles.item} ${styles.itemRegeneration}`}>
                    регенерация: <span className={altar > 0 ? styles.value : null}>{params.regeneration}</span>
                </li>
                <li className={`${styles.item} ${styles.itemShield}`}>
                    броня: <span className={altar > 0 ? styles.value : null}>{params.shield}</span>
                </li>
                <li className={styles.item}>
                    сумма: <span className={altar > 0 ? styles.value : null}>{totalSum}</span>
                </li>
            </ul>
        </section>
    );
}

export default observer(HeroCharacteristics);
