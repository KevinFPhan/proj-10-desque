const logo = document.getElementById('DesqueLogo');
const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".hero");
const sectionTwo = document.querySelector(".contact");
const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.slider-inner');
const translate = document.querySelector('.translate');
const heroText = document.querySelector('.hero-text');
const hero = document.querySelector('.hero');

let hero_height = hero.offsetHeight;
console.log(hero_height);

// Nav bar Intersection Observer

const sectionOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
};
const serviceOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

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

const sectionTwoObserver = new IntersectionObserver(function(entries, sectionTwoObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("1");
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled2");
        } else {
            nav.classList.remove("nav-scrolled2");
        }
    })
}, sectionOneOptions)

const serviceObserver = new IntersectionObserver(function(entries, serviceObserver) {
    entries.forEach(entry => {
        // console.log(entry.target);
        // console.log(entries);
        // console.log("2");
        // console.log(pageYOffset);
    })
}, serviceOptions)

window.onscroll = function() {scrollFunction()};

sectionOneObserver.observe(sectionOne);
sectionTwoObserver.observe(sectionTwo);
serviceObserver.observe(sectionTwo);

// Hero Text dissapear on Scroll
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    // console.log(scroll);
    // translate.forEach(element => {
    //     let speed = element.dataset.speed;
    //     element.style.transform = `translateY(${scroll * speed}px)`;
    // })

    heroText.style.opacity = - scroll / (hero_height / 3) + 1;
    heroText.style.transform = 'translateY(' + scroll * 0.7 + 'px)';
})


// Function
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        nav.style.height = "80px";
    } else {
        nav.style.height = "128px"
    }
}



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