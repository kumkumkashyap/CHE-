gsap.from(".cont1 .box2 img",{
    opacity:0,
    duration:3,
    delay:1
})
gsap.from(".cont1 .box1 h2",{
    x:-555,
    opacity:0,
    duration:2,
    delay:1
})
gsap.from(".cont1 .box1 p",{
    x:-555,
    opacity:0,
    duration:2,
    delay:1
})

gsap.from(".cont2 .box1",{
    opacity:1,
    y:555,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".cont2",
        scroller:"body",
        start:"top 50%",
        scrub:3,

    }
})
gsap.from(".cont3 h2",{
    opacity:1,
    y:555,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".cont3 ",
        scroller:"body",
        start:"20% 50%",
        


    }
})
gsap.from(".cont3 p",{
    opacity:1,
    y:555,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".cont3",
        scroller:"body",
        start:"20%  50%",
        start:"20% 50%",


    }
})
