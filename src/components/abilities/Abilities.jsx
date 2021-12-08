import styles from './Abilities.module.scss';
import Ability from "./ability/Ability";
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

function Abilities({store}) {
    const handleChangeBonus = (name, value) => {
        store.updateAbilities(name, value);
    };

    return (
        <section className={styles.abilities}>
            <h2 className={styles.title}>Умения</h2>
            <div className={styles.list}>
                <Ability ability={bers} onChangeAbility={handleChangeBonus} store={store} />
                <Ability ability={reflection} onChangeAbility={handleChangeBonus} store={store} />
                <Ability ability={stone} onChangeAbility={handleChangeBonus} store={store} />
                <Ability ability={energy} onChangeAbility={handleChangeBonus} store={store} />
            </div>
        </section>
    );
}

export default Abilities;
