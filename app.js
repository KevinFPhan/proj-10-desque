const logo = document.getElementById('DesqueLogo');
const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".hero");
const sectionTwo = document.querySelector(".contact")
const slider = document.querySelector('.slider')
const innerSlider = document.querySelector('.slider-inner')

const sectionOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
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
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled2");
        } else {
            nav.classList.remove("nav-scrolled2");
        }
    })
}, sectionOneOptions)

window.onscroll = function() {scrollFunction()};

sectionOneObserver.observe(sectionOne);
sectionTwoObserver.observe(sectionTwo);



// Function
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.height = "80px";
    } else {
        nav.style.height = "128px"
    }
}

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