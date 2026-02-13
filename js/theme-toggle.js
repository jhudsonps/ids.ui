// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.theme-toggle-btn');
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update button states
    themeButtons.forEach(btn => {
      if (btn.dataset.theme === theme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  // Initialize button states
  const currentTheme = document.documentElement.getAttribute('data-theme');
  themeButtons.forEach(btn => {
    if (btn.dataset.theme === currentTheme) {
      btn.classList.add('active');
    }
    
    btn.addEventListener('click', () => {
      setTheme(btn.dataset.theme);
    });
  });
});
