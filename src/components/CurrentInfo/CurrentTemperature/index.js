import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CurrentTemperature({ temperature }) {
  return (
    <Container>
        <span>{temperature}</span>
    </Container>
  );
}

CurrentTemperature.propTypes = {
  temperature: PropTypes.string
};

CurrentTemperature.defaultProps = {
  temperature: '31°'
};
