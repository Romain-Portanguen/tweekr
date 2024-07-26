import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/globals';

const StepContainer = styled.div<{ isModalContent?: boolean }>`
  align-items: ${({ isModalContent }) => isModalContent ? 'center' : 'flex-start'};
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 4px;
  }
`;

const StepLabel = styled.label`
  align-items: center;
  color: #2D3748;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;

  &::before {
    background-color: #000;
    border-radius: 50%;
    color: #fff;
    content: attr(data-step);
    display: inline-block;
    height: 24px;
    line-height: 24px;
    margin-right: 8px;
    text-align: center;
    width: 24px;
  }

  a {
    color: #3182ce;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;

    &::before {
      height: 20px;
      line-height: 20px;
      width: 20px;
    }
  }
`;

interface StepProps {
  step: string;
  label: string;
  isModalContent?: boolean;
  children: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({ step, label, isModalContent, children }) => (
  <StepContainer isModalContent={isModalContent}>
    <StepLabel data-step={step}>{label}</StepLabel>
    {children}
  </StepContainer>
);
