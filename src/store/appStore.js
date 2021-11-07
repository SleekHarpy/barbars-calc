import {action, makeObservable, observable} from "mobx";

const initialState = {
    strength: 0,
    health: 0,
    shield: 0,
    energy: 0,
    regeneration: 0,
}

class AppStore{
    titleBonuses = {...initialState};
    abilities = {...initialState};
    altar = 0;
    castleBonuses = {...initialState};
    enchantmentSum = 2300;

    constructor() {
        makeObservable(this, {
            titleBonuses: observable,
            abilities: observable,
            altar: observable,
            castleBonuses: observable,
            enchantmentSum: observable,
            updateBonuses: action,
            updateAbilities: action,
            updateAltar: action,
            updateCastle: action,
        });
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
    }
}

const appStore = new AppStore();

export { AppStore };
export default appStore;
