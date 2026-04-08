document.addEventListener('DOMContentLoaded', function() {

    // MOBILE MENU TOGGLE
   
    
    var mobileMenuBtn = document.getElementById('mobileMenu');
    var navbar = document.getElementById('navbar');
    
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            
            mobileMenuBtn.classList.toggle('active');
            
           
            navbar.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
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

   //  Added shadow to header when scrolling down
    
    var header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {  // If scrolled more than 50 pixels
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.25)';  // Add shadow
            header.style.backgroundColor = '#e5d5d5';
        } else {
            header.style.boxShadow = 'none';  // Remove shadow
        }
    });
    

// CONTACT FORM HANDLER
    
    var contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            var formData = new FormData(contactForm);
            var data = {};
            formData.forEach(function(value, key) {
                data[key] = value;
            });
            
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    console.log('Portfolio JavaScript loaded successfully!');
});
