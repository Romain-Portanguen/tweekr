import React from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

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
  height: 100%;
  justify-content: center;
  margin-top: 30px;
  max-width: 920px;
  padding: 12px;
  width: 100%;
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
