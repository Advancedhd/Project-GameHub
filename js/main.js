const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    

    burger.addEventListener('click', () => {
        /*Toggle Hamburger*/
        nav.classList.toggle('nav-active');

        /*toggle animated links*/
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkfade 0.5s ease forwards ${index / 4 + 1.0}s`;
            }
        });
        /*animated lines*/
        burger.classList.toggle('toggle');
    });
}


navSlide();
