//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Text animation
document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["Imagine.", "Believe.", "Achieve!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) +
        '<span aria-hidden="true" id="typing-text"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }else{
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

  // start the text animation
  StartTextAnimation(0);
});

// var loader = document.getElementById("preloader");
// var navbar = document.getElementById("scroll-spy");

// window.addEventListener("load", function () {
//   setTimeout(function(){        
//     loader.style.display = "none";
//     navbar.classList.add('fixed-top');
// },1000)});

  // window.addEventListener("DOMContentLoaded", function () {
  // loader.style.display = "none";
  // navbar.classList.add('fixed-top');

  /*load some scripts later since defer doesnt work for DOMContentLoaded*/
  // var recaptchaScript = document.createElement('script');
    // recaptchaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-149404272-1";
    // recaptchaScript.defer = true;
    // document.body.appendChild(recaptchaScript);

    // Google analytics
    // window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   dataLayer.push(arguments);
    // }
    // gtag("js", new Date());

    // gtag("config", "UA-149404272-1");
// });

// document.addEventListener("scroll",lazyload);
// make event listeners passive to improve scrolling performance
// document.addEventListener('touchstart', onTouchStart, {passive: true});



// const barItems = document.querySelectorAll('.bar-item')
// const sections = document.querySelectorAll('.prize_box')

// console.log(barItems)

// barItems.forEach( item => {
//   item.addEventListener('click' , ()=>{
//     barItems.forEach(items =>items.classList.remove('active_1'))

//     const target = item.getAttribute('data-target');
//     item.classList.add('active_1');
//     document.querySelector(`[data-section="${target}"]`).classList.add('active_1');
//   })
// })