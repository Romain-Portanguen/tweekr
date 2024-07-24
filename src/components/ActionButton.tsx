import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 9999px;
  border: 1px solid #E2E8F0;
  color: #2D3748;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  gap: 8px;
  justify-content: center;
  outline: none;
  padding: 8px 16px;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #E2E8F0;
    border-color: #CBD5E0;
  }

  &:active {
    background-color: #CBD5E0;
    border-color: #A0AEC0;
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

interface ActionButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, icon, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text}
    </StyledButton>
  );
};
