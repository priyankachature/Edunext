var tl = gsap.timeline();
var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();
var tl5 = gsap.timeline();
var tl6 = gsap.timeline();
var tl7 = gsap.timeline();
var tl8 = gsap.timeline();
var tl9 = gsap.timeline();
var tl10 = gsap.timeline();
var tl11 = gsap.timeline();
var tl12 = gsap.timeline();
var tl13 = gsap.timeline();
var tl14 = gsap.timeline();
var tl15 = gsap.timeline();
var tl16 = gsap.timeline();
var tl17 = gsap.timeline();
var tl18 = gsap.timeline();


tl.from(".navbar", {
    
   opacity:0,
   scale:0,
   duration:.5
})

tl.from(".upper-navbar",{
    x:-100,
    opacity:0,
})

tl.from(".lower-navbar",{
    x:100,
    opacity:0
})

tl.from(".upper-navbar i",{
    opacity:0, 
    scale:0,
    repeat:-1,
    duration:1.5,
   
})

tl.from(".mid-lower-navbar .dropdown",{
    opacity:0,
    y:50,
    duration:.2,

})

tl1.from(" .homepage .left-homepage h2, .left-homepage h3",{
    
    y:100,
    opacity:0,
    duration:1,
    
})

tl2.from(".right-homepage img",{
    y:410,
    duration:1,
    opacity:0.5,
})


tl2.from(".homepage .home-form .form h2",{
    opacity:0,
    scale:0,
    x:100,
    duration:1,
    scrollTrigger:{
        trigger:".form",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:true,
    }
  
})

tl2.from(".homepage .home-form input",{
    y:20,
    stagger:.2,
    duration:1,

    scrollTrigger:{
        trigger:".form",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:true,
    }
    
})

tl2.from(".home-form button",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".form",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:true
    }
    
})

tl2.from(" .upper-services h3 ,.upper-services h2 , .upper-services p",{
    opacity:0,
    y:20,
    duration:.3,
    stagger:.2, 

    scrollTrigger:{
        trigger:".upper-services h3 ,.upper-services h2 , .upper-services p",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 80%",
        scrub:true,

    }
})


tl2.from(".mid-services .btn-1",{
    y:20,
    opacity:0,
    duration:.5,
    stagger:.2,

    scrollTrigger:{
        trigger:".mid-services .btn-1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 80%",
        scrub:true,

    }
})

tl2.from(".lower-services .cards .card",{
    y:20,
    duration:.5,
    opacity:0,
    stagger:.2,

    scrollTrigger:{
        trigger:".lower-services .cards .card",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,

    }
})



tl3.from(".left-mobile-app ,.left-mobile-app img",{
    y:50,
    duration:.5,
    opacity:0,
    scale:0,
    stagger:.2,

    scrollTrigger:{
        trigger:".left-mobile-app ,.left-mobile-app img",
        scroller:"body",
        // markers:true,
        start:"top 130%",
        end:"top 80%",
        scrub:true,
        stagger:.2

    }
})

tl4.from(".right-mobile-app h3 , .right-mobile-app h2, .right-mobile-app p",{
    y:20,
    duration:.5,
    opacity:0,
    stagger:.2,

    scrollTrigger:{
        trigger:".right-mobile-app h3 , .right-mobile-app h2, .right-mobile-app p",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,
        stagger:.2

    }
})

tl4.from(".right-mobile-app .store-btn",{
    x:20,
    duration:.5,
    opacity:0,

    scrollTrigger:{
        trigger:".right-mobile-app .store-btn",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,
        

    }
})

tl5.from(".upper-about-us h3 , .upper-about-us h2, .upper-about-us p",{
    y:40,
    duration:1,
    opacity:0,
    stagger:.2,

    scrollTrigger:{
        trigger:".upper-about-us h3 , .upper-about-us h2, .upper-about-us p",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:true,

    }

    
})

tl5.from(".mid-about-us .about-btn",{
    y:40,
    duration:1,
    opacity:0,
    stagger:.2,

    scrollTrigger:{
        trigger:".mid-about-us .about-btn",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:true,

    }
})

