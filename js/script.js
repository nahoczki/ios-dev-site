gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let timelineEntries = gsap.utils.toArray(".timeline-item")

let anim = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    markers: true,
    scrollTrigger: {
        trigger: ".timeline-container",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".timeline-container").offsetWidth
    }
});

timelineEntries.forEach((entry, i) => {
    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: `.line-${i}`,
            start: "left 45%",
            end: "left 40%",
            scrub: 1,
            containerAnimation: anim,
            // markers: true
        },
    });

    t1.from(`.line-${i}`, {
        y: -2000,
        opacity: 0,
        duration: 2
    });
})


window.onscroll = function () { window.scrollTo(0, 0); };

const hideWelcomeScreen = () => {
    gsap.to("#welcome_screen", {y: "-100vh", duration: 1.25, ease: "power4.out"}).delay(0)
    window.onscroll = function () {};
}

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

const runCode = async () => {
    let emailElement = document.getElementById("email-field")
    let passwordElement = document.getElementById("password-field")

    let first = document.getElementById("first")
    let second = document.getElementById("second")
    let third = document.getElementById("third")
    let fourth = document.getElementById("fourth")
    let fifth = document.getElementById("fifth")

    let dic = {
        0: first,
        1: second,
        2: third,
        3: fourth,
        4: fifth
    }

    let consoleEl = document.getElementById('console')

    for (let i = 0; i <= 4; i++) {
        //Unhighlight
        for (let i = 0; i <= 4; i++) {
            dic[i].classList.remove('highlighted-yellow')
            emailElement.classList.remove("highlighted-yellow")
            passwordElement.classList.remove("highlighted-yellow")
        }

        dic[i].classList.add("highlighted-yellow")

        if (i === 1) {
            emailElement.classList.add("highlighted-yellow")
        } else if (i === 2) {
            passwordElement.classList.add("highlighted-yellow")
        } else if (i === 4) {
            consoleEl.innerHTML += "> welcome " + emailElement.value + "!<br/>"
        }

        await timer(1000);
    }

}


// Circle events

let circles = document.getElementsByClassName('pulsating-circle')
let tooltips = document.getElementsByClassName('tooltip')

Array.from(circles).forEach((circle, i) => {
    if (i > tooltips.length) {return}

    circle.addEventListener('mouseover', function handleMouseOver() {
        tooltips[i].style.opacity = "100%";

        // 👇️ if you used visibility property to hide div
        // hiddenDiv.style.visibility = 'visible';
    });

// ✅ (optionally) Hide DIV on mouse out
    circle.addEventListener('mouseout', function handleMouseOut() {
        tooltips[i].style.opacity = "0";

        // 👇️ if you used visibility property to hide div
        // hiddenDiv.style.visibility = 'hidden';
    });
})


