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
        });
    };

    updateLevel(value) {
        this.level = value;
    };

    updateCups(value) {
        this.cups = value;
    };

    updateBonuses(name, value) {
        this.titleBonuses[name] = value;
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

    updateMastery(name, value) {
        this.mastery[name] = value;
    };

    quenchingUpdate(value) {
        this.quenching = value;
    };

    updateCombatSkill(value) {
        this.combatSkill = value;
    };

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
}

const appStore = new AppStore();

export { AppStore };
export default appStore;
