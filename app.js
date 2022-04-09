const logo = document.getElementById('DesqueLogo');
const logo2 = document.querySelector('.logo2');
const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".hero-sect");
const sectionTwo = document.querySelector(".contact-sect");
const translate = document.querySelector('.translate');
const heroText = document.querySelector('.hero--text');
const hero = document.querySelector('.hero-sect');
const serviceBox = document.querySelector(".service-boxes")

const hamburger = document.querySelector('.hamburger');


// Nav bar IO Options

const sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
};
const sectOptions = {
    threshold: 0,
    rootMargin: "0px 0px -600px 0px"
};

const serviceOptions = {
    threshold: 0,
    rootMargin: "0px 0px -1px 0px"
};
const navOptions = {
    threshold: 0,
    rootMargin: "-600px 0px 0px 0px"
}

// Nav Bar IO
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if (entry.isIntersecting) {
            nav.classList.add("nav-scrolled1");
        } else {
            nav.classList.remove("nav-scrolled1");
        }
    })
}, sectOptions)
sectionOneObserver.observe(sectionTwo);

const sectionTwoObserver = new IntersectionObserver(function(entries, sectionTwoObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled2");
        } else {
            nav.classList.remove("nav-scrolled2");
        }
    })
}, sectionOneOptions)
// sectionTwoObserver.observe(sectionTwo);


const navObserver = new IntersectionObserver(function(entries, navObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
            nav.classList.add("nav-logo");
        } else  {
            nav.classList.remove("nav-scrolled");
            nav.classList.remove("nav-logo");
        }
    })
}, navOptions)
navObserver.observe(sectionOne);

// Services Box IO
const serviceObserver = new IntersectionObserver(function(entries, serviceObserver) {
    entries.forEach(entry => {
        // console.log(entry);
        if (entry.isIntersecting) {
            serviceBox.classList.add("service-scrolled1"); 
            if (serviceBox.classList.contains('service-scrolled2')) {
                serviceBox.classList.remove('service-scrolled2');
            }
        } else {
            serviceBox.classList.remove("service-scrolled1");
            serviceBox.classList.add('service-scrolled2');
        }
    })
}, serviceOptions)
serviceObserver.observe(sectionTwo);


// Hero Text dissapear on Scroll

let hero_height = hero.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    heroText.style.opacity = - scroll / (hero_height / 1.9) + 1;
    heroText.style.transform = 'translateY(' + scroll * 0.7 + 'px)';
});



// Logo Animation
// logo.addEventListener('mouseover', () => {
//     if (logo2.classList.contains('logo2-animation2')) {
//         logo2.classList.remove('logo2-animation2');
//     } else {
//         logo2.classList.add('logo2-animation');
//     }
// })
// logo.addEventListener('mouseleave', () => {
//     logo2.classList.add('logo2-animation2');
//     logo2.classList.remove('logo2-animation');
// })


// Mouse Cursor Hover Drag
const dcursor = document.querySelector('.drag-cursor');
const carousel = document.querySelector('.carousel');

// carousel.addEventListener('mousemove', (e) => {
//     var x = e.clientX;
//     var y = e.clientY;
//     // dcursor.style.display = 'block';
//     dcursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
//     // dcursor.style.left = x + 'px';
//     // dcursor.style.top = y + 'px';
// })


/* ----------------- Open and Close Nav Bar -------------------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    console.log("asd");
})