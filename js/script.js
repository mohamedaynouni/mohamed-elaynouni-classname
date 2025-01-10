
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                
                const targetID = link.getAttribute('href').substring(1); 
                const targetSection = document.getElementById(targetID);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' 
                    });
                }
            });
        });
    });
// Add an event listener to track scroll events
window.addEventListener('scroll', function () {
    const header = document.querySelector('header'); 
    if (window.scrollY > 40) { 
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});


//add toggle the menu visibility.
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('jeg_mobile_toggle');
    const mobileMenu = document.getElementById('mobile_menu');

    toggleBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});