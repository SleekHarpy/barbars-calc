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
    titleBonuses = {...initialState};
    abilities = {...initialState};
    altar = START_ALTAR;
    castleBonuses = {...initialState};
    mastery = {...initialState, master: 0};
    quenching = 0;
    enchantmentSum = 2300;

    constructor() {
        makeObservable(this, {
            level: observable,
            titleBonuses: observable,
            abilities: observable,
            altar: observable,
            castleBonuses: observable,
            mastery: observable,
            quenching: observable,
            enchantmentSum: observable,
            updateLevel: action,
            updateBonuses: action,
            updateAbilities: action,
            updateAltar: action,
            updateCastle: action,
            updateMastery: action,
        });
    };

    updateLevel(value) {
        this.level = value;
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
            this.castleBonuses[bonus] = this.enchantmentSum * 0.10;
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
}

const appStore = new AppStore();

export { AppStore };
export default appStore;
