import React, { createContext, useState, useEffect } from 'react';

// Theme types
type ThemeType = 'theme1' | 'theme2' | 'theme3';

// Context shape
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// Create context
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {},
});


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('theme1');

  // Load from localStorage when app starts
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeType;
    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, []);

  // Function to change theme and store in localStorage
  const setTheme = (newTheme: ThemeType) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Apply theme as className to top div */}
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
