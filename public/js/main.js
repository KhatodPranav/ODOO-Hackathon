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

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler Logic (Remains the same) ---
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
        html.classList.remove('dark-mode-preload');
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // --- Sidebar & Mobile Menu Logic (for app-layout, e.g., project.html) ---
    const appLayout = document.querySelector('.app-layout');
    const sidebarToggleDesktop = document.getElementById('sidebar-toggle-desktop');
    const menuToggleMobile = document.getElementById('menu-toggle-mobile'); // This is the hamburger for app-layout

    // Desktop sidebar collapse
    if (sidebarToggleDesktop && appLayout) {
        sidebarToggleDesktop.addEventListener('click', () => {
            appLayout.classList.toggle('sidebar-collapsed');
        });
    }

    // Mobile sidebar toggle (opens/closes the sidebar on small screens)
    if (menuToggleMobile && appLayout) {
        menuToggleMobile.addEventListener('click', () => {
            appLayout.classList.toggle('sidebar-mobile-active');
        });
    }

    // --- Notification Dropdown Logic (now inside sidebar for app-layout) ---
    // This logic is now primarily handled inline in project.html script block
    // to correctly position the dropdown relative to the notification link.
    // However, if you add notifications to other pages with the same ID,
    // this global listener might still be useful, or you'd make specific ones.


    // --- Login/Signup Page Mobile Menu (Legacy Support for page-layout) ---
    // This is for the mobile menu on pages like login/signup, where the header is at the top.
    const legacyMenuToggleBtn = document.querySelector('.page-layout .menu-toggle-btn');
    const legacyUserNav = document.querySelector('.page-layout .user-nav');

    if (legacyMenuToggleBtn && legacyUserNav) {
        legacyMenuToggleBtn.addEventListener('click', () => {
            legacyUserNav.classList.toggle('mobile-active');
        });
    }
});

// --- Dashboard Tab Switching Logic ---
const dashboardTabs = document.querySelectorAll('.dashboard-tab');
const tabPanes = document.querySelectorAll('.tab-pane');

dashboardTabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove active class from all tabs and panes
        dashboardTabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        // Add active class to the clicked tab
        tab.classList.add('active');

        // Show the corresponding content pane
        const targetPaneId = tab.dataset.tab + '-content';
        const targetPane = document.getElementById(targetPaneId);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
});