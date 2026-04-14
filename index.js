// ============================================
// PORTFOLIO JAVASCRIPT
// Simple and reliable functionality
// ============================================


   
    
    
  
    

    

// PORTFOLIO JAVASCRIPT
// Complete functionality with scroll reveal animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
     

        // ============================================
    // THEME TOGGLE WITH BACKGROUND IMAGE SWITCHING
    // ============================================
    
    var themeSwitch = document.getElementById('themeSwitch');
    var html = document.documentElement;
   
    
    if (themeSwitch) {
        
        // Load saved theme from localStorage
        var savedTheme = localStorage.getItem('theme') || 'light';
        
        // Apply saved theme
        html.setAttribute('data-theme', savedTheme);
        
        // Sync toggle checkbox with saved theme
        if (savedTheme === 'dark') {
            themeSwitch.checked = true;
        }
        
  
        
        // Function to switch between sun and moon icons
        var themeIcon = document.querySelector('.theme-icon');
        
        function updateThemeIcon(theme) {
            if (themeIcon) {
                if (theme === 'dark') {
                    themeIcon.classList.remove('.sun');
                    themeIcon.classList.add('.moon');
                } else {
                    themeIcon.classList.remove('.moon');
                    themeIcon.classList.add('.sun');
                }
            }
        }

        // Listen for toggle changes
        themeSwitch.addEventListener('change', function() {
            
            // Get new theme based on checkbox state
            var newTheme = this.checked ? 'dark' : 'light';
            
            // Apply theme to HTML element
            html.setAttribute('data-theme', newTheme);
            
           
            updateThemeIcon(newTheme);
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
        });
        
        // Initialize background images on page load
        updateBackgroundImages(savedTheme);

        }
    

            // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    
    var mobileMenuBtn = document.getElementById('mobileMenu');
    var navbar = document.getElementById('navbar');
    
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle active class on hamburger
            mobileMenuBtn.classList.toggle('active');
            
            // Toggle active class on navbar
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
        
        // Close menu when pressing Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileMenuBtn.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    }
    
  
    // ============================================
    // SMOOTH SCROLL WITH ANIMATIONS
    // ============================================
    
    var allNavLinks = document.querySelectorAll('nav a[href^="#"]');
    
    allNavLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            
            if (href === '#') return;
            
            var targetId = href.substring(1);
            var targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                // Hide reveal elements in target section
                var sectionReveals = targetSection.querySelectorAll('.reveal');
                sectionReveals.forEach(function(el) {
                    el.classList.remove('active');
                });
                
                // Calculate scroll position
                var header = document.querySelector('header');
                var headerHeight = header ? header.offsetHeight : 0;
                var targetPosition = targetSection.offsetTop - headerHeight - 50;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Animate elements after scroll
                setTimeout(function() {
                    sectionReveals.forEach(function(el, index) {
                        setTimeout(function() {
                            el.classList.add('active');
                        }, index * 100);
                    });
                }, 600);
                
                // Update URL
                history.pushState(null, '', href);
            }
        });
    });
    
    // ============================================
    // SCROLL SPY (Active Navigation)
    // ============================================
    
    var sections = document.querySelectorAll('section');
    var navAnchors = document.querySelectorAll('nav a[href^="#"]');
    
    function updateActiveNav() {
        var scrollPosition = window.scrollY + 300;
        
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            var sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navAnchors.forEach(function(anchor) {
                    anchor.classList.remove('active');
                    if (anchor.getAttribute('href') === '#' + sectionId) {
                        anchor.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    
    
    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    
    var revealElements = document.querySelectorAll('.reveal');
    
    var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(function(element) {
        revealObserver.observe(element);
    });
    
    // ============================================
    // CONTACT FORM HANDLER
    // ============================================
    
    var contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var formData = new FormData(contactForm);
            var data = {};
            formData.forEach(function(value, key) {
                data[key] = value;
            });
            
            console.log('Form submitted:', data);
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    console.log('Portfolio JavaScript loaded successfully!');
});

            // ============================================
    // HEADER SHADOW ON SCROLL
    // ============================================
    
    var header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // ============================================
    // SCROLL REVEAL FOR HEADER (on page load)
    // Header animates in immediately when page loads
    // ============================================
    
    // Get header elements
    var header = document.querySelector('header');
    var logo = document.querySelector('.logo');
    var navAnchors = document.querySelectorAll('nav a');
    var themeToggle = document.querySelector('.theme-toggle');
    
    // Add animation classes to header elements
    if (header) {
        header.classList.add('reveal', 'reveal-top');
        header.classList.add('active'); // Make header visible immediately
    }
    
    // ============================================
    // ANIMATE HOME SECTION ON LOAD
    // Home elements animate in after a short delay
    // ============================================
    
    setTimeout(function() {
        // Trigger reveal animations for home section
        var homeElements = document.querySelectorAll('.home .reveal');
        homeElements.forEach(function(el) {
            el.classList.add('active');
        });
    }, 200); // Wait 200ms after page load
    
 



