import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface GamifyThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const GamifyThemeContext = createContext<GamifyThemeContextType | undefined>(undefined);

export const GamifyThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        // Check local storage or system preference
        const saved = localStorage.getItem('gamify-theme');
        if (saved === 'light' || saved === 'dark') return saved;
        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('gamify-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <GamifyThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </GamifyThemeContext.Provider>
    );
};

export const useThemeContext = () => { // Internal use, prefers the hook below
    const context = useContext(GamifyThemeContext);
    if (!context) throw new Error('useThemeContext must be used within GamifyThemeProvider');
    return context;
};
