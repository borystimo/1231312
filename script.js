// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {

    // -----------------------------
    // Burger Menu
    const menuButton = document.querySelector('.icon-menu');

    function menuInit() {

        document.addEventListener("click", function (e) {
            if (e.target.closest('.icon-menu')) {
                document.documentElement.toggleAttribute("burger-menu-open");
            }
        });

        const media = window.matchMedia('(max-width: 767.98px)');

        media.addEventListener('change', (e) => {
            if (!e.matches) {
                document.documentElement.removeAttribute("burger-menu-open");
            }
        });
    }

    if (menuButton) {
        menuInit();
    }

    // -----------------------------
    // Form submission handler

    const contactForm = document.querySelector('form');
    const modal = document.getElementById('thankYouModal');
    const closeButton = document.querySelector('.close-modal');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const requiredInputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            // Email validation
            const emailInput = this.querySelector('input[type="email"]');
            const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,6}$/;

            // Phone validation
            const phoneInput = this.querySelector('input[type="tel"]');
            const phonePattern = /^\+?[0-9]{9,15}$/;

            // Required fields validation
            requiredInputs.forEach(input => {
                input.style.borderColor = '';

                if (input.value.trim() === '') {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#27ae60';
                }
            });

            // Email check
            if (emailInput && !emailPattern.test(emailInput.value.trim())) {
                isValid = false;
                emailInput.style.borderColor = '#e74c3c';
            }

            // Phone check
            if (phoneInput && !phonePattern.test(phoneInput.value.trim())) {
                isValid = false;
                phoneInput.style.borderColor = '#e74c3c';
            }

            // Show modal if valid
            if (isValid && modal) {
                modal.style.display = 'block';

                this.reset();

                requiredInputs.forEach(input => {
                    input.style.borderColor = '';
                });
            }
        });
    }

    // -----------------------------
    // Modal close

    window.closeModal = function () {
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // Close button
    if (closeButton) {
        closeButton.addEventListener('click', window.closeModal);
    }

    // Close when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            window.closeModal();
        }
    });

});