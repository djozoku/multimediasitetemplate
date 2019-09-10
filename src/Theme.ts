import React from 'react';

export const colors = {
  main: 'blue-600',
  dark: {
    background: '#373737',
    text: '#eaeaea'
  },
  light: {
    background: '#fff',
    text: '#0d0d0d'
  }
};

export type SiteTheme = 'light' | 'dark';

interface Theme {
  theme: SiteTheme;
}

const themeContext = React.createContext<SiteTheme>('dark');

export default themeContext;
