const nav = document.querySelector('header nav');
const toggle = document.querySelectorAll('nav .toggle');
toggle.forEach(e=>e.addEventListener('click',()=>{
    nav.classList.toggle('show');
}));

const links = document.querySelectorAll('nav ul li a');
links.forEach(e=>e.addEventListener('click',()=>{
    nav.classList.remove('show');
}));

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll',()=>{
    if(window.scrollY>=navHeight){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
})

const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize: true
        }
    }
});

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset:true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #products header, #products .card, 
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
     {interval:100})

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll',()=>{
    if(window.scrollY>=560){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
})

const sections = document.querySelectorAll('section[id]');

function activateMenuAtCurrentSection(){

    const checkpoint = window.pageYOffset + (window.innerHeight/8)*4;

    for(const section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if(checkpointStart && checkpointEnd){
            document
                .querySelector('nav ul li a[href*='+sectionId+']')
                .classList.add('active');

        }else {
            document
                .querySelector('nav ul li a[href*='+sectionId+']')
                .classList.remove('active');
        }
    }

}

window.addEventListener('scroll',activateMenuAtCurrentSection);