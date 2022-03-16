const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".hero");
const sectionTwo = document.querySelector(".contact")

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


sectionOneObserver.observe(sectionOne);
sectionTwoObserver.observe(sectionTwo);