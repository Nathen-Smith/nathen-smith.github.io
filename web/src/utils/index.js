function isDarkMode() {
  return localStorage.theme === 'dark'
  || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export default isDarkMode;
