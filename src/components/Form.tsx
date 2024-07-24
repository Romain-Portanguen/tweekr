import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 40px 16px;
  width: 100%;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
  width: 100%;
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
`;

const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
  padding: 12px;
  resize: none;
  width: 100%;
`;

const Select = styled.select`
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
  padding: 12px;
  width: 100%;
`;

const Button = styled.button`
  align-items: center;
  background-color: #000;
  border-radius: 9999px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  max-width: 300px;
  padding: 12px 24px;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #333;
  }
`;

export const Form: React.FC = () => {
  return (
    <Container>
      <Step>
        <StepLabel data-step="1">
          Type your instructions (or write a few sentences about yourself).
        </StepLabel>
        <TextArea
          placeholder="I bought Dogecoin thinking I'd get rich.... Now I'm just rich in memes 🤣🚀 #Dogecoin #CryptoLife #ToTheMoon"
          rows={4}
        />
      </Step>
      <Step>
        <StepLabel data-step="2">Select your vibe.</StepLabel>
        <Select>
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
          <option value="funny">Funny</option>
        </Select>
      </Step>
      <Button>Generate your tweet →</Button>
    </Container>
  );
};
