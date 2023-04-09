const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
        snap: 1 / (sections.length - 1),
        // markers: true,
    }
});

// gsap.to(mask, {
//     width: "100%",
//     scrollTrigger: {
//         trigger: ".wrapper",
//         start: "top left",
//         scrub: 1
//     }
// })

sections.forEach(section => {
    let text = section.querySelectorAll('.anim')

    gsap.from(text, {
        y: -30,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.2,
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            // markers: true
        }
    })
});
