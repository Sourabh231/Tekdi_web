
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-bar-container');
  var logoImg = document.querySelector('.logo-img');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    logoImg.src = './Images/logo_tekdi.png'
  } else {
    navbar.classList.remove('scrolled');
    logoImg.src = './Images/main-logo.png'; // Reset the logo image source
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