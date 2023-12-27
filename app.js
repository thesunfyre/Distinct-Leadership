gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline()
tl.from("#Bookings", { opacity: 0, duration: 1, ease: "power2", y: -100 })
tl.from('.showcase', { opacity: 0, duration: 2, x: 100, ease: 'bounce' })

gsap.from('.read-more', {
    scrollTrigger: {
        trigger: '.read-more',
        start:"top center",
        end:"bottom bottom",
    },
    y: 75,
    opacity: 0,
    duration: 0.2,
})

gsap.from('.card-class', {
    scrollTrigger: {
        trigger: '.card-class',
        start:"top center",
        end:"bottom bottom",
    },
    x: 150,
    opacity: 0,
    duration: 2,

})