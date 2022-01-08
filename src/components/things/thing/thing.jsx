import styles from './thing.module.scss';
import emptySlot from '../../../assets/images/empty-slot.png';
import { useEffect, useReducer, useState } from "react";
import Stones from "../stones/stones";
import Runes from "../runes/runes";
import { getInputValue, isEmptyObj, isEmptyParams } from "../../../utils/common";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { observer } from "mobx-react-lite";


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
    let index = 1;

    magicianValues.forEach((item) => {
        options.push({ id: index, param: params[0], paramName: paramNames[params[0]], value: item });
        options.push({ id: index + 1, param: params[1], paramName: paramNames[params[1]], value: item });
        index += 2;
    });

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

const thingStateReducer = (state, action) => {
    switch (action.type) {
        case 'paramPercents':
            return {...state, paramPercents: {...action.payload}};
        case 'multipliedParams':
            return {...state, multipliedParams: {...action.payload}};
        case 'sorcerer':
            return {...state, sorcerer: action.payload};
        case 'blacksmith':
            return {...state, blacksmith: action.payload}
        default:
            throw new Error();
    }
};

function Thing({store, things, thingData}) {
    const [thingStorage, setThingStorage, removeThingStorage, updateThingStorage] = useLocalStorage(thingData.thing);

    const [isShowContent, setShowContent] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const [selectedThing, setSelectedThing] = useState({});
    const [charOptions, setCharOptions] = useState([]);
    const [char, setChar] = useState(null);
    const [stones, setStones] = useState({...initialState});

    const [thingState, dispatchThingState] = useReducer(thingStateReducer, {
        multipliedParams: null,
        paramPercents: {...initialState},
        blacksmith: 0,
        sorcerer: 0,
    });

    const resetStatus = store.isReset;

    // Заполнение из localStorage
    useEffect(() => {
        if (thingStorage && Object.keys(selectedThing).length === 0) {
            let newThingState = {...thingState}
            updateSelectedThing({...things[thingStorage.selectedThingId]});

            if (thingStorage.paramPercents) {
                newThingState.paramPercents = thingStorage.paramPercents;
                updateParamPercents(thingStorage.paramPercents);
            }

            if (thingStorage.sorcerer) {
                newThingState.sorcerer = thingStorage.sorcerer;
                dispatchThingState({type: `sorcerer`, payload: thingStorage.sorcerer});
            }

            if (thingStorage.blacksmith) {
                newThingState.blacksmith = thingStorage.blacksmith;
                dispatchThingState({type: `blacksmith`, payload: thingStorage.blacksmith});
            }

            if (thingStorage.char) {
                let param = thingStorage.char.param;
                let value = thingStorage.char.value;
                let id = thingStorage.char.id;

                setChar({ id: id, param: [param], value: value });
                store.updateThings(thingData.thing, { [param]: value }, `charms`);
            }

            countSumParam({
                thing: things[thingStorage.selectedThingId],
                percents: newThingState.paramPercents,
                newBlacksmith: newThingState.blacksmith,
                newSorcerer: newThingState.sorcerer,
            });
        }

    }, []);

    useEffect(() => {
        if (resetStatus) {
            setIsReset(true);
            setTimeout(reset, 10); // для сброса рун
            setShowContent(false);
        }
    }, [resetStatus]);

    const updateSelectedThing = (thing) => {
        const params = {};

        setSelectedThing(thing);
        thing.params.map((item) => params[item.param] = item.value);

        updateMultipliedParams({...params});
    }

    useEffect(() => {
        if (thingData) setCharOptions(generateMagicianOptions(thingData.magicianParams));
    }, [thingData]);

    const updateMultipliedParams = (params) => {
        dispatchThingState({type: `multipliedParams`, payload: params})
        store.updateThings(thingData.thing, params, `things`);
    };

    const updateParamPercents = (percents) => {
        dispatchThingState({type: 'paramPercents', payload: percents});
        !isEmptyParams(percents) ? updateThingStorage({paramPercents: {...percents}}) : removeThingStorage(`paramPercents`);
    };

    const handleClickContent = () => {
        setShowContent(!isShowContent);
    };

    const handleChangeThing = (evt) => {
        const value = evt.target.value;

        if (value !== `empty`) {
            updateSelectedThing(things[value]);
            setIsReset(false);
            setThingStorage({selectedThingId: Number(value)});
        } else {
            setIsReset(true);
            setTimeout(reset, 10); // для сброса рун
            removeThingStorage();
        }
    };

    const handleChangePercent = (evt) => {
        const name = evt.target.name;
        const percent = Number(evt.target.value);
        const newPercents = {...thingState.paramPercents, [name]: percent}

        updateParamPercents({...newPercents});
        countSumParam({percents: {...newPercents}});
    };

    const countSumParam = (updateParams) => {
        const {
            thing = selectedThing,
            percents = thingState.paramPercents,
            newBlacksmith = thingState.blacksmith,
            newStones = stones,
            newSorcerer = thingState.sorcerer,
        } = updateParams;
        const newMultipliedParams = {};

        thing.params.forEach((item) => {
            let totalSum = 0;

            const sumPercentParam = ((item.value / 100) * percents[item.param]) + item.value;
            const sumBlacksmith = ((sumPercentParam / 100) * newBlacksmith) + sumPercentParam;
            totalSum = ((sumBlacksmith / 100) * newStones[item.param]) + sumBlacksmith;

            if (thing.sorcerer.includes(item.param)) {
                const sumSorcererPercent = ((newSorcerer / 100) * percents[item.param]) + newSorcerer;
                const sumSorcererBlacksmith = ((sumSorcererPercent / 100) * newBlacksmith) + sumSorcererPercent;
                const sumSorcererStone = ((sumSorcererBlacksmith / 100) * newStones[item.param]) + sumSorcererBlacksmith;
                totalSum += sumSorcererStone;
            }

            newMultipliedParams[item.param] = Math.floor(totalSum);
        });

        updateMultipliedParams({...newMultipliedParams});
    };

    const handleChangeChar = (evt) => {
        const param = evt.target.options[evt.target.selectedIndex].dataset.magicianParam;
        const value = Number(evt.target.options[evt.target.selectedIndex].dataset.magicianValue);
        const id = Number(evt.target.value);

        if (value !== 0) {
            setChar({ id: id, param: [param], value: value });
            store.updateThings(thingData.thing, { [param]: value }, `charms`);
            updateThingStorage({char: { id: id, param: [param], value: value }});
        } else {
            setChar(null);
            store.updateThings(thingData.thing, { [param]: 0 }, `charms`);
            removeThingStorage(`char`);
        }
    };

    const incrementBlacksmith = () => {
        const blacksmith = thingState.blacksmith;

        if (blacksmith < 60) {
            dispatchThingState({type: `blacksmith`, payload: blacksmith + 5});
            countSumParam({newBlacksmith: blacksmith + 5});
            updateThingStorage({blacksmith: blacksmith + 5});
        }
    };

    const decrementBlacksmith = () => {
        const blacksmith = thingState.blacksmith;

        if (blacksmith > 0) {
            const blacksmithCount = blacksmith - 5;

            dispatchThingState({type: `blacksmith`, payload: blacksmithCount});
            countSumParam({newBlacksmith: blacksmithCount});
            updateThingStorage({blacksmith: blacksmithCount});

            if (blacksmithCount === 0) {
                removeThingStorage(`blacksmith`);
            }
        }
    };

    const handleChangeSorcerer = (evt) => {
        const value = Number(evt.target.value);

        updateSorcerer(value);
    };

    const updateSorcerer = (value) => {
        if (value > 0 && thingState.sorcerer === 0) {
            selectedThing.params.forEach((item) => {
                item.value === 0 && updateParamPercents({...thingState.paramPercents, [item.param]: 250});
            })
        }

        dispatchThingState({type: `sorcerer`, payload: value});
        countSumParam({newSorcerer: value});
        if (value > 0) updateThingStorage({sorcerer: value});
        else removeThingStorage(`sorcerer`);
    };

    const handleChangeStones = (state) => {
        setStones({...state});
        countSumParam({newStones: {...state}});
    };

    const reset = () => {
        setSelectedThing({});
        updateMultipliedParams({...initialState});
        store.updateThings(thingData.thing, { char: 0 }, `charms`);
        setChar(null);
        dispatchThingState({type: `sorcerer`, payload: 0});
        dispatchThingState({type: `blacksmith`, payload: 0});
        dispatchThingState({type: `paramPercents`, payload: {...initialState}});
        removeThingStorage();
    };

    return (
        <div className={styles.thing}>
            <IconThing selectedThing={selectedThing} thingData={thingData} rank={thingState.sorcerer} />
            <div>
                <div className={styles.topThing}>
                    <h3 className={`${styles.title} ${isShowContent ? styles.titleOpened : ``}`} onClick={handleClickContent}>{!isEmptyObj(selectedThing) ? selectedThing.name : thingData.title}</h3>
                    { !isEmptyObj(selectedThing) && <p className={styles.levelWrap}>{selectedThing.level + thingState.blacksmith} ур, {char && <><span className={styles.value}>+{char.value}</span> {paramNames[char.param]}</>}</p> }
                </div>

                <div className={`${styles.content} ${!isShowContent ? styles.contentHidden : ``}`}>
                    {things &&
                        <select className={styles.select} onChange={handleChangeThing} value={selectedThing?.id ?? "empty"}>
                            <option value="empty">{thingData.title}</option>
                            { things.map((thing) => (
                                <option value={thing.id} key={thing.id}>{thing.name}</option>
                            )) }
                        </select>
                    }

                    { (!isEmptyObj(selectedThing) && thingState.multipliedParams) &&
                        <>
                            <ul className={styles.list}>
                                { selectedThing.params.map((item) => (
                                    thingState.multipliedParams[item.param] > 0 &&
                                    <li className={styles.item} key={item.param} data-param={item.param}>
                                        {paramNamesTwo[item.param]}: {thingState.multipliedParams[item.param]}
                                        <span className={styles.fieldWrap}> (+<input className={styles.field} onChange={handleChangePercent} value={thingState.paramPercents[item.param] > 0 ? thingState.paramPercents[item.param] : ``} name={item.param} data-param-default={item.value} type="number" placeholder="0"/>%)</span>
                                    </li>
                                )) }
                            </ul>

                            <div className={styles.rank}>
                                <span className={styles.item}>Колдун: <input className={styles.field} onChange={handleChangeSorcerer} value={getInputValue(thingState.sorcerer)} type="number" placeholder="0"/> <span className={styles.rankText}>ранг</span></span>
                            </div>

                            { charOptions.length > 0 &&
                                <div>
                                    <span className={styles.item}>Чары: </span>
                                    <select className={styles.select} onChange={handleChangeChar} value={char?.id ?? '0'}>
                                        <option value="0" data-magician-value="0">Без бонуса</option>
                                        { charOptions.map((option) => (
                                            <option value={option.id} data-magician-param={option.param} data-magician-value={option.value} key={option.id}>+{option.value} {option.paramName}</option>
                                        )) }
                                    </select>
                                </div>
                            }

                            <Runes store={store} thing={thingData} resetStatus={isReset} />

                            <div>
                                <span className={styles.item}>Кузнец: </span>
                                <button className={styles.btnCounter} onClick={decrementBlacksmith} type="button" disabled={thingState.blacksmith === 0}>-</button>
                                <span className={styles.blacksmithValue}> {thingState.blacksmith} </span>
                                <button className={styles.btnCounter} onClick={incrementBlacksmith} type="button" disabled={thingState.blacksmith === 60}>+</button>
                                <> ур. </>
                                <span className={styles.fieldWrap}>(+{thingState.blacksmith}%)</span>
                            </div>

                            <Stones onChangeStone={handleChangeStones} thing={selectedThing} params={thingState.multipliedParams} thingType={thingData.thing} />
                        </>
                    }

                </div>
            </div>
        </div>
    );
}

export default observer(Thing);
