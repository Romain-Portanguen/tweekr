import React, { useCallback } from 'react';
import styled from 'styled-components';
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { breakpoints } from '../styles/globals';

const Container = styled.footer`
  align-items: center;
  background-color: #F5F5F5;
  border-top: 2px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 16px 0;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 920px;
  }
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  color: #2D3748;
  font-size: 14px;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const TextLink = styled.a`
  color: #3182CE;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const IconLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:first-child {
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobile}) {
    &:first-child {
      margin-left: 4px;
    }
  }
`;

export const Footer: React.FC = () => {
  const getCurrentYear = useCallback(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Text>
          Made by Romain Portanguen© {getCurrentYear()} |
        </Text>
        <TextLink href='https://mistral.ai/fr/'>
          Powered by Mistral IA
        </TextLink>
      </ContentWrapper>
      <ContentWrapper>
        <IconLink href="https://github.com/Romain-Portanguen" target="_blank" rel="noopener noreferrer">
          <RxGithubLogo size={24} />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/ṛomain-portangueṇ" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </IconLink>
      </ContentWrapper>
    </Container>
  );
};
