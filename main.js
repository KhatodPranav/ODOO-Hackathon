document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const html = document.documentElement;

    /**
     * Applies the correct theme classes to the body and cleans up the preload class.
     * @param {string} theme - The theme to apply ('light' or 'dark').
     */
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.checked = false;
        }
        // Clean up the preload class after the main styles have been applied
        html.classList.remove('dark-mode-preload');
    };

    // Get the saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Add event listener for the toggle switch if it exists on the page
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    /**
     * A function to display basic notifications to the user.
     * @param {string} message - The message to display.
     * @param {string} type - 'success' or 'error'.
     */
    window.showNotification = (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        Object.assign(notification.style, {
            position: 'fixed', top: '20px', right: '20px',
            padding: '15px 20px', borderRadius: '8px', color: 'white',
            backgroundColor: type === 'error' ? '#e74c3c' : '#2ecc71',
            zIndex: '1001', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        });
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    };

});