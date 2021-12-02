import styles from './things.module.scss';
import Thing from "./thing/thing";
import {useEffect, useState} from "react";
import {helmet, helmets} from "./helmetsData";
import {amulet, amulets} from "./amuletsData";
import {shoulder, shoulders} from "./shouldersData";
import {cape, capes} from "./capesData";
import {armor, armors} from "./armorsData";
import {belt, belts} from "./beltsData";
import {pantsOne, pants} from "./pantsData";
import {braceletsOne, bracelets} from "./braceletsData";
import {glovesOne, gloves} from "./glovesData";
import {ring, rings} from "./ringsData";
import {weapon, weapons} from "./weaponsData";
import {shoesOne, shoes} from "./shoesData";


const initialState = {
    strength: 0,
    health: 0,
    shield: 0,
    energy: 0,
    regeneration: 0,
};

function Things({store}) {
    const [things, setThings] = useState({
        helmet: {...initialState},
        amulet: {...initialState},
        shoulders: {...initialState},
        cape: {...initialState},
        armor: {...initialState},
        belt: {...initialState},
        pants: {...initialState},
        bracelets: {...initialState},
        gloves: {...initialState},
        ring: {...initialState},
        weapon: {...initialState},
        shoes: {...initialState},
    });
    const [charms, setCharms] = useState({
        helmet: {...initialState},
        amulet: {...initialState},
        shoulders: {...initialState},
        cape: {...initialState},
        armor: {...initialState},
        belt: {...initialState},
        pants: {...initialState},
        bracelets: {...initialState},
        gloves: {...initialState},
        ring: {...initialState},
        weapon: {...initialState},
        shoes: {...initialState},
    });
    const [runes, setRunes] = useState({
        helmet: {...initialState},
        amulet: {...initialState},
        shoulders: {...initialState},
        cape: {...initialState},
        armor: {...initialState},
        belt: {...initialState},
        pants: {...initialState},
        bracelets: {...initialState},
        gloves: {...initialState},
        ring: {...initialState},
        weapon: {...initialState},
        shoes: {...initialState},
    });
    const [sumThings, setSumThings] = useState({...initialState});
    const [sumCharms, setSumCharms] = useState({...initialState});
    const [sumRunes, setSumRunes] = useState({...initialState});

    useEffect(() => {
        countSumParams(things, sumThings, setSumThings, `things`);
    }, [things]);

    useEffect(() => {
        countSumParams(charms, sumCharms, setSumCharms, `charms`);
    }, [charms]);

    useEffect(() => {
        countSumParams(runes, sumRunes, setSumRunes, `runes`);
    }, [runes]);

    const handleUpdateThings = (thing, values) => {
        setThings({...things, [thing]: {...initialState, ...values}});
    };

    const countSumParams = (things, sumState, setSumState, updateStore) => {
        const counted = {}
        Object.keys(sumState)
            .map((item) => Object.values(things)
            .map((el) => el[item])
            .reduce((prev, key) => counted[item] = prev + key, 0));
        setSumState({...counted});

        switch (updateStore) {
            case `things`: store.updateSumThings({...counted});
                break;
            case `charms`: store.updateCharms({...counted});
                break;
            case `runes`: store.updateRunes({...counted});
                break;
        }
    };

    const handleUpdateCharms = (thing, char) => {
        setCharms({...charms, [thing]: {...initialState, ...char}});
    };

    const handleUpdateRunes = (thing, runesValue) => {
        // console.log(thing)
        setRunes({...runes, [thing]: {...initialState, ...runesValue}});
    };

    return (
        <section className={styles.things}>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={helmets} thingData={helmet}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={amulets} thingData={amulet}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={shoulders} thingData={shoulder}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={capes} thingData={cape}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={armors} thingData={armor}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={belts} thingData={belt}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={pants} thingData={pantsOne}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={bracelets} thingData={braceletsOne}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={gloves} thingData={glovesOne}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={rings} thingData={ring}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={weapons} thingData={weapon}/>
            <Thing handleUpdateThings={handleUpdateThings} onUpdateChar={handleUpdateCharms} onUpdateRunes={handleUpdateRunes} things={shoes} thingData={shoesOne}/>
        </section>
    );
}

export default Things;
