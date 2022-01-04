import styles from './things.module.scss';
import Thing from "./thing/thing";
import { observer } from "mobx-react-lite";
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

function Things({store}) {
    return (
        <section className={styles.things}>
            <Thing store={store} things={helmets} thingData={helmet}/>
            <Thing store={store} things={amulets} thingData={amulet}/>
            <Thing store={store} things={shoulders} thingData={shoulder}/>
            <Thing store={store} things={capes} thingData={cape}/>
            <Thing store={store} things={armors} thingData={armor}/>
            <Thing store={store} things={belts} thingData={belt}/>
            <Thing store={store} things={pants} thingData={pantsOne}/>
            <Thing store={store} things={bracelets} thingData={braceletsOne}/>
            <Thing store={store} things={gloves} thingData={glovesOne}/>
            <Thing store={store} things={rings} thingData={ring}/>
            <Thing store={store} things={weapons} thingData={weapon}/>
            <Thing store={store} things={shoes} thingData={shoesOne}/>
        </section>
    );
}

export default observer(Things);
