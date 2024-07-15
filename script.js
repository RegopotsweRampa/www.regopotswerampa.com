document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Get the element
const service1 = document.querySelector('.service1');
const service2 = document.querySelector('.service2');
const service3 = document.querySelector('.service3');


// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    if (isInViewport(service1, service2, service3)) {
        service1.classList.add('show');
        service2.classList.add('show');
        service3.classList.add('show');
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);



