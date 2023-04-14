AOS.init({ duration: 600, anchorPlacement: "center-bottom" });

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

// window.addEventListener("scroll", testScroll);
// var viewed = false;

// function isScrolledIntoView(elem) {
//   var docViewTop = window.scrollY;
//   var docViewBottom = docViewTop + window.innerHeight;

//   var elemTop = elem.offsetTop;
//   var elemBottom = elemTop + elem.offsetHeight;

//   return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }

// function testScroll() {
//   if (isScrolledIntoView(document.querySelector(".milestone-number")) && !viewed) {
//     viewed = true;
//     var numberHolders = document.querySelectorAll(".number-holder");
//     numberHolders.forEach(function (numberHolder) {
//       var counter = 0;
//       var textContent = parseInt(numberHolder.textContent, 10);
//       var animation = setInterval(function () {
//         counter++;
//         numberHolder.textContent = Math.ceil((counter * textContent) / 100);
//         if (counter >= 100) {
//           clearInterval(animation);
//         }
//       }, 40);
//     });
//   }
// }


// *** Countdown logic Starts ***

// var date_str = new Date("2023-04-15T03:00:00.000Z"); //.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
// var countDownDate = Date.parse(date_str);

// // var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
// // var countDownDate = new Date(utc + (3600000*+5.5));

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get today's date and time
//   // var now = new Date().getTime();

//   // Get today's date and time in ist
//   // d = new Date();
//   // utc = d.getTime() + (d.getTimezoneOffset() * 60000);
//   // nd = new Date(utc + (3600000*+5.5));
//   // var now =  nd;

//   var now_str = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
//   var now = Date.parse(now_str);

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("countdown-day").innerHTML=days;
//   document.getElementById("countdown-hour").innerHTML=hours;
//   document.getElementById("countdown-minute").innerHTML=minutes;
//   document.getElementById("countdown-second").innerHTML=seconds;

//   // If the count down is finished in corner cases
//   // reset the count to next day, this makes the
//   // timer on forever loop
//   if (distance < 0) {
//     countDownDate = getNeverEndingDate();
//   }
// }, 1000);
// *** Countdown logic Ends ***

// ***Prize section Scripts Starts Here ***
const navbarItems = document.querySelectorAll('.navbar-prize-item');
const prizeCardContainers = document.querySelectorAll('.prize-card-container-main');

navbarItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    prizeCardContainers.forEach(container => {
      container.classList.add('hidden');
    });
    prizeCardContainers[index].classList.remove('hidden');
    navbarItems.forEach(item => {
      item.classList.remove('active-prize-item');
    });
    item.classList.add('active-prize-item');
  });
});
// ***Prize section Scripts Ends Here ***

// *** GSAP Starts ***
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
let speed = 200;

let scene1 = gsap.timeline();

ScrollTrigger.create({
  animation: scene1,
  trigger: "#hero",
  start: "top top",
  end: "80% center",
  scrub: 3,
  pin: true,
});

scene1.to("#skateperson", { x: -160, y: 50 });

gsap.to("#h2-1", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 2,
  },
});

gsap.to("#skateperson", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 2,
  },
});

gsap.to("#h2-2", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-3", {
  yPercent: 60,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-4", {
  yPercent: 80,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-5", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-6", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

// *** GSAP Ends ***