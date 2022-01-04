import {action, makeObservable, observable} from "mobx";


const initialState = {
    strength: 0,
    health: 0,
    shield: 0,
    energy: 0,
    regeneration: 0,
};

const START_LEVEL = 1
const START_ALTAR = 0;
const PREMIUM_BONUS = 100;

class AppStore{
    level = START_LEVEL;
    cups = START_ALTAR;
    titleBonuses = {...initialState};
    abilities = {...initialState};
    altar = START_ALTAR;
    castleBonuses = {...initialState};
    mastery = {...initialState, master: 0};
    quenching = 0;
    charms = {...initialState};
    sumCharms = 0;
    sumThings = {...initialState};
    runes = {...initialState};
    combatSkill = 0;
    premium = 0;
    things = {
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
    };
    thingCharms = {
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
    };
    thingRunes = {
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
    };

    constructor() {
        makeObservable(this, {
            level: observable,
            cups: observable,
            titleBonuses: observable,
            abilities: observable,
            altar: observable,
            castleBonuses: observable,
            mastery: observable,
            quenching: observable,
            charms: observable,
            sumThings: observable,
            sumCharms: observable,
            runes: observable,
            combatSkill: observable,
            premium: observable,
            things: observable,
            thingCharms: observable,
            thingRunes: observable,
            updateLevel: action,
            updateCups: action,
            updateBonuses: action,
            updateAbilities: action,
            updateAltar: action,
            updateCastle: action,
            updateMastery: action,
            updateSumThings: action,
            updateCharms: action,
            updateRunes: action,
            updateCombatSkill: action,
            updatePremium: action,
            updateThings: action,
        });
    };

    updateLevel(value) {
        this.level = value;
    };

    updateCups(value) {
        this.cups = value;
    };

    updateBonuses(bonuses) {
        this.titleBonuses = {...bonuses};
    };

    updateAbilities(name, value) {
        this.abilities[name] = value;
    };

    updateAltar(value) {
        this.altar = value;
    };

    updateCastle(bonus, isActive) {
        if (isActive) {
            this.castleBonuses[bonus] = this.sumCharms * 0.10;
        } else if (!isActive) {
            this.castleBonuses[bonus] = 0;
        }
    };

    updateMastery(values) {
        this.mastery = {...values};
    };

    quenchingUpdate(value) {
        this.quenching = value;
    };

    updateCombatSkill(value) {
        this.combatSkill = value;
    };

    updatePremium(isPremium) {
        this.premium = isPremium ? PREMIUM_BONUS : 0;
    }

    updateSumThings(things) {
        this.sumThings = things;
    };

    updateCharms(charms) {
        this.charms = charms;
        this.sumCharms = charms.strength + charms.health + charms.shield + charms.energy + charms.regeneration;
    };

    updateRunes(runes) {
        this.runes = runes;
    };

    updateThings(thing, values, type) {
        if (type === `things`) {
            this.things = {...this.things, [thing]: {...initialState, ...values}};
            this.countSumParams(this.things, `things`);
        }
        else if (type === `charms`) {
            this.thingCharms = {...this.thingCharms, [thing]: {...initialState, ...values}};
            this.countSumParams(this.thingCharms, `charms`);
        }
        else if (type === `runes`) {
            this.thingRunes = {...this.thingRunes, [thing]: {...initialState, ...values}};
            this.countSumParams(this.thingRunes, `runes`);
        }
    };

    countSumParams(things, updateStore) {
        const counted = {};

        Object.keys({...initialState})
            .map((item) => Object.values(things)
                .map((el) => el[item])
                .reduce((prev, key) => counted[item] = prev + key, 0));

        switch (updateStore) {
            case `things`: this.updateSumThings({...counted});
                break;
            case `charms`: this.updateCharms({...counted});
                break;
            case `runes`: this.updateRunes({...counted});
                break;
            default:
                throw new Error();
        }
    };
}

const appStore = new AppStore();

export { AppStore };
export default appStore;
