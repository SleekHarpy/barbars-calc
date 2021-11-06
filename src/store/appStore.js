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
    abilities = {...initialState}

    constructor() {
        makeObservable(this, {
            titleBonuses: observable,
            abilities: observable,
            updateBonuses: action,
            updateAbilities: action,
        });
    };

    updateBonuses(name, value) {
        this.titleBonuses[name] = value;
    };

    updateAbilities(name, value) {
        this.abilities[name] = value;
    };
}

const appStore = new AppStore();

export { AppStore };
export default appStore;
