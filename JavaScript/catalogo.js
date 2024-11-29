window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');  
    if (window.scrollY > 600) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});