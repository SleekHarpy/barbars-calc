import styles from "../Abilities.module.scss";
import defaultIcon from "../../../assets/images/quality/star-default.png";
import regularIcon from "../../../assets/images/quality/star-regular.png";
import unusualIcon from "../../../assets/images/quality/star-unusual.png";
import rareIcon from "../../../assets/images/quality/star-rare.png";
import epicIcon from "../../../assets/images/quality/star-epic.png";
import legendIcon from "../../../assets/images/quality/star-legend.png";
import mifIcon from "../../../assets/images/quality/star-mif.png";
import { useState } from "react";


const QualityIcon = ({bonus}) => {
    let icon = defaultIcon;

    if (bonus) {
        switch (bonus.label) {
            case `обычный`: icon = regularIcon;
                break;
            case `необычный`: icon = unusualIcon;
                break;
            case `редкий`: icon = rareIcon;
                break;
            case `эпический`: icon = epicIcon;
                break;
            case `легендарный`: icon = legendIcon;
                break;
            case `мифический`: icon = mifIcon;
                break;
            default: icon = defaultIcon;
        }
    }

    return <img src={icon} width="12" height="12" alt="Бонус"/>
};

function Ability({ability, abilities, onChangeAbility}) {
    const [selectedBonus, setSelectedBonus] = useState(null);

    const handleSelectBonus = (evt) => {
        const label = evt.target.options[evt.target.selectedIndex].text;
        const value = Number(evt.target.value);

        if (value !== 0) {
            setSelectedBonus({label: label, value: value});
            onChangeAbility({...abilities, [ability.param]: value});
        } else {
            setSelectedBonus(null);
            onChangeAbility({...abilities, [ability.param]: 0});
        }

    };

    return (
        <div className={styles.item}>
            <img className={styles.img} src={ability.icon} width="48" height="48" alt={`Умение ${ability.title}`}/>
            <div>
                <h3 className={styles.itemTitle}>{ability.title}</h3>
                <div className={styles.selectWrap}>
                    <QualityIcon bonus={selectedBonus} />
                    <select className={styles.select} onChange={handleSelectBonus} name="bonuses">
                        <option value="0">без бонуса</option>
                        <option value="10">обычный</option>
                        <option value="50">необычный</option>
                        <option value="100">редкий</option>
                        <option value="150">эпический</option>
                        <option value="200">легендарный</option>
                        <option value="300">мифический</option>
                    </select>
                </div>
                { selectedBonus &&
                    <p className={styles.bonusWrap}>
                        <span className={styles.bonus}>бонус:</span> <span className={styles.bonusValue}>+{selectedBonus.value}</span> {ability.bonus}
                    </p>
                }
            </div>
        </div>
    );
}

export default Ability;
