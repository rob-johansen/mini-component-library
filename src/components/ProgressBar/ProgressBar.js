/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const CONTAINER_SIZES = {
  small: {
    '--borderRadius': '4px',
    '--height': '8px'
  },
  medium: {
    '--borderRadius': '4px',
    '--height': '12px'
  },
  large: {
    '--borderRadius': '8px',
    '--height': '24px',
    '--paddingLeft': '4px',
    '--paddingTop': '4px',
  },
}

const BAR_SIZES = {
  small: {
    '--height': '8px'
  },
  medium: {
    '--height': '12px'
  },
  large: {
    '--height': '16px'
  },
}

const ProgressBar = ({ value, size }) => {
  const containerStyle = CONTAINER_SIZES[size]
  const barStyle = BAR_SIZES[size]

  return (
    <Container size={size} style={containerStyle}>
      <Bar
        aria-valuenow={value}
        role="progressbar"
        style={barStyle}
        size={size}
        value={value}
      />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding-left: var(--paddingLeft);
  padding-right: ${props => props.size === 'large' && '4px'};
  padding-top: var(--paddingTop);
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${props => {
    const right = props.value === 100 ? '4px' : props.value >= 99.8 ? '2px' : 0
    return `4px ${right} ${right} 4px`
  }};
  height: var(--height);
  width: ${props => props.value}%;
`
