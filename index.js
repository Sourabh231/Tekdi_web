// var navbar = document.querySelector('.nav-bar-container')

// window.onscroll = function() {

//   // pageYOffset or scrollY
//   if (window.pageYOffset > 0) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   }
// }

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-bar-container');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//-----------------------------------------------------/ 


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });