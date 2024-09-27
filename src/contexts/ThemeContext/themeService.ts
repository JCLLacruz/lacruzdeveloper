
export const applyTheme = (newTheme: string) => {
    const root = window.document.documentElement;
    const initialTheme = getInitialTheme();
    root.classList.remove(initialTheme);
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  export const getInitialTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
    }
    return 'light';
  };
  