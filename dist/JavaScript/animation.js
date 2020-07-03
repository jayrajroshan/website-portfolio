var tl = gsap.timeline();

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    tl.from("nav", {y: -50, opacity: 0})
      .from(".anim1", {x: -50, opacity: 0})
      .from(".anim2", {x: -50, opacity: 0})
      .from(".anim-img", {x: 50, opacity: 0},)
      .from(".resume", {x: -50, opacity: 0});

}

else{
    tl.from("nav", {y: -50, opacity: 0})
      .from(".anim1", {x: -50, opacity: 0})
      .from(".anim2", {x: -50, opacity: 0})
      .from(".resume", {x: -50, opacity: 0})
      .from(".anim-img", {x: 50, opacity: 0}, "-=1.5")
      .from(".scroll", {opacity: 0});
    }

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-h1',
        start: "top center+=200px",
    }
})

tl1.from(".about-h1", {x: 200, opacity:0})
tl1.from(".about-p", {x: 200, opacity:0})
tl1.from(".about-img", {x: -200, opacity:0}, "-=1")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills-anim',
        start: "top center+=100px",
    }
})

tl2.from(".skills-anim", {y: 50, opacity:0})
tl2.from(".cards_item", {y: 50, opacity:0, stagger: 0.3})
