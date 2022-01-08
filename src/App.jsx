import React, { useRef } from 'react';
import './App.scss';
import HeroCharacteristics from "./components/heroCharacteristics/HeroCharacteristics";
import Container from "./components/container/Container";
import TitleBonus from "./components/titleBonus/TitleBonus";
import Abilities from "./components/abilities/Abilities";
import appStore from "./store/appStore";
import Altar from "./components/altar/altar";
import Castles from "./components/castles/castles";
import Mastery from "./components/mastery/mastery";
import Quenching from "./components/quenching/quenching";
import Things from "./components/things/things";
import Cups from "./components/cups/Cups";
import CombatSkill from "./components/combatSkill/CombatSkill";
import Premium from "./components/premium/Premium";
import Level from "./components/level/Level";
import Reset from "./components/reset/Reset";

function App() {
    const store = appStore;
    const resetRef = useRef(null);

    return (
        <Container>
            <Level store={store} />
            <HeroCharacteristics store={store} />
            <Cups store={store} />
            <TitleBonus store={store} />
            <Abilities store={store} />
            <Altar store={store} />
            <Castles store={store} />
            <Mastery store={store} />
            <Quenching store={store} />
            <CombatSkill store={store} />
            <Premium store={store} />
            <Things store={store} />
            <Reset store={store} onReset={resetRef} />
        </Container>
    );
}

export default App;
