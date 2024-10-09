// announcement

// mobile only slider grid layout
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
      var swiper = new Swiper('.custom-swipe-mobile', {
        slidesPerView: 1,    // You can adjust how many slides you want to show
        spaceBetween: 10,
         navigation: {
          nextEl: ".swiper-ann-btn-next",
          prevEl: ".swiper-ann-btn-prev",
        },
      });
    }
  });
  
// Check if there are more than 1 slide
document.addEventListener('DOMContentLoaded', function() {
    var slideCount = document.querySelectorAll('.announcement_sliers .swiper-slide').length;
  
    if (slideCount > 1) {
      var swiper = new Swiper(".announcement_sliers", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-ann-btn-next",
          prevEl: ".swiper-ann-btn-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        },
      });
    } else {
      // Hide arrows if there's only one slide
      document.querySelector('.swiper-ann-btn-prev').style.display = 'none';
      document.querySelector('.swiper-ann-btn-next').style.display = 'none';
    }
  });
  
   
  // end announcement