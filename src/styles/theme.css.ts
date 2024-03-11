import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    primary: '#0070f3',
    secondary: '#ff4081',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  borderRadius: '4px',
});
