import React from 'react';
import './App.scss';
import HeroCharacteristics from "./components/heroCharacteristics/HeroCharacteristics";
import Container from "./components/container/Container";

function App() {
  return (
    <Container>
      <HeroCharacteristics />
    </Container>
  );
}

export default App;
