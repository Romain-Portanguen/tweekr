import React from 'react';
import styled from 'styled-components';
import { TbWritingSign } from "react-icons/tb";
import { Hamburger } from './Hamburger';

const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid #E2E8F0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 920px;
  padding: 16px 0;
  width: 100%;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const Title = styled.h1`
  color: #2D3748;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
`;

const IconWrapper = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <TbWritingSign size={32} />
        <Title>Tweek'r App</Title>
      </ContentWrapper>
      <Hamburger />
    </Container>
  );
};
