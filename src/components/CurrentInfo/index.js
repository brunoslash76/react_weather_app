import React from 'react';

import CurrentTemperature from './CurrentTemperature';
import CurrentDay from './CurrentDay';
import CurrentLocation from './CurrentLocation';

import { Container } from './styles';

export default function CurrentInfo() {
  return (
    <Container>
        <CurrentTemperature />
        <CurrentDay />
        <CurrentLocation />
    </Container>
  );
}
