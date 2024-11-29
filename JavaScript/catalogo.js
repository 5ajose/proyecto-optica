window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');  
    if (window.scrollY > 600) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });

        
document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;

    if (mouseX < 180) {
        document.querySelector(".container-filtro").style.left = "0";
    } else {
        document.querySelector(".container-filtro").style.left = "-300px";
    }
});