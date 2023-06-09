import { createContext } from 'react';

const enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({});

const LOCAL_STORAGE_THEME_KEY = 'theme';

export { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY };
