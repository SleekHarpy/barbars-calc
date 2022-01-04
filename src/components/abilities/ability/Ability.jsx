import styles from "../Abilities.module.scss";
import defaultIcon from "../../../assets/images/quality/star-default.png";
import regularIcon from "../../../assets/images/quality/star-regular.png";
import unusualIcon from "../../../assets/images/quality/star-unusual.png";
import rareIcon from "../../../assets/images/quality/star-rare.png";
import epicIcon from "../../../assets/images/quality/star-epic.png";
import legendIcon from "../../../assets/images/quality/star-legend.png";
import mifIcon from "../../../assets/images/quality/star-mif.png";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { isEmptyParams } from "../../../utils/common";


const QualityIcon = ({bonus}) => {
    let icon = defaultIcon;

    if (bonus) {
        switch (bonus) {
            case 10: icon = regularIcon;
                break;
            case 50: icon = unusualIcon;
                break;
            case 100: icon = rareIcon;
                break;
            case 150: icon = epicIcon;
                break;
            case 200: icon = legendIcon;
                break;
            case 300: icon = mifIcon;
                break;
            default: icon = defaultIcon;
        }
    }

    return <img src={icon} width="12" height="12" alt="Бонус"/>
};

function Ability({ability, onChangeAbility, store}) {
    const [abilityStorage, setAbilityStorage, removeAbilityStorage] = useLocalStorage(`abilities`, 0);
    const abilities = store.abilities;
    const abilityItem = store.abilities[ability.param];

    useEffect(() => {
        if (abilityStorage[ability.param]) onChangeAbility(ability.param, abilityStorage[ability.param]);
    }, []);

    const handleSelectBonus = (evt) => {
        const value = Number(evt.target.value);
        const newAbilities = {...abilities, [ability.param]: value}

        if (value !== 0) {
            onChangeAbility(ability.param, value);
            setAbilityStorage({...newAbilities});
        } else {
            onChangeAbility(ability.param, 0);
            isEmptyParams(newAbilities) ? removeAbilityStorage() : setAbilityStorage({...newAbilities});

        }
    };

    return (
        <div className={styles.item}>
            <img className={styles.img} src={ability.icon} width="48" height="48" alt={`Умение ${ability.title}`}/>
            <div>
                <h3 className={styles.itemTitle}>{ability.title}</h3>
                <div className={styles.selectWrap}>
                    <QualityIcon bonus={abilityItem} />
                    <select className={styles.select} value={abilityItem} onChange={handleSelectBonus} name="bonuses">
                        <option value="0">без бонуса</option>
                        <option value="10">обычный</option>
                        <option value="50">необычный</option>
                        <option value="100">редкий</option>
                        <option value="150">эпический</option>
                        <option value="200">легендарный</option>
                        <option value="300">мифический</option>
                    </select>
                </div>
                { abilityItem > 0 &&
                    <p className={styles.bonusWrap}>
                        <span className={styles.bonus}>бонус:</span> <span className={styles.bonusValue}>+{abilityItem}</span> {ability.bonus}
                    </p>
                }
            </div>
        </div>
    );
}

export default observer(Ability);
