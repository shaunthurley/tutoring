document.addEventListener('DOMContentLoaded', function() {
    initAccordion();
    initMobileMenu();
    initSmoothScroll();
    initSlickCarousel();
});

// Accordion Functionality
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    // Initialize heights on page load
    accordionItems.forEach(item => {
        const content = item.querySelector('.accordion-content');
        content.style.height = '0px';
    });
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const inner = content.querySelector('.accordion-content-inner');
        
        header.addEventListener('click', () => {
            const isClosing = item.classList.contains('active');
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            // Close any open accordion
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                const activeContent = currentlyActive.querySelector('.accordion-content');
                activeContent.style.height = '0px';
            }
            
            // Toggle the clicked accordion
            if (!isClosing) {
                item.classList.add('active');
                const height = inner.getBoundingClientRect().height;
                content.style.height = height + 'px';
            } else {
                item.classList.remove('active');
                content.style.height = '0px';
            }
        });
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - 75;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Slick Carousel Initialization
function initSlickCarousel() {
    $(document).ready(function(){
        $('.testimonial-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            arrows: true,
            dots: true,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight: true
        });
    });
}
