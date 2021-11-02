import React, {useState} from 'react';
import './App.scss';
import HeroCharacteristics from "./components/heroCharacteristics/HeroCharacteristics";
import Container from "./components/container/Container";
import TitleBonus from "./components/titleBonus/TitleBonus";
import Abilities from "./components/abilities/Abilities";

function App() {
    const [titleBonuses, setTitleBonuses] = useState({});
    const [abilityBonuses, setAbilityBonuses] = useState({});

    return (
        <Container>
            <HeroCharacteristics titleBonuses={titleBonuses} abilityBonuses={abilityBonuses} />
            <TitleBonus handleBonuses={setTitleBonuses} />
            <Abilities handleBonuses={setAbilityBonuses} />
        </Container>
    );
}

export default App;
