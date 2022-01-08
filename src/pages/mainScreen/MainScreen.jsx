import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import Level from '../../components/level/Level';
import HeroCharacteristics from '../../components/heroCharacteristics/HeroCharacteristics';
import Cups from '../../components/cups/Cups';
import TitleBonus from '../../components/titleBonus/TitleBonus';
import Abilities from '../../components/abilities/Abilities';
import Altar from '../../components/altar/altar';
import Castles from '../../components/castles/castles';
import Mastery from '../../components/mastery/mastery';
import Quenching from '../../components/quenching/quenching';
import CombatSkill from '../../components/combatSkill/CombatSkill';
import Premium from '../../components/premium/Premium';
import Things from '../../components/things/things';
import Reset from '../../components/reset/Reset';
import { useRef } from 'react';
import Stronghold from '../../components/stronghold/Stronghold';


function MainScreen({store}) {
    const resetRef = useRef(null);

    return (
        <Container>
            <Header />
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
            <Stronghold />
            <Things store={store} />
            <Reset store={store} onReset={resetRef} />
        </Container>
    );
}

export default MainScreen;
