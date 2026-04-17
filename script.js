
document.addEventListener('DOMContentLoaded', function() {

    // THEME TOGGLE 
   
    
        var themeSwitch = document.getElementById('checkboxInput');
        var html = document.documentElement;
        var themeIcon = document.querySelector('.theme-icon');
    
    if (themeSwitch) {
        
        // Load saved theme from localStorage
        var savedTheme = localStorage.getItem('theme') || 'light';
        
        // Apply saved theme
        html.setAttribute('data-theme', savedTheme);
        
        // Sync toggle checkbox with saved theme
        if (savedTheme === 'dark') {
            themeSwitch.checked = true;
        }
                  
         function updateThemeIcon(theme) {
            if (themeIcon) {
                if (theme === 'dark') {
                    themeIcon.classList.remove('icon--sun');
                    themeIcon.classList.add('icon--moon');
                } else {
                    themeIcon.classList.remove('icon--moon');
                    themeIcon.classList.add('icon--sun');
                }
            }
        }

         updateThemeIcon(savedTheme);

        // Listen for toggle changes
        themeSwitch.addEventListener('change', function() {
            
            // Get new theme based on checkbox state
            var newTheme = this.checked ? 'dark' : 'light';
            
            // Apply theme to HTML element
            html.setAttribute('data-theme', newTheme);
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
        });
        
    
    }

    // MOBILE MENU TOGGLE
   
    
    var mobileMenuBtn = document.getElementById('mobileMenu');
    var navbar = document.getElementById('navbar');
    
    if (mobileMenuBtn && navbar) {
        
        // Toggle menu on hamburger click
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
        
        // Close menu when pressing Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileMenuBtn.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    }

    // SMOOTH SCROLL WITH ANIMATIONS
   
    
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

    // SCROLL SPY (Active Navigation)
   
    
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
    
   


    // SCROLL REVEAL ANIMATIONS
   
    
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

    // ANIMATE HOME ON LOAD
   
    
    /* setTimeout(function() {
        var homeElements = document.querySelectorAll('#home .reveal');
        homeElements.forEach(function(el) {
            el.classList.add('active');
        });
    }, 100); */

    // SUCCESS POPUP FUNCTIONS
   
    

    
  

    // CONTACT FORM HANDLER
   
    
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
            contactForm.reset();

    
            
            });
            

           
          }



const form = document.getElementById('form');
const popup = document.getElementById('successPopup');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Give the user a 400ms "breather" after clicking submit
  setTimeout(() => {
    popup.classList.add('show');
        // 2. Wait 4 seconds, then hide it automatically
    setTimeout(() => {
      closePopup();
    }, 1500); 

  }, 300);
});

function closePopup() {
  popup.classList.remove('show');
}






    var pageHeader = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            pageHeader.classList.add('scrolled');
        } else {
            pageHeader.classList.remove('scrolled');
        }
    });

    
    console.log('Portfolio JavaScript loaded successfully!');
     
});
