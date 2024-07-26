import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#0B1420',
  secondary: '#F5F5F5',
  textPrimary: '#2D3748',
  textSecondary: '#A0AEC0',
};

export const fontSizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '1.5rem',
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.secondary};
    color: ${colors.textPrimary};
    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.textPrimary};
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textSecondary};
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  input, button {
    font-family: inherit;
  }

  a {
    color: ${colors.textPrimary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    body {
      font-size: ${fontSizes.small};
    }

    h1 {
      font-size: ${fontSizes.large};
    }

    h2 {
      font-size: ${fontSizes.medium};
    }

    h3 {
      font-size: ${fontSizes.medium};
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    body {
      font-size: ${fontSizes.medium};
    }

    h1 {
      font-size: ${fontSizes.xlarge};
    }

    h2 {
      font-size: ${fontSizes.large};
    }

    h3 {
      font-size: ${fontSizes.large};
    }
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    body {
      font-size: ${fontSizes.large};
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: ${fontSizes.xlarge};
    }

    h3 {
      font-size: ${fontSizes.large};
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    body {
      font-size: ${fontSizes.large};
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: ${fontSizes.xlarge};
    }
  }
`;
