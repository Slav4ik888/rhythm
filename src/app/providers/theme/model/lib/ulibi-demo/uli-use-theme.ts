import { useContext } from 'react';
import { Theme, ThemeContext } from './uli-context';
import { LS } from 'shared/lib/local-storage';


interface UseTheme {
  toggleTheme : () => void;
  theme       : Theme;
}

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.ORANGE_DARK;
        break;
      case Theme.ORANGE_DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;

      default: newTheme = Theme.DARK;
    }

    // LS.setTheme(newTheme);
    setTheme?.(newTheme);
    document.body.className = newTheme;
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
};
