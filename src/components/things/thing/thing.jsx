import styles from './thing.module.scss';
import emptySlot from '../../../assets/images/empty-slot.png';
import { useEffect, useState } from "react";
import Stones from "../stones/stones";
import Runes from "../runes/runes";
import { getInputValue, isEmptyObj } from "../../../utils/common";


const magicianValues = [75, 100, 150, 200, 250, 350];

const paramNames = {
    strength: `силы`,
    health: `здоровья`,
    energy: `энергии`,
    regeneration: `регенерации`,
    shield: `брони`,
};

const paramNamesTwo = {
    strength: `Сила`,
    health: `Здоровье`,
    energy: `Энергия`,
    regeneration: `Регенерация`,
    shield: `Броня`,
};

const initialState = {
    strength: 0,
    health: 0,
    shield: 0,
    energy: 0,
    regeneration: 0,
}

const generateMagicianOptions = (params) => {
    const options = [];
    const oneOptions = [];
    const twoOptions = [];

    magicianValues.forEach((item) => {
        oneOptions.push({ param: params[0], paramName: paramNames[params[0]], value: item });
    });
    magicianValues.forEach((item) => {
        twoOptions.push({ param: params[1], paramName: paramNames[params[1]], value: item });
    });

    for (let i = 0; i < magicianValues.length; i++) {
        options.push(oneOptions[i]);
        options.push(twoOptions[i]);
    }

    return options;
};

function IconThing({selectedThing, thingData, rank}) {
    const [urlImg, setUrlImg] = useState(emptySlot);

    useEffect(() => {
        if (!isEmptyObj(selectedThing)) {
            if (rank > 0) {
                setUrlImg(selectedThing.iconSorcerer);
            } else {
                setUrlImg(selectedThing.icon);
            }
        } else {
            setUrlImg(emptySlot)
        }
    }, [rank, selectedThing]);

    return (
        <img src={urlImg} width="40" height="40" alt={!isEmptyObj(selectedThing) ? selectedThing.name : thingData.title}/>
    );
}

function Thing({handleUpdateThings, onUpdateChar, onUpdateRunes, things, thingData}) {
    const [isShowContent, setShowContent] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const [selectedThing, setSelectedThing] = useState({});
    const [charOptions, setCharOptions] = useState([]);
    const [char, setChar] = useState(null);

    const [multipliedParams, setMultipliedParams] = useState(null);
    const [paramPercents, setParamPercents] = useState(null);
    const [blacksmith, setBlacksmith] = useState(0);
    const [sorcerer, setSorcerer] = useState(0)

    const [stones, setStones] = useState({...initialState});

    useEffect(() => {
        const params = {};
        const percents = {};

        if (!isEmptyObj(selectedThing)) {
            selectedThing.params.map((item) => params[item.param] = item.value);
            selectedThing.params.map((item) => percents[item.param] = 0);

            setMultipliedParams({...params});
            setParamPercents({...percents});
        }
    }, [selectedThing]);

    useEffect(() => {
        if (thingData) setCharOptions(generateMagicianOptions(thingData.magicianParams));
    }, [thingData]);

    useEffect(() => {
        if (multipliedParams !== null) handleUpdateThings(thingData.thing, multipliedParams);
    }, [multipliedParams]);

    useEffect(() => {
        if (!isEmptyObj(selectedThing)) {
            countSumParam();
        }
    }, [paramPercents, blacksmith, stones, sorcerer]);

    const handleClickContent = () => {
        setShowContent(!isShowContent);
    };

    const handleChangeThing = (evt) => {
        const value = evt.target.value;

        if (value !== `empty`) {
            setSelectedThing(things[value]);
            setIsReset(false);
        } else {
            setIsReset(true);
            setTimeout(reset, 10); // для сброса рун
        }
    };

    const handleChangePercent = (evt) => {
        const name = evt.target.name;
        const percent = Number(evt.target.value);

        setParamPercents({...paramPercents, [name]: percent});
    };

    const countSumParam = () => {
        const newMultipliedParams = {};

        selectedThing.params.forEach((item) => {
            let totalSum = 0;

            const sumPercentParam = ((item.value / 100) * paramPercents[item.param]) + item.value;
            const sumBlacksmith = ((sumPercentParam / 100) * blacksmith) + sumPercentParam;
            totalSum = ((sumBlacksmith / 100) * stones[item.param]) + sumBlacksmith;

            if (selectedThing.sorcerer.includes(item.param)) {
                const sumSorcererPercent = ((sorcerer / 100) * paramPercents[item.param]) + sorcerer;
                const sumSorcererBlacksmith = ((sumSorcererPercent / 100) * blacksmith) + sumSorcererPercent;
                const sumSorcererStone = ((sumSorcererBlacksmith / 100) * stones[item.param]) + sumSorcererBlacksmith;
                totalSum += sumSorcererStone;
            }

            newMultipliedParams[item.param] = Math.floor(totalSum);
        });

        setMultipliedParams({...newMultipliedParams});
    };

    const handleChangeChar = (evt) => {
        const param = evt.target.options[evt.target.selectedIndex].dataset.magicianParam;
        const value = Number(evt.target.value);

        if (value !== 0) {
            setChar({ param: [param], value: value });
            onUpdateChar(thingData.thing, { [param]: value });
        } else {
            setChar(null);
            onUpdateChar(thingData.thing, { [param]: 0 });
        }
    };

    const incrementBlacksmith = () => {
        if (blacksmith < 60) setBlacksmith((prev) => prev + 5);
    };

    const decrementBlacksmith = () => {
        if (blacksmith > 0) setBlacksmith((prev) => prev - 5);
    };

    const handleChangeSorcerer = (evt) => {
        const value = Number(evt.target.value);

        if (value > 0 && sorcerer === 0) {
            selectedThing.params.forEach((item) => {
                item.value === 0 && setParamPercents({...paramPercents, [item.param]: 250});
            })
        }

        setSorcerer(value);
    }

    const reset = () => {
        setSelectedThing({});
        setMultipliedParams({...initialState});
        setBlacksmith(0);
        onUpdateChar(thingData.thing, { char: 0 });
        setChar(null);
        setSorcerer(0);
    };

    return (
        <div className={styles.thing}>
            <IconThing selectedThing={selectedThing} thingData={thingData} rank={sorcerer} />
            <div>
                <div className={styles.topThing}>
                    <h3 className={styles.title} onClick={handleClickContent}>{!isEmptyObj(selectedThing) ? selectedThing.name : thingData.title}</h3>
                    { !isEmptyObj(selectedThing) && <p className={styles.levelWrap}>{selectedThing.level + blacksmith} ур, {char && <><span className={styles.value}>+{char.value}</span> {paramNames[char.param]}</>}</p> }
                </div>

                <div className={`${styles.content} ${!isShowContent ? styles.contentHidden : null}`}>
                    {things &&
                        <select className={styles.select} onChange={handleChangeThing}>
                            <option value="empty">{thingData.title}</option>
                            { things.map((thing) => (
                                <option value={thing.id} key={thing.id}>{thing.name}</option>
                            )) }
                        </select>
                    }

                    { (!isEmptyObj(selectedThing) && multipliedParams) &&
                        <>
                            <ul className={styles.list}>
                                { selectedThing.params.map((item) => (
                                    multipliedParams[item.param] > 0 &&
                                    <li className={styles.item} key={item.param} data-param={item.param}>
                                        {paramNamesTwo[item.param]}: {multipliedParams[item.param]}
                                        <span className={styles.fieldWrap}> (+<input className={styles.field} onChange={handleChangePercent} value={paramPercents[item.param] > 0 ? paramPercents[item.param] : ``} name={item.param} data-param-default={item.value} type="number" placeholder="0"/>%)</span>
                                    </li>
                                )) }
                            </ul>

                            <div className={styles.rank}>
                                <span className={styles.item}>Колдун: <input className={styles.field} onChange={handleChangeSorcerer} value={getInputValue(sorcerer)} type="number" placeholder="0"/> <span className={styles.rankText}>ранг</span></span>
                            </div>

                            { charOptions.length > 0 &&
                                <div>
                                    <span className={styles.item}>Чары: </span>
                                    <select className={styles.select} onChange={handleChangeChar}>
                                        <option value="0">Без бонуса</option>
                                        { charOptions.map((option, index) => (
                                            <option value={option.value} data-magician-param={option.param} key={option.value + index}>+{option.value} {option.paramName}</option>
                                        )) }
                                    </select>
                                </div>
                            }

                            <Runes onChangeRunes={onUpdateRunes} thing={thingData} resetStatus={isReset} />

                            <div>
                                <span className={styles.item}>Кузнец: </span>
                                <button className={styles.btnCounter} onClick={decrementBlacksmith} type="button" disabled={blacksmith === 0}>-</button>
                                <span className={styles.blacksmithValue}> {blacksmith} </span>
                                <button className={styles.btnCounter} onClick={incrementBlacksmith} type="button" disabled={blacksmith === 60}>+</button>
                                <> ур. </>
                                <span className={styles.fieldWrap}>(+{blacksmith}%)</span>
                            </div>

                            <Stones onChangeStone={setStones} thing={selectedThing} />
                        </>
                    }

                </div>
            </div>
        </div>
    );
}

export default Thing;
