
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+10 +"px"
    crsr.style.top =dets.y +"px"
    blur.style.left =dets.x - 125 +"px"
    blur.style.top =dets.y - 125 +"px"
})
var h4all = document.querySelectorAll("#nav h3");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25% ",
        end:"top -80%",
        scrub:2

    }
})

// page 3
let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            // Reset all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Set the active slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function currentSlide(n) {
            currentSlideIndex = n - 1;  // Adjust for 0-based index
            showSlide(currentSlideIndex);
        }

        // Automatic slide change every 3 seconds
        setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }, 3000);  // Change image every 3 seconds

        // Initialize the first slide
        showSlide(currentSlideIndex);

    // colon
    gsap.from("#colon1",{
        y:-50,
        x:-50,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 80%",
            bottom:"top 40%",
            scrub:4
        }
    })
    gsap.from("#colon2",{
        y:50,
        x:50,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 80%",
            bottom:"top 40%",
            scrub:4
        }
    })
    gsap.to("#hidden",{
        y:-20,
        scrollTrigger:{
            trigger:"#hidden",
            scroller:"body",
            scrub:2,
            start:"top 70% ",
            end:"top 50% "
        }
    })