export const cleanResponse = (response: string): string => {
  return response.replace(/['"]/g, '');
};