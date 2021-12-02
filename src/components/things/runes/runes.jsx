import styles from './runes.module.scss';
import {useEffect, useState} from "react";
import { getInputValue } from "../../../utils/common";


const paramNames = {
    strength: `силы`,
    health: `здоровья`,
    energy: `энергии`,
    regeneration: `регенерации`,
    shield: `брони`,
};

function Runes({onChangeRunes, thing, resetStatus}) {
    const [runes, setRunes] = useState({
        param: ``,
        value: 0,
    });

    useEffect(() => {
        if (runes.param !== ``) onChangeRunes(thing.thing, { [runes.param]: runes.value });
        else onChangeRunes(thing.thing, { [runes.param]: 0 });
    }, [runes]);

    useEffect(() => {
        // console.log(resetStatus);
        if (resetStatus) {
            setRunes({param: ``, value: 0})
            onChangeRunes(thing.thing, { [runes.param]: 0 });
        }
    }, [resetStatus]);




    const handleChangeRunes = (evt) => {
        const value = evt.target.value;

        if (value !== ``) {
            setRunes({...runes, param: value});
        } else {
            setRunes({...runes, param: ``});
        }
    };

    const handleChangeValueRunes = (evt) => {
        const value = Number(evt.target.value);

        if (value !== 0) {
            setRunes({...runes, value: value});
        } else {
            setRunes({...runes, value: 0});
        }
    };

    return (
        <div className={styles.runes}>
            Руны: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${runes.param !== `` ? styles.fieldActive : null}`} onChange={handleChangeValueRunes} value={getInputValue(runes.value)} type="number" placeholder="0"/> </span>
            <select className={styles.select} onChange={handleChangeRunes} value={runes.param}>
                <option value="">без бонуса</option>
                { thing && thing.runes.map((item) =>
                    <option value={item} key={item}>{paramNames[item]}</option>
                )}
            </select>
        </div>
    );
}

export default Runes;
