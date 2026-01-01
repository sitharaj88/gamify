import { useThemeContext } from '../theme/GamifyThemeContext';

export const useTheme = () => {
    const { theme, toggleTheme, setTheme } = useThemeContext();
    return { theme, toggleTheme, setTheme };
};
