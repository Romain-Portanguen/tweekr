import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from './DropdownMenu';

const StyledLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledSvg = styled.svg`
  height: 2em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 2em;
`;

const StyledPath = styled.path`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  stroke: #2D3748;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const LineTopBottom = styled(StyledPath) <{ checked: boolean }>`
  stroke-dasharray: ${({ checked }) => (checked ? '20 300' : '12 63')};
  stroke-dashoffset: ${({ checked }) => (checked ? '-32.42' : '0')};
`;

const StyledSvgContainer = styled.div<{ checked: boolean }>`
  transform: ${({ checked }) => (checked ? 'rotate(-45deg)' : 'none')};
`;

export const Hamburger: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = useCallback(() => {
    setChecked(!checked);
    setDropdownOpen(!dropdownOpen);
  }, [checked, dropdownOpen]);

  const handleLogout = useCallback(() => {
    console.log('Logout clicked');
  }, [checked, dropdownOpen]);

  const handleTest = useCallback(() => {
    console.log('Test clicked');
  }, [checked, dropdownOpen]);

  return (
    <StyledLabel>
      <StyledInput type="checkbox" checked={checked} onChange={handleChange} />
      <StyledSvgContainer checked={checked}>
        <StyledSvg viewBox="0 0 32 32">
          <LineTopBottom
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            checked={checked}
          />
          <StyledPath d="M7 16 27 16" />
        </StyledSvg>
      </StyledSvgContainer>
      <DropdownMenu
        open={dropdownOpen}
        onLogout={handleLogout}
        onTest={handleTest}
      />
    </StyledLabel>
  );
};
