import { useEffect, useState, useCallback } from 'react';

const maxDailyTokens = 100000;

export const useDailyToken = () => {
  const [dailyTokenUsage, setDailyTokenUsage] = useState<number>(0);
  const [isLimitReached, setIsLimitReached] = useState<boolean>(false);

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

  const updateDailyTokenUsage = useCallback((tokens: number) => {
    const newUsage = dailyTokenUsage + tokens;
    setDailyTokenUsage(newUsage);
    localStorage.setItem('dailyTokenUsage', newUsage.toString());
    if (newUsage >= maxDailyTokens) {
      setIsLimitReached(true);
    }
  }, [dailyTokenUsage]);

  return { dailyTokenUsage, isLimitReached, updateDailyTokenUsage };
};
