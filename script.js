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
    duration:.5,
  
})

tl2.from(".homepage .home-form input",{
    y:20,
    stagger:.2,
    duration:.5
    
})

tl2.from(".home-form button",{
    opacity:0,
    scale:0,
    duration:.8,
    
})

tl2.from(" .upper-services h3 ,.upper-services h2 , .upper-services p",{
    opacity:0,
    y:10,
    duration:.8,
    stagger:.2, 
})


tl2.from(".mid-services .btn-1",{
    y:10,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl2.from(".lower-services .cards .card",{
    y:20,
    duration:.5,
})



tl3.from(".left-mobile-app ,.left-mobile-app img",{
    y:50,
    duration:2,
    opacity:0,
    scale:0,
    stagger:.2
})

tl4.from(".right-mobile-app h3 , .right-mobile-app h2, .right-mobile-app p",{
    y:20,
    duration:.5,
    opacity:0,
    stagger:.2
})

tl4.from(".right-mobile-app .store-btn",{
    x:20,
    duration:.5,
    opacity:0
})

tl5.from(".upper-about-us h3 , .upper-about-us h2, .upper-about-us p",{
    y:20,
    duration:.5,
    opacity:0,
    stagger:.2,
})

tl5.from(".mid-about-us .about-btn",{
    y:10,
    duration:.3,
    opacity:0,
    stagger:.2
})

tl6.from(".upper-why-edunext h3, .upper-why-edunext h2, .upper-why-edunext p",{
    y:20,
    duration:.5,
    stagger:.2,
    opacity:0
})


tl6.from(".mid-why-edunext ",{
    y:20,
    duration:1.3,
    opacity:0,
    scale:0.8,
    transformOrigin:"center",
    
})

tl7.from(".left-lower-why-edunext h2, .left-lower-why-edunext p , .left-lower-why-edunext a",{
    y:30,
    duration:1,
    opacity:0
})

tl8.from(".right-lower-why-edunext",{
    opacity:0,
    scale:0,
    duration:1.5,
})

tl9.from(".client .upper-client h3 , upper-client h2",{
    y:20,
    duration:.5,
    stagger:.2,
    opacity:0
})

tl10.from(".lower-client div img",{
    opacity:0,
    duration:.5,
    stagger:.2
})


tl10.from(".left-achievement h4, .left-achievement h2, .left-achievement p",{
    x:20,
    y:10,
    duration:.3,
    opacity:0,
    stagger:.1
})

tl11.from(".right-achievement",{
    opacity:0,
    scale:.5,
    duration:2,

})


tl12.from(".testimonials .left-testimonials h4 ,.left-testimonials h2, .left-testimonials p",{
    y:20,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl13.from(".upper-contact-us h3, .upper-contact-us h2, .upper-contact-us p",{
    y:20,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl14.from(".mid-contact-us .left-mid-contact-us h3, .left-mid-contact-us hr, .left-mid-contact-us p, .left-mid-contact-us i ",{
    x:-20,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl15.from(".lower-contact-us .lower-contact-us-card h4, .lower-contact-us-card hr, .lower-contact-us-card p ,.lower-contact-us-card i",{
    x:-20,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl16.from(".sales-enquiry button",{
    opacity:0,
    scale:0.5,
    duration:1
})

tl17.from(".footer-content .left-footer-content img",{
    scale:0,
    opacity:0,
    duration:1.8,
    repeat:-1
})











