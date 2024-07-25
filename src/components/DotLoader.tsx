import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Dot = styled.div`
  animation: ${blink} 1s infinite;
  background-color: #000;
  border-radius: 50%;
  height: 8px;
  margin: 0 4px;
  width: 8px;
`;

export const DotLoader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Dot />
    </LoaderWrapper>
  );
};