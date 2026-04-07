// Add this in your <script> tag or separate JS file
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeSwitch.checked = true;
    }
    
    // Toggle theme on switch change
    themeSwitch.addEventListener('change', (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
  const mobileMenu = document.getElementById('mobileMenu');
        const navbar = document.getElementById('navbar');

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navbar.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navbar.classList.remove('active');
            }
        });

    