tl6.from(".upper-why-edunext h3, .upper-why-edunext h2, .upper-why-edunext p",{
    y:40,
    duration:.8,
    stagger:.2,
    opacity:0,

    scrollTrigger:{
        trigger:".upper-why-edunext h3, .upper-why-edunext h2, .upper-why-edunext p",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,

    }
    
})


tl6.from(".mid-why-edunext ",{
    y:20,
    duration:1.3,
    opacity:0,
    scale:0.8,
    transformOrigin:"center",

    scrollTrigger:{
        trigger:".mid-why-edunext",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:true,

    }
    
})

tl7.from(".left-lower-why-edunext h2, .left-lower-why-edunext p , .left-lower-why-edunext a",{
    y:40,
    x:20,
    duration:1,
    opacity:0,

    scrollTrigger:{
        trigger:".left-lower-why-edunext h2, .left-lower-why-edunext p , .left-lower-why-edunext a",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,

    }

    
})

tl8.from(".right-lower-why-edunext",{
    opacity:0,
    scale:0,
    duration:1.5,

    scrollTrigger:{
        trigger:".right-lower-why-edunext",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 70%",
        scrub:true,

    }
})

tl9.from(".client .upper-client h3 , .upper-client h2",{
    y:40,
    duration:.5,
    stagger:.2,
    opacity:0,

    scrollTrigger:{
        trigger:".client .upper-client h3 , .upper-client h2",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 70%",
        scrub:true,

    }
})

tl10.from(".lower-client div img",{
    opacity:0,
    duration:.5,
    stagger:.2,

    scrollTrigger:{
        trigger:".lower-client div img",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,

    }
})


tl10.from(".left-achievement h4, .left-achievement h2, .left-achievement p",{
    x:50,
    y:40,
    duration:1,
    opacity:0,
    stagger:.1,

    scrollTrigger:{
        trigger:".left-achievement h4, .left-achievement h2, .left-achievement p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:true,

    }
})

tl11.from(".right-achievement",{
    opacity:0,
    scale:.5,
    duration:1.5,

    scrollTrigger:{
        trigger:".right-achievement",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:true,

    }

})


tl12.from(".testimonials .left-testimonials h4 ,.left-testimonials h2, .left-testimonials p",{
    y:40,
    opacity:0,
    duration:.5,
    stagger:.2,

    scrollTrigger:{
        trigger:".testimonials .left-testimonials h4 ,.left-testimonials h2, .left-testimonials p",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,

    }
})

tl13.from(".upper-contact-us h3, .upper-contact-us h2, .upper-contact-us p",{
    y:20,
    opacity:0,
    duration:.5,
    stagger:.2,

    scrollTrigger:{
        trigger:".upper-contact-us h3, .upper-contact-us h2, .upper-contact-us p",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:true,

    }
})

tl14.from(".mid-contact-us .left-mid-contact-us h3, .left-mid-contact-us hr, .left-mid-contact-us p, .left-mid-contact-us i ",{
    x:-30,
    opacity:0,
    duration:1,
    stagger:.2,

    scrollTrigger:{
        trigger:".upper-contact-us h3, .upper-contact-us h2, .upper-contact-us p",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 0%",
        scrub:true,

    }
  
})

tl15.from(".lower-contact-us .lower-contact-us-card h4, .lower-contact-us-card hr, .lower-contact-us-card p ,.lower-contact-us-card i",{
    x:-20,
    opacity:0,
    duration:.5,
    stagger:.2,

    scrollTrigger:{
        trigger:".lower-contact-us .lower-contact-us-card h4, .lower-contact-us-card hr, .lower-contact-us-card p ,.lower-contact-us-card i",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 50%",
        scrub:true,

    }


})

tl16.from(".sales-enquiry button",{
    opacity:0,
    scale:0.5,
    duration:1,

    scrollTrigger:{
        trigger:".sales-enquiry button",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:true,

    }
})

tl17.from(".footer-content .left-footer-content img",{
    scale:0,
    opacity:0,
    duration:1.8,
    repeat:-1
})











