import React, { useCallback } from "react";
import styled from "styled-components";
import { ActionButton } from "./ActionButton";
import { RxGithubLogo } from "react-icons/rx";
import { breakpoints } from '../styles/globals';

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 920px;
  padding: 0px 16px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`;

const Title = styled.h1`
  color: #2D3748;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const Hero: React.FC = () => {
  const handleButtonClick = useCallback(() => {
    window.open("https://github.com/Romain-Portanguen/tweekr", "_blank");
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <ActionButton icon={<RxGithubLogo />} text="Star on Github" onClick={handleButtonClick} />
        <Title>Generate your next Tweets using Mistral IA</Title>
      </ContentWrapper>
    </Container>
  );
};
