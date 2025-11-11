// FOUC prevention script - inject into index.html
export const foucPreventionScript = `
(function() {
  // Get stored theme or default to system
  const storedTheme = localStorage.getItem('theme') || 'system';
  let effectiveTheme = storedTheme;
  
  // Resolve system theme
  if (storedTheme === 'system') {
    effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Apply theme class immediately before render
  document.documentElement.classList.add(effectiveTheme);
  
  // Set language attribute
  const storedLang = localStorage.getItem('language') || 'da';
  document.documentElement.lang = storedLang;
})();
`;
