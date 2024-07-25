import MistralClient from '@mistralai/mistralai';
import { initialPrompt } from '../config/prompts';

const apiKey = process.env.REACT_APP_MISTRAL_API_KEY;
const model = 'open-mixtral-8x7b';

const client = new MistralClient(apiKey);

interface MistralResponse {
  content: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export const getTweetResponse = async (theme: string, vibe: 'Casual' | 'Professional' | 'Funny'): Promise<MistralResponse> => {
  const prompt = `${initialPrompt}

Theme: ${theme}
Vibe: ${vibe}
Tweet:`;

  try {
    const chatResponse = await client.chat({
      model,
      messages: [{ role: 'system', content: prompt }],
    });
    const response = chatResponse.choices[0].message.content.trim();
    const usage = chatResponse.usage;
    return { content: response, usage };
  } catch (error) {
    console.error('Error fetching tweet response:', error);
    throw new Error('Failed to fetch tweet response');
  }
};
