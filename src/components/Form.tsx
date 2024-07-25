import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTweetResponse } from '../services/mistralService';
import { Modal } from './Modal';
import { DotLoader } from './DotLoader';
import { ActionButton } from './ActionButton';
import { RxReload, RxCopy } from "react-icons/rx";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 40px 16px;
  width: 100%;
`;

const Step = styled.div<{ isModalContent?: boolean }>`
  align-items: ${({ isModalContent }) => isModalContent ? 'center' : 'flex-start'};
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const TweetContainer = styled.div`
  align-items: center;
  background-color: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 24px;
  min-height: 220px;
  max-height: 220px;
  overflow-y: auto;
  padding: 16px;
  width: 100%;
`;

export const Form: React.FC = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('');
  const [tweet, setTweet] = useState<string>('');
  const [vibe, setVibe] = useState<'Casual' | 'Professional' | 'Funny'>('Casual');
  const [dailyTokenUsage, setDailyTokenUsage] = useState<number>(0);
  const [isLimitReached, setIsLimitReached] = useState<boolean>(false);

  // --> Manage daily token quota logic with Firebase Firestore <--

  const maxDailyTokens = 1000;

  useEffect(() => {
    const savedTokens = localStorage.getItem('dailyTokenUsage');
    if (savedTokens) {
      const tokens = parseInt(savedTokens, 10);
      setDailyTokenUsage(tokens);
      if (tokens >= maxDailyTokens) {
        setIsLimitReached(true);
      }
    }
  }, []);

  const updateDailyTokenUsage = (tokens: number) => {
    const newUsage = dailyTokenUsage + tokens;
    setDailyTokenUsage(newUsage);
    localStorage.setItem('dailyTokenUsage', newUsage.toString());
    if (newUsage >= maxDailyTokens) {
      setIsLimitReached(true);
    }
  };

  const handleGenerateTweet = useCallback(async () => {
    if (isLimitReached) {
      setIsModalOpen(true);
      return;
    }

    setLoading(true);
    setIsModalOpen(true);
    try {
      const { content, usage } = await getTweetResponse(theme, vibe);
      setTweet(content);
      updateDailyTokenUsage(usage.total_tokens);
    } catch (error) {
      console.error('Failed to fetch tweet response:', error);
    } finally {
      setLoading(false);
    }
  }, [theme, vibe, dailyTokenUsage, isLimitReached]);

  const handleOutputCopy = useCallback(() => {
    setCopyButtonText('Copied text');
    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 1500);
  }, []);

  const onCopyTweetOutputClick = useCallback(async () => {
    if (!tweet) {
      return;
    }

    try {
      await navigator.clipboard.writeText(tweet);
      handleOutputCopy();
    } catch (error) {
      console.error('Failed to copy text to clipboard', error);
    }
  }, [tweet]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTweet('');
  }, []);

  return (
    <Container>
      <Step>
        <StepLabel data-step="1">
          Enter the topic or content for your tweet.
        </StepLabel>
        <TextArea
          placeholder="I bought Dogecoin thinking I'd get rich...."
          rows={4}
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        />
      </Step>
      <Step>
        <StepLabel data-step="2">Choose the tone of your tweet.</StepLabel>
        <Select value={vibe} onChange={(event) => setVibe(event.target.value as 'Casual' | 'Professional' | 'Funny')}>
          <option value="Professional">Professional</option>
          <option value="Casual">Casual</option>
          <option value="Funny">Funny</option>
        </Select>
      </Step>
      <Button onClick={handleGenerateTweet}>Generate your tweet →</Button>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {loading ? (
            <DotLoader />
          ) : (
            <Step isModalContent>
              <StepLabel data-step="3">
                {isLimitReached ? "Daily limit reached" : "Here's your tweet!"}
              </StepLabel>
              <TweetContainer>
                {isLimitReached ? 'You have reached your daily limit of generated tweets. Please try again tomorrow.' : tweet}
              </TweetContainer>
              {!isLimitReached ? (
                <ButtonWrapper>
                  <ActionButton icon={<RxReload />} text="Relaunch" onClick={handleGenerateTweet} />
                  <ActionButton icon={<RxCopy />} text={copyButtonText} onClick={onCopyTweetOutputClick} />
                </ButtonWrapper>
              ) : null}
            </Step>
          )}
        </Modal>
      )}
    </Container>
  );
};
