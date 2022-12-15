gsap.registerPlugin(ScrollTrigger);

let timelineEntries = gsap.utils.toArray(".info-box")

timelineEntries.forEach((entry, i) => {
    let scroll_TL = gsap.timeline({
        scrollTrigger: {
            trigger: `.box${i}`,
            // markers: true,
            start: "top 40%",
            end: "top 20%",
            toggleActions: 'play reverse restart reverse ',
            toggleClass: {targets: `.box${i}`, className: "active"}
        }
    });

    scroll_TL.fromTo(
        `.box${i}`,
        {scale: 0.7},
        {scale: 1.15}
    )
})


// Nav scroll stuff
window.onscroll = function() {scrollFunction()};

let swiftUINav = document.getElementById("swiftUI_nav");
let uikitNav = document.getElementById("uikit_storyboard_nav");
let swiftUINavTemp = document.getElementById("swiftUI_nav_temp");

function scrollFunction() {

    let screenPosition = swiftUINav.getBoundingClientRect();
    let screenPositionOriginal = swiftUINavTemp.getBoundingClientRect();


    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        uikitNav.classList.add('small-nav');
        uikitNav.classList.remove('sticky-nav');
    } else {
        uikitNav.classList.add('sticky-nav');
        uikitNav.classList.remove('small-nav');
    }

    console.log(screenPositionOriginal.top)

    if (screenPosition.top < 20) {
        swiftUINav.classList.add(...["sticky-nav", "small-nav"])
        uikitNav.classList.add("move-up")
    }

    if (screenPositionOriginal.top > 20) {
        swiftUINav.classList.remove(...["sticky-nav", "small-nav"])
        uikitNav.classList.remove("move-up")
    }

}

// Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}