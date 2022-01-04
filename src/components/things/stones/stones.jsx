import styles from './stones.module.scss';
import { useEffect, useState } from "react";
import { getInputValue } from "../../../utils/common";
import useLocalStorage from "../../../hooks/useLocalStorage";


const paramNames = {
    strength: `силы`,
    health: `здоровья`,
    energy: `энергии`,
    regeneration: `регенерации`,
    shield: `брони`,
};

const initialState = {
    strength: 0,
    health: 0,
    shield: 0,
    energy: 0,
    regeneration: 0,
};

function Stones({onChangeStone, thing, params, thingType}) {
    const [thingStorage, , , updateThingStorage] = useLocalStorage(thingType);
    const [stones, setStones] = useState([
        { id: 0, param: ``, percent: 0, },
        { id: 1, param: ``, percent: 0, },
        { id: 2, param: ``, percent: 0, },
        { id: 3, param: ``, percent: 0, },
        { id: 4, param: ``, percent: 0, },
    ]);
    const [sumStones, setSumStones] = useState({...initialState});

    useEffect(() => {
        setStones([
            { id: 0, param: ``, percent: 0, },
            { id: 1, param: ``, percent: 0, },
            { id: 2, param: ``, percent: 0, },
            { id: 3, param: ``, percent: 0, },
            { id: 4, param: ``, percent: 0, },
        ]);
        setSumStones({...initialState});
        onChangeStone({...initialState});
    }, [thing]);

    useEffect(() => {
        if (thingStorage?.stones) {
            setStones([...thingStorage.stones]);
        }
    }, []);

    useEffect(() => {
        let sum = {...initialState};
        Object.keys(initialState).forEach((item) => {
            for (let i = 0; i <= 4; i++) {
                if (stones[i].param === item) {
                    sum[item] += stones[i].percent;
                }
            }
        })
        setSumStones({...initialState, ...sum});
        onChangeStone({...initialState, ...sum});
    }, [stones]);

    const handleChangeStone = (evt) => {
        const index = Number(evt.target.dataset.index);
        const value = evt.target.value;
        let newStones = [...stones];

        if (value !== ``) {
            newStones[index].param = value;
            setStones([...stones], stones[index].param = value);
            updateThingStorage({stones: newStones});
        }
        else {
            newStones[index].param = ``;
            setStones([...stones], stones[index].param = ``);
            updateThingStorage({stones: newStones});
        }
    };

    const handleChangePercentStone = (evt) => {
        const index = Number(evt.target.dataset.index);
        const value = Number(evt.target.value);
        let newStones = [...stones];
        newStones[index].percent = value;

        setStones([...stones], stones[index].percent = value);
        updateThingStorage({stones: newStones});
    };

    return (
        <>
            <ul className={styles.list}>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[0].param] > 30 ? styles.fieldWrong : null} ${stones[0].param !== `` && params[stones[0].param] > 0 ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[0].percent)} data-index="0" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} value={stones[0].param} data-index="0">
                        <option value="">без бонуса</option>
                        { params && Object.entries(params).map(([key, value]) =>
                            value > 0 && <option value={key} key={key}>{paramNames[key]}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[1].param] > 30 ? styles.fieldWrong : null} ${stones[1].param !== `` && params[stones[0].param] > 0 ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[1].percent)} data-index="1" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} value={stones[1].param} data-index="1">
                        <option value="">без бонуса</option>
                        { params && Object.entries(params).map(([key, value]) =>
                            value > 0 && <option value={key} key={key}>{paramNames[key]}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[2].param] > 30 ? styles.fieldWrong : null} ${stones[2].param !== `` && params[stones[0].param] > 0 ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[2].percent)} data-index="2" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} value={stones[2].param} data-index="2">
                        <option value="">без бонуса</option>
                        { params && Object.entries(params).map(([key, value]) =>
                            value > 0 && <option value={key} key={key}>{paramNames[key]}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[3].param] > 30 ? styles.fieldWrong : null} ${stones[3].param !== `` && params[stones[0].param] > 0 ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[3].percent)} data-index="3" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} value={stones[3].param} data-index="3">
                        <option value="">без бонуса</option>
                        { params && Object.entries(params).map(([key, value]) =>
                            value > 0 && <option value={key} key={key}>{paramNames[key]}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[4].param] > 30 ? styles.fieldWrong : null} ${stones[4].param !== `` && params[stones[0].param] > 0 ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[4].percent)} data-index="4" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} value={stones[4].param} data-index="4">
                        <option value="">без бонуса</option>
                        { params && Object.entries(params).map(([key, value]) =>
                            value > 0 && <option value={key} key={key}>{paramNames[key]}</option>
                        )}
                    </select>
                </li>
            </ul>
            <p className={styles.footnote}>Максимальный % улучшения одного параметра от камней не выше 30%</p>
        </>

    );
}

export default Stones;
