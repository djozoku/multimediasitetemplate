import React, { useEffect, useState } from 'react';

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

export const getDeviceSize = () => ({ width: window.innerWidth, height: window.innerHeight });
export const getDeviceWidth = () => window.innerWidth;
export const getDeviceHeight = () => window.innerHeight;

export const breakPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

export type BreakPoint = 'sm' | 'md' | 'lg' | 'xl';

function largerThan(this: Theme, breakpoint: BreakPoint) {
  return this.size.width > breakPoints[breakpoint];
}

function smallerThan(this: Theme, breakpoint: BreakPoint) {
  return this.size.width < breakPoints[breakpoint];
}

export type SiteTheme = 'light' | 'dark';

interface Theme {
  theme: SiteTheme;
  size: {
    width: number;
    height: number;
  };
  smallerThan: (breakpoint: BreakPoint) => boolean;
  largerThan: (breakpoint: BreakPoint) => boolean;
}

export const Default: Theme = {
  theme: (localStorage.getItem('theme') as SiteTheme) || 'light',
  size: { width: window.innerWidth, height: window.innerHeight },
  smallerThan,
  largerThan
};

const themeContext = React.createContext<Theme>(Default);

export const ThemeProvider: React.FC = props => {
  const [theme, setTheme] = useState<Theme>(Default);
  useEffect(() => {
    const listener = (e: UIEvent) => {
      setTheme(t => ({ ...t, size: { width: e.view!.innerWidth, height: e.view!.innerHeight } }));
    };

    document.addEventListener('resize', listener);
    return () => {
      document.removeEventListener('resize', listener);
    };
  }, []);
  return <themeContext.Provider value={theme}>{props.children}</themeContext.Provider>;
};

export default themeContext;
