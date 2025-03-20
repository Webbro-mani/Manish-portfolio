// var crsr = document.querySelector("#cursor")
// var blurr = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     // crsr.style.top = dets.y+"px"
//     // crsr.style.left = dets.x+"px"
//      blurr.style.top = dets.y-150+"px"
//     blurr.style.left = dets.x-150+"px"
// })

     text  = "Front-End Developer|";
    let index = 0;
    function typeEffect(){
        if(index < text.length){
            document.querySelector(".profession").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

// blinking-effect
let texts = document.querySelector(".webcoder");
setInterval(()=>{
    texts.style.opacity = texts.style.opacity === "0" ? "1" : "0";
},1000);

let svg = document.getElementById("rotating-svg");
    
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;  // Scroll ki value lena
        let rotation = scrollTop % 360;  // Rotation angle calculate karna
        svg.style.transform = `rotate(${rotation}deg)`; // Rotation apply karna
    });


 function Darkmode() {
            let body = document.body;
            let icon = document.getElementById("theme-icon");

            // Toggle dark mode class
            body.classList.toggle("dark-mode");

            // Change icon dynamically
            if (body.classList.contains("dark-mode")) {
                icon.classList.replace("fa-sun", "fa-moon");
            } else {
                icon.classList.replace("fa-moon", "fa-sun");
            }
        }

// toggle navbar manu open and close functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbartoggler = document.querySelector('.navbar-toggler');
    const navbarcollapse = document.querySelector('#navbarNav');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(){
            if (navbarcollapse.classList.contains('show')) {
                navbartoggler.click();
            }
        });
    });
});  

$(document).ready(function(){
    $('.resume-items').click(function(){
       var clickeditem = $(this);
        
       clickeditem.css('background-color','var(--t-accent)');
       clickeditem.find('span').css('color', 'white');
       clickeditem.find('h5').css('color','black');

       clickeditem.off('click');
       console.log("remove event items")
    });
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".shapration",{
    opacity:0,
    duration:1,
    x:-50,
    stagger:1,
    scrollTrigger:{
        trigger:".shapration",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        opacity:1,
        scrub:2,
    }
})
    

    gsap.from(".footer-img-box",{
        opacity:0,
        x:90,
        duration:1,
        scrollTrigger:{
            trigger:".footer-img-box",
            scroller:"body",
            start:"top 60%",
            end:"top 45%",
            opacity:1,
            scrub:2,
        }
    })

    function myhirebutton(){
        const list=document.querySelector(".hire-btn").classList;
        list.add("hires-btn");
    }

    function brandName(element, color){
        element.style.color = color;
    }


gsap.from("#cv",{
    y:-50,
    opacity:0,
    duration:1,
})

gsap.from(".page-buttons",{
    x:-50,
    opacity:0,
    duration:1,
})

gsap.matchMedia().add("(min-width: 768px)", () => {
    gsap.to("#myworks", {
        x: -170,
        duration: 2,
        repeat: -1,
    });
});


// gsap.from(".service-heading",{
//     opacity:0,
//     y:50,
//     duration:1,
//     scrollTrigger:{
//         trigger:".service-heading",
//         scroller:"body",
//         start:"top 60%",
//         end:"55%",
//         opacity:1,
//         scrub:2,
//     }
// })


// gsap.from(".service-items",{
//     x:50,
//     opacity:0,
//     duration:0.5,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".service-items",
//         scroller:"body",
//         start:"top 60%",
//         end:"55%",
//         opacity:1,
//         scrub:2,
//     }
// })

gsap.from("#myresume",{
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#myresume",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})


gsap.from(".education",{
    y:-90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".education",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".resume-items",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".resume-items",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})


gsap.from("#left-box",{
    opacity:0,
    y:90,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#left-box",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from("#right-box",{
    opacity:0,
    y:90,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#right-box",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})
gsap.from(".portfolio-text",{
    opacity:0,
    x:-50,
    duration:1,
    scrollTrigger:{
        trigger:".portfolio-text",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".portfolio-box",{
    opacity:0,
    scale:0.5,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".portfolio-box",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".about-text",{
    opacity:0,
    x:-50,
    duration:1,
    scrollTrigger:{
        trigger:".about-text",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".about-me",{
    opacity:0,
    y:90,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".about-me",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".title",{
    opacity:0,
    y:-50,
    duration:1,
    scrollTrigger:{
        trigger:".title",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".fact-menu",{
    opacity:0,
    x:-50,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".fact-menu",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})


gsap.from(".mine-skill h1",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".mine-skill",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".skill-box .col-sm-2",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".skill-box",
        scroller:"body",
        start:"top 60%%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".Clients-heading",{
    opacity:0,
    y:90,
    duration:1,
    scrollTrigger:{
        trigger:".Clients-heading",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".Clients-box ",{
    opacity:0,
    y:90,
    duration:1,
    scrollTrigger:{
        trigger:".Clients-box ",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".contact-heading",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".contact-heading",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".form-control",{
    opacity:0,
    x:-50,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".form-control",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".btn-primary",{
    opacity:0,
    y:90,
    duration:1,
    scrollTrigger:{
        trigger:".btn-primary",
        scroller:"body",
        start:"top 100%",
        end:"top 100%",
        scrub:2,
        opacity:1,
    }

})

gsap.from(".bottom-social-icon a",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".bottom-social-icon a",
        scroller:"body",
        start:"top 60%",
        end: "top 45%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".footer-content",{
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".footer-content",
        scroller:"body",
        start:"top 100%",
        end:"top 65%",
        scrub:2,
        opacity:1,
    }
})

gsap.from(".whyIm",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".whyIm",
        scroller:"body",
        start:"top 100%",
        end:"top 45%",
        scrub:2,
        opacity:1,
    }
})


//scroller-progress
const scrollButton = document.querySelector('.scroll-to-top');
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', function(){
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrollHeight > 0) {
        const scrollPercent = (scrolled / scrollHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;

        if (scrolled > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    } else {
        progressBar.style.width = '0%';
        scrollButton.classList.remove('show');
    }
});

scrollButton.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
    });
});




