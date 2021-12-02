import styles from './stones.module.scss';
import { useEffect, useState } from "react";
import { getInputValue } from "../../../utils/common";


const initialState = {
    strength: 0,
    health: 0,
    shield: 0,
    energy: 0,
    regeneration: 0,
};

function Stones({onChangeStone, thing}) {
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

        if (value !== ``) setStones([...stones], stones[index].param = value);
        else setStones([...stones], stones[index].param = ``);
    };

    const handleChangePercentStone = (evt) => {
        const index = Number(evt.target.dataset.index);
        const value = Number(evt.target.value);

        setStones([...stones], stones[index].percent = value);
    };

    return (
        <>
            <ul className={styles.list}>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[0].param] > 30 ? styles.fieldWrong : null} ${stones[0].param !== `` ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[0].percent)} data-index="0" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} value={stones[0].param} data-index="0">
                        <option value="">без бонуса</option>
                        { thing && thing.params.map((item) =>
                            <option value={item.param} key={item.param}>{item.label}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[1].param] > 30 ? styles.fieldWrong : null} ${stones[1].param !== `` ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[1].percent)} data-index="1" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} data-index="1">
                        <option value="">без бонуса</option>
                        { thing && thing.params.map((item) =>
                            <option value={item.param} key={item.param}>{item.label}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[2].param] > 30 ? styles.fieldWrong : null} ${stones[2].param !== `` ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[2].percent)} data-index="2" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} data-index="2">
                        <option value="">без бонуса</option>
                        { thing && thing.params.map((item) =>
                            <option value={item.param} key={item.param}>{item.label}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[3].param] > 30 ? styles.fieldWrong : null} ${stones[3].param !== `` ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[3].percent)} data-index="3" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} data-index="3">
                        <option value="">без бонуса</option>
                        { thing && thing.params.map((item) =>
                            <option value={item.param} key={item.param}>{item.label}</option>
                        )}
                    </select>
                </li>
                <li className={styles.item}>
                    Камень: <span className={styles.fieldWrap}>+<input className={`${styles.field} ${sumStones[stones[4].param] > 30 ? styles.fieldWrong : null} ${stones[4].param !== `` ? styles.fieldActive : null}`} onChange={handleChangePercentStone} value={getInputValue(stones[4].percent)} data-index="4" type="number" placeholder="0"/>% </span>
                    <select className={styles.select} onChange={handleChangeStone} data-index="4">
                        <option value="">без бонуса</option>
                        { thing && thing.params.map((item) =>
                            <option value={item.param} key={item.param}>{item.label}</option>
                        )}
                    </select>
                </li>
            </ul>
            <p className={styles.footnote}>Максимальный % улучшения одного параметра от камней не выше 30%</p>
        </>

    );
}

export default Stones;
