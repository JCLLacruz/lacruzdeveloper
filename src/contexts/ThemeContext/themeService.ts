// src/contexts/ThemeContext/themeService.ts

// Aplica el tema (ej. dark o light) a la aplicación
export const applyTheme = (theme: string) => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  };
  
  // Obtiene el tema inicial basado en el almacenamiento local o preferencias del navegador
  export const getInitialTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
  
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
  
    return 'light'; // Tema predeterminado
  };
  