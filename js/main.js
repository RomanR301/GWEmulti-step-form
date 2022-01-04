"use strict";

window.addEventListener('scroll', function () {
  var scrollpos = window.scrollY;

  if (scrollpos >= 20) {
    $('.header').addClass('js-scroll-down');
  } else {
    $('.header').removeClass('js-scroll-down');
  }
});
$('.burger').click(function () {
  $('.burger').toggleClass('js-active');
  $('.nav').toggleClass('js-active');
  $('body').toggleClass('js-lock');
});

$('.questions-item__header').click(function () {
  $(".questions-item__body").not($(this).next()).slideUp(300);
  $(this).next().slideToggle(300);
  $(".questions-item").not($(this).closest(".questions-item")).removeClass("js-active");
  $(this).closest(".questions-item").toggleClass("js-active");
});

var answersYes = [];
var answersNo = [];
$('.form-card').click(function () {
  if ($(this).hasClass('person')) {
    $(this).parents('.form-container.start').hide();
    $('.form-container.person').show();
  } else if ($(this).hasClass('company')) {
    $(this).parents('.form-container.start').hide();
    $('.form-container.company').show();
  } else {
    $(this).parents('.form-item').hide();
    $(this).parents('.form-item').next('.form-item').show();

    if ($(this).hasClass('yes')) {
      answersYes.push($(this));

      if ($(this).parents('.form-item').hasClass('last')) {
        if (answersNo.length === 0) {
          $('.form-message.apply').css('display', 'block');
        } else if (answersNo.length >= 1 && answersYes.length >= 1) {
          $('.form-message.with-inputs').css('display', 'flex');
        }
      }
    } else if ($(this).hasClass('no')) {
      answersNo.push($(this));

      if ($(this).parents('.form-item').hasClass('last')) {
        if (answersYes.length === 0) {
          $('.form-message.cancel').css('display', 'block');
        } else if (answersYes.length >= 1 && answersYes.length >= 1) {
          $('.form-message.with-inputs').css('display', 'flex');
        }
      }
    }
  }
});

var swiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 300,
  pagination: {
    el: '.reviews-pagination',
    clickable: true
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
