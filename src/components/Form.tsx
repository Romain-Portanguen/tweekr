import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ActionButton } from './ActionButton';
import { cleanResponse } from '../utils/cleanResponse';
import { DotLoader } from './DotLoader';
import { getTweetResponse } from '../services/mistralService';
import { Modal } from './Modal';
import { RxReload, RxCopy } from "react-icons/rx";
import { Step } from './Step';
import { useDailyToken } from '../hooks/useDailyToken';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 40px 16px;
  width: 100%;
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

const StyledTweet = styled.div`
  color: #333;
  font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  padding: 16px;
  text-align: center;
`;

export const Form: React.FC = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('');
  const [tweet, setTweet] = useState<string>('');
  const [vibe, setVibe] = useState<'Casual' | 'Professional' | 'Funny'>('Casual');

  const { isLimitReached, updateDailyTokenUsage } = useDailyToken();
  const typedResponse = useTypingEffect(tweet, 50);

  const handleGenerateTweet = useCallback(async () => {
    if (isLimitReached) {
      setIsModalOpen(true);
      return;
    }

    setLoading(true);
    setIsModalOpen(true);
    try {
      const { content, usage } = await getTweetResponse(theme, vibe);
      setTweet(cleanResponse(content));
      updateDailyTokenUsage(usage.total_tokens);
    } catch (error) {
      console.error('Failed to fetch tweet response:', error);
    } finally {
      setLoading(false);
    }
  }, [theme, vibe, isLimitReached, updateDailyTokenUsage]);

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
      <Step step="1" label="Enter the topic or content for your tweet.">
        <TextArea
          placeholder="I bought Dogecoin thinking I'd get rich...."
          rows={4}
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        />
      </Step>
      <Step step="2" label="Choose the tone of your tweet.">
        <Select value={vibe} onChange={(event) => setVibe(event.target.value as 'Casual' | 'Professional' | 'Funny')}>
          <option value="Professional">Professional</option>
          <option value="Casual">Casual</option>
          <option value="Funny">Funny</option>
        </Select>
      </Step>
      <Button onClick={handleGenerateTweet}>Generate your tweet →</Button>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Step step="3" label={isLimitReached ? "Daily limit reached" : "Here's your tweet!"} isModalContent>
            <TweetContainer>
              {isLimitReached ? (
                'You have reached your daily limit of generated tweets. Please try again tomorrow.'
              ) : (
                !loading ? (
                  <StyledTweet>{typedResponse}</StyledTweet>
                ) : <DotLoader />
              )}
            </TweetContainer>
            {!isLimitReached && !loading && (
              <ButtonWrapper>
                <ActionButton icon={<RxReload />} text="Relaunch" onClick={handleGenerateTweet} />
                <ActionButton icon={<RxCopy />} text={copyButtonText} onClick={onCopyTweetOutputClick} />
              </ButtonWrapper>
            )}
          </Step>
        </Modal>
      )}
    </Container>
  );
};
