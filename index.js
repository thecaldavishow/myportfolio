document.addEventListener('DOMContentLoaded', function() {
        
    var themeSwitch = document.getElementById('themeSwitch');
    var html = document.documentElement;
    
    if (themeSwitch) {
        // Load saved theme
        var savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        
        // Sync toggle state
        if (savedTheme === 'dark') {
            themeSwitch.checked = true;
        }
        
        // Listen for toggle changes
        themeSwitch.addEventListener('change', function() {
            var newTheme = this.checked ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    

    // MOBILE menu toggle
   
    var mobileMenuBtn = document.getElementById('mobileMenu');
    var navbar = document.getElementById('navbar');
    
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function(e) {
           e.preventDefault(); 
            
            mobileMenuBtn.classList.toggle('active');
            navbar.classList.toggle('active');
        });
        
        // Close the menu when clicking nav links

        var navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside

        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
}
    

    var header = document.querySelector('header');

    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {  
            header.style.boxShadow = '0 10px 20px var(--light-shadow)';
            header.style.backgroundColor = 'var(--bg-dark)';
        } else {
            
            header.style.boxShadow = 'none';  
        }
    });
    
    
// CONTACT FORM HANDLER
    
   const form = document.querySelector('form');

   
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
           const formData = new FormData(form);
           const data = Object.fromEntries(formData.entries());
        
        
           
            
            console.log('Form submitted:', data);
            
       
            
            alert('Thank you for your message! ');
            
            form.reset();
        });   

  

});
