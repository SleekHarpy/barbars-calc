import React from 'react';
import './App.scss';
import HeroCharacteristics from "./components/heroCharacteristics/HeroCharacteristics";
import Container from "./components/container/Container";
import TitleBonus from "./components/titleBonus/TitleBonus";
import Abilities from "./components/abilities/Abilities";
import appStore from "./store/appStore";
import Altar from "./components/altar/altar";
import Castles from "./components/castles/castles";

function App() {
    const store = appStore;

    return (
        <Container>
            <HeroCharacteristics store={store} />
            <TitleBonus store={store} />
            <Abilities store={store} />
            <Altar store={store} />
            <Castles store={store} />
        </Container>
    );
}

export default App;
