import styles from './HeroCharacteristics.module.scss';
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {autorun} from "mobx";
import { formatNumber } from '../../utils/common';


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
    const pedestal = store.pedestal;
    const armory = store.armory;

    useEffect(() => autorun(() => {
        countSum();
    }), [level, altar, mastery, quenching, sumThings, charms, cups, titleBonuses, runes, combatSkill, premium, pedestal, armory]);

    useEffect(() => {
        const totalSum = params.strength + params.health + params.energy + params.regeneration + params.shield;

        setTotalSum(totalSum);
    }, [params]);



    const countSum = () => {
        const params = {};

        paramNames.forEach((param) => {
            const levelBonus = LEVEL_BONUS * level;

            const quenchingSum = LEVEL_BONUS * quenching;

            const sumParam =  sumThings[param] + levelBonus;

            const sumCharms = sumParam + charms[param];

            const sumAltarMaster = Math.floor((sumCharms / 100 * (altar + mastery.master)) + sumCharms);

            const sumMasterParam = (mastery[param] / 100 * mastery.master) + mastery[param];

            params[param] = sumAltarMaster
                + cups
                + titleBonuses[param]
                + abilities[param]
                + castles[param]
                + sumMasterParam
                + quenchingSum
                + combatSkill
                + premium
                + pedestal
                + armory
                + runes[param];
        });

        setParams({...params});
    };

    return (
        <section className={styles.heroCharacteristics}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.itemStrength}`}>
                    сила: <span className={altar > 0 ? styles.value : null}>{formatNumber(params.strength)}</span>
                </li>
                <li className={`${styles.item} ${styles.itemHealth}`}>
                    здоровье: <span className={altar > 0 ? styles.value : null}>{formatNumber(params.health)}</span>
                </li>
                <li className={`${styles.item} ${styles.itemEnergy}`}>
                    энергия: <span className={altar > 0 ? styles.value : null}>{formatNumber(params.energy)}</span>
                </li>
                <li className={`${styles.item} ${styles.itemRegeneration}`}>
                    регенерация: <span className={altar > 0 ? styles.value : null}>{formatNumber(params.regeneration)}</span>
                </li>
                <li className={`${styles.item} ${styles.itemShield}`}>
                    броня: <span className={altar > 0 ? styles.value : null}>{formatNumber(params.shield)}</span>
                </li>
                <li className={styles.item}>
                    сумма: <span className={altar > 0 ? styles.value : null}>{formatNumber(totalSum)}</span>
                </li>
            </ul>
        </section>
    );
}

export default observer(HeroCharacteristics);
