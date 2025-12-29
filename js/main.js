// ========================================
// VANGUARD AGRO EXPORT - MAIN JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // ===== SIDE MENU TOGGLE =====
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const sideMenuOverlay = document.getElementById('sideMenuOverlay');
    const closeMenuBtn = document.getElementById('closeMenu');

    function openMenu() {
        sideMenu.classList.add('active');
        sideMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
        sideMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling

        // Reset hamburger if it has animation
        const spans = hamburger.querySelectorAll('span');
        if (spans.length === 3) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            openMenu();
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    if (sideMenuOverlay) {
        sideMenuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking links
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('.nav-link, .secondary-nav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only apply smooth scroll to anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = 80; // Account for sticky header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navElement = document.querySelector('.nav-secondary');
                    if (navElement && navElement.classList.contains('active')) {
                        navElement.classList.remove('active');
                        const hamburger = document.getElementById('hamburger');
                        const spans = hamburger.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                }
            }
        });
    });

    // ===== HEADER BACKGROUND ON SCROLL =====
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(139, 157, 59, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#8B9D3B';
            header.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });

    // ===== CTA BUTTONS - SCROLL TO CONTACT =====
    const ctaButtons = document.querySelectorAll('.hero-cta, .btn-contacto, .btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Check if button is "Contactanos" or similar CTA
            const buttonText = this.textContent.toLowerCase();
            if (buttonText.includes('contacto') || buttonText.includes('conocer')) {
                e.preventDefault();

                // Open WhatsApp with pre-filled message
                const phoneNumber = '59112345678'; // Replace with actual number
                const message = encodeURIComponent('Hola, quiero información sobre exportación de soya (Vanguard Agro Export).');
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

                window.open(whatsappUrl, '_blank');
            }
        });
    });

    // ===== SCROLL REVEAL ANIMATION (OPTIONAL ENHANCEMENT) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply to cards with initial hidden state
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ===== PRODUCT ITEMS STAGGER ANIMATION =====
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // ===== MOBILE CAROUSEL FUNCTIONALITY =====
    // Only activate carousels on mobile screens
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // ===== HERO CAROUSEL (MOBILE ONLY) =====
    const heroImageGrid = document.querySelector('.hero-image-grid');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentHeroSlide = 0;

    if (heroImageGrid && carouselDots.length > 0) {
        // Touch/swipe support for hero carousel
        let heroTouchStartX = 0;
        let heroTouchEndX = 0;

        function handleHeroSwipe() {
            if (!isMobile()) return;

            const swipeThreshold = 50;
            const diff = heroTouchStartX - heroTouchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentHeroSlide < 2) {
                    // Swipe left - next slide
                    currentHeroSlide++;
                } else if (diff < 0 && currentHeroSlide > 0) {
                    // Swipe right - previous slide
                    currentHeroSlide--;
                }
                updateHeroCarousel();
            }
        }

        function updateHeroCarousel() {
            if (!isMobile()) return;

            // Scroll to current slide
            const slideWidth = heroImageGrid.children[0].offsetWidth;
            heroImageGrid.scrollTo({
                left: currentHeroSlide * slideWidth,
                behavior: 'smooth'
            });

            // Update dots
            carouselDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentHeroSlide);
            });
        }

        // Dot click handlers
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!isMobile()) return;
                currentHeroSlide = index;
                updateHeroCarousel();
            });
        });

        // Touch event listeners
        heroImageGrid.addEventListener('touchstart', (e) => {
            if (!isMobile()) return;
            heroTouchStartX = e.changedTouches[0].screenX;
        });

        heroImageGrid.addEventListener('touchend', (e) => {
            if (!isMobile()) return;
            heroTouchEndX = e.changedTouches[0].screenX;
            handleHeroSwipe();
        });
    }

    // ===== PRODUCTS CAROUSEL (MOBILE ONLY) =====
    const productsGrid = document.querySelector('.products-grid');
    const productDots = document.querySelectorAll('[data-product-slide]');
    let currentProductSlide = 0;

    if (productsGrid && productDots.length > 0) {
        // Touch/swipe support for products carousel
        let productTouchStartX = 0;
        let productTouchEndX = 0;

        function handleProductSwipe() {
            if (!isMobile()) return;

            const swipeThreshold = 50;
            const diff = productTouchStartX - productTouchEndX;
            const totalSlides = productDots.length;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentProductSlide < totalSlides - 1) {
                    // Swipe left - next slide
                    currentProductSlide++;
                } else if (diff < 0 && currentProductSlide > 0) {
                    // Swipe right - previous slide
                    currentProductSlide--;
                }
                updateProductCarousel();
            }
        }

        function updateProductCarousel() {
            if (!isMobile()) return;

            // Scroll to current slide
            const slideWidth = productsGrid.children[0].offsetWidth;
            productsGrid.scrollTo({
                left: currentProductSlide * slideWidth,
                behavior: 'smooth'
            });

            // Update dots
            productDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentProductSlide);
            });
        }

        // Dot click handlers
        productDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!isMobile()) return;
                currentProductSlide = index;
                updateProductCarousel();
            });
        });

        // Touch event listeners for swipe
        productsGrid.addEventListener('touchstart', (e) => {
            if (!isMobile()) return;
            productTouchStartX = e.changedTouches[0].screenX;
        });

        productsGrid.addEventListener('touchend', (e) => {
            if (!isMobile()) return;
            productTouchEndX = e.changedTouches[0].screenX;
            handleProductSwipe();
        });
    }

    console.log('Vanguard Agro Export - Loaded successfully ✓');
});
