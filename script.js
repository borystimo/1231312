// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Contact form handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                alert('Bitte füllen Sie alle Felder aus.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                return;
            }
            
            // Simulate form submission
            alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
            this.reset();
        });
    }

    // Scroll to top button
    // const scrollTopBtn = document.createElement('button');
    // scrollTopBtn.id = 'scroll-top-btn';
    // scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    // scrollTopBtn.style.display = 'none';
    // document.body.appendChild(scrollTopBtn);
    
    // window.addEventListener('scroll', function() {
    //     if (window.pageYOffset > 300) {
    //         scrollTopBtn.style.display = 'block';
    //     } else {
    //         scrollTopBtn.style.display = 'none';
    //     }
    // });
    
    // scrollTopBtn.addEventListener('click', function() {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
    
    // // Add click handlers for CTA buttons
    // const ctaButtons = document.querySelectorAll('button, a.btn, input[type="submit"]');
    // ctaButtons.forEach(btn => {
    //     btn.addEventListener('click', function(e) {
    //         // Add any custom analytics or tracking here
    //         console.log('Button clicked:', this.textContent);
    //     });
    // });
});


const menuButton = document.querySelector('.icon-menu');

function menuInit() {

  document.addEventListener("click", function (e) {
    if (e.target.closest('.icon-menu')) {

      document.documentElement.toggleAttribute("burger-menu-open")
    }
  });
  const media = window.matchMedia('(max-width: 767.98px)');

  media.addEventListener('change', (e) => {
    if (!e.matches) {
      document.documentElement.removeAttribute("burger-menu-open");

    }
  });

}
document.addEventListener("DOMContentLoaded", () => {
  if (menuButton) {
    menuInit();
  }
});