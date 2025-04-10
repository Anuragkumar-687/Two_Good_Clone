function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
  
  function loadingAnimation() {
    gsap.from('#page1 h1 ', {
      y: 100,
      opacity: 0,
      delay: 0.1,
      duration: 0.5,
      stagger: 0.3
    })
    gsap.from('#page1 img ', {
      scale: 0,
      opacity: 0,
      delay: 1,
      duration: 0.5,
      stagger: 0.3
    })
  }
  loadingAnimation()
  
  function cursorAnimation() {
    document.addEventListener('mousemove', function (dets) {
      gsap.to('#cursor', {
        left: dets.x,
        top: dets.y
      })
    })
    document.querySelectorAll('.child').forEach(function (element) {
      element.addEventListener('mouseenter', function () {
        gsap.to('#cursor', {
          transform: `translate(-50%,-50%) scale(1)`
        });
      });
    });
    document.querySelectorAll('.child').forEach(function (element) {
      element.addEventListener('mouseleave', function () {
        gsap.to('#cursor', {
          transform: `translate(-50%,-50%) scale(0)`
        });
      });
    });
  }
  cursorAnimation() 
  
  function nav(){
    var menu = document.querySelector('#icons #menu')
    var cross = document.querySelector('#full i')
    var tl = gsap.timeline()
  
    tl.to('#full',{
        top:0,
        duration: 0.5,
    })
    tl.from('h4',{
        y:40,
        duration:0.1,
        stagger:0.05,
        opacity:0,
    }) 
  
    tl.pause()
  
    menu.addEventListener('click',function(){
      tl.timeScale(1); 
         tl.play()
    })
  
    cross.addEventListener('click', function () {
      tl.timeScale(3);  
      tl.reverse();
    });
  }
  nav()
  
  // function nav2(){
  //   var cart = document.querySelector('#icons #cart');
  //   var cross = document.querySelector('#full2 i');
  //   var tl = gsap.timeline();
  
  //   // Open full2 (slide it down from the top)
  //   tl.to('#full2', {
  //     top: 0,
  //     duration: 0.5,
  //   });
  
  //   // Animate elements inside #full2
  //   tl.from('#full2 h4', {
  //     y: 40,
  //     duration: 0.1,
  //     opacity: 0,
  //     stagger: 0.05,
  //   });
  
  //   // Pause the timeline to start only when triggered
  //   tl.pause();
  
  //   // Click event to trigger the open animation
  //   cart.addEventListener('click', function(){
  //     tl.timeScale(1); 
  //     tl.play();
  //   });
  
  //   // Click event to trigger the close animation (slide it back up)
  //   cross.addEventListener('click', function(){
  //     tl.timeScale(3);
  //     tl.reverse();
  //   });
  // }
  // nav2();
  
  function nav2() {
    var cart = document.querySelector('#icons #cart');
    var cross = document.querySelector('#full2 i');
    var tl = gsap.timeline();
  
    // Open #full2 (slide it down from the top)
    tl.to('#full2', {
      top: 0,
      duration: 0.5,
    });
  
    // Animate the text infinitely (you can customize this to make it loop)
    tl.from('#full2 h4', {
      y: 40,
      duration: 0.1,
      opacity: 0,
      stagger: 0.05,
    });
  
    // Infinite scroll animation on text inside #full2
    gsap.to('#full2 h4', {
      y: -200, // Move the text upwards
      duration: 10, // Duration for the full scroll
      repeat: -1,  // Repeat indefinitely
      yoyo: true,  // Reverse the direction for a bounce effect
      ease: 'none', // No easing to make it move smoothly
      delay: 1, // Optional delay before starting the animation
    });
  
    // Pause the timeline to start only when triggered
    tl.pause();
  
    // Click event to trigger the open animation
    cart.addEventListener('click', function () {
      tl.timeScale(1);
      tl.play();
    });
  
    // Click event to trigger the close animation (slide it back up)
    cross.addEventListener('click', function () {
      tl.timeScale(3);
      tl.reverse();
    });
  }
  
  nav2();