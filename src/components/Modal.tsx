import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const ModalContent = styled.div`
  align-items: center;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 415px;
  justify-content: center;
  max-width: 720px;
  padding: 24px;
  position: relative;
  width: 100%;
`;

const CloseButton = styled.button`
  align-items: baseline;
  background: #F5F5F5;
  border-radius: 6px;
  border: 1px solid #E2E8F0;
  color: #2D3748;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  height: 32px;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 32px;

  & > svg {
    display: block;
    margin: auto
  }

  &:hover {
    background-color: #E2E8F0;
    border-color: #CBD5E0;
  }
`;

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
