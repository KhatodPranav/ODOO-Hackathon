document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggler Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const html = document.documentElement;
    const lightModeLabel = document.getElementById('light-mode-label');
    const darkModeLabel = document.getElementById('dark-mode-label');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.checked = true;
            if (lightModeLabel && darkModeLabel) {
                lightModeLabel.classList.remove('active');
                darkModeLabel.classList.add('active');
            }
        } else { // Light mode
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.checked = false;
            if (lightModeLabel && darkModeLabel) {
                darkModeLabel.classList.remove('active');
                lightModeLabel.classList.add('active');
            }
        }
        // Always remove the preload class after applying the theme
        html.classList.remove('dark-mode-preload');
    };

    // Default to the DARK theme from your image
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // --- Mobile Menu Toggle Logic ---
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const userNav = document.querySelector('.user-nav');

    if (menuToggleBtn && userNav) {
        menuToggleBtn.addEventListener('click', () => {
            userNav.classList.toggle('mobile-active');
        });
    }
});