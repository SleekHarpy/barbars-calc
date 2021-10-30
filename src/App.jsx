import React, {useState} from 'react';
import './App.scss';
import HeroCharacteristics from "./components/heroCharacteristics/HeroCharacteristics";
import Container from "./components/container/Container";
import TitleBonus from "./components/titleBonus/TitleBonus";

function App() {
    const [titleBonuses, setTitleBonuses] = useState({});

    return (
        <Container>
            <HeroCharacteristics titleBonuses={titleBonuses} />
            <TitleBonus handleBonuses={setTitleBonuses} />
        </Container>
    );
}

export default App;
