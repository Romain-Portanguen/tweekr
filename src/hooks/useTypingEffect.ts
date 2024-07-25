import { useEffect, useState } from 'react';

export const useTypingEffect = (text: string, speed: number = 50) => {
  const [typedResponse, setTypedResponse] = useState<string>('');

  useEffect(() => {
    if (text) {
      let index = 0;
      const responseLength = text.length;
      const interval = setInterval(() => {
        if (index < responseLength) {
          setTypedResponse(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }
  }, [text, speed]);

  return typedResponse;
};
