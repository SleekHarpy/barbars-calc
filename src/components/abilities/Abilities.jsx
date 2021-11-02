import styles from './Abilities.module.scss';
import Ability from "./ability/Ability";
import { useEffect, useState } from "react";
import berserkImg from "../../assets/images/abilities/ability-berserk.png";
import reflectionImg from "../../assets/images/abilities/ability-reflection.png";
import stoneImg from "../../assets/images/abilities/ability-stone.png";
import energyImg from "../../assets/images/abilities/ability-energy.png";

const bers = {
    title: `Берсерк`,
    bonus: `силы`,
    param: `strength`,
    icon: berserkImg,
};

const reflection = {
    title: `Щит отражения`,
    param: `health`,
    bonus: `здоровья`,
    icon: reflectionImg,
};

const stone = {
    title: `Каменный щит`,
    param: `shield`,
    bonus: `брони`,
    icon: stoneImg,
};

const energy = {
    title: `Энергетический щит`,
    param: `energy`,
    bonus: `энергии`,
    icon: energyImg,
};

function Abilities({handleBonuses}) {
    const [bonuses, setBonuses] = useState({
        strength: 0,
        health: 0,
        shield: 0,
        energy: 0,
    });

    useEffect(() => {
        handleBonuses(bonuses);
    }, [bonuses]);

    return (
        <section className={styles.abilities}>
            <h2 className={styles.title}>Умения</h2>
            <div className={styles.list}>
                <Ability ability={bers} abilities={bonuses} onChangeAbility={setBonuses} />
                <Ability ability={reflection} abilities={bonuses} onChangeAbility={setBonuses} />
                <Ability ability={stone} abilities={bonuses} onChangeAbility={setBonuses} />
                <Ability ability={energy} abilities={bonuses} onChangeAbility={setBonuses} />
            </div>
        </section>
    );
}

export default Abilities;
