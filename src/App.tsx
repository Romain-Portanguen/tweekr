import React from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { breakpoints } from './styles/globals';

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
`;

const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  max-width: 920px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    gap: 12px;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    gap: 16px;
  }
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <Hero />
        <Form />
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
}

export default App;
