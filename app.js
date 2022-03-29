const logo = document.getElementById('DesqueLogo');
const logo2 = document.querySelector('.logo2');
const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".hero");
const sectionTwo = document.querySelector(".contact");
const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.slider-inner');
const translate = document.querySelector('.translate');
const heroText = document.querySelector('.hero-text');
const hero = document.querySelector('.hero');
const serviceBox = document.querySelector(".service-boxes")

let hero_height = hero.offsetHeight;
console.log(hero_height);

// Nav bar Intersection Observer

const sectionOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
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
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled1");
        } else {
            nav.classList.remove("nav-scrolled1");
        }
    })
}, sectionOneOptions)
sectionOneObserver.observe(sectionOne);

const sectionTwoObserver = new IntersectionObserver(function(entries, sectionTwoObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled2");
        } else {
            nav.classList.remove("nav-scrolled2");
        }
    })
}, sectionOneOptions)
sectionTwoObserver.observe(sectionTwo);


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
        }
    })
}, serviceOptions)
serviceObserver.observe(sectionTwo);


// window.onscroll = function() {scrollFunction()};


// Hero Text dissapear on Scroll
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    heroText.style.opacity = - scroll / (hero_height / 3) + 1;
    heroText.style.transform = 'translateY(' + scroll * 0.7 + 'px)';
})


// Function
// function scrollFunction() {
//     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//         nav.style.height = "80px";
//     } else {
//         nav.style.height = "128px"
//     }
// }


// Logo Animation
logo.addEventListener('mouseover', () => {
    logo2.classList.remove('logo2-animation2');
    logo2.classList.add('logo2-animation');
})
logo.addEventListener('mouseleave', () => {
    logo2.classList.add('logo2-animation2');
    logo2.classList.remove('logo2-animation');
})


// Carousel

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab'
});

window.addEventListener('mouseup', () => {
    pressed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();
    console.log(MouseEvent);
    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`;
    checkBoundary();
})

function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}