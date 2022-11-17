import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';

const Select = ({ label, value, onChange, children }) => {
  return (
    <SelectContainer>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <ArrowContainer>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </ArrowContainer>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: min-content;
`

const NativeSelect = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  height: 43px;
  padding-left: 16px;
  padding-right: 48px;
  
  &:hover {
    color: ${COLORS.black};
  }
`

const ArrowContainer = styled.div`
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 25%;
  
  & svg {
     color: ${COLORS.gray700};
  }
  
  ${NativeSelect}:hover + & svg {
    color: ${COLORS.black};
  }
`

export default Select;
