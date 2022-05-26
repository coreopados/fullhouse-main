$(document).ready(function () {

// main slider
  var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 4,
        spaceBetween:33,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          360: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,spaceBetween: 15,
          },
          // when window width is >= 991px
          991: {
            spaceBetween: 33
          }
        }
  });

  var swiper = new Swiper('.main-slider', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
      }
  });

  // out of town
  var swiper1 = new Swiper('.out-of-town-slider', {
    slidesPerView: 1,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    adaptiveHeight:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  // private build slider
  var swiper2 = new Swiper('.private-build-slider', {
    slidesPerView: 1,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    adaptiveHeight:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  // catalog-projects
  var swiper3 = new Swiper('.catalog-slider-1', {
    slidesPerView: 2,
    spaceBetween:45,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      // when window width is >= 991px
      768: {
        spaceBetween: 45,
        slidesPerView: 2,
      }
    }
  });

  //done projects
  var swiper4 = new Swiper('.done-projects', {
    slidesPerView: 2,
    spaceBetween:45,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      // when window width is >= 991px
      768: {
        spaceBetween: 45,
        slidesPerView: 2,
      }
    }
  });

  // useful-information
  var swiper5 = new Swiper('.useful-information', {
    slidesPerView: 2,
    spaceBetween:45,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      // when window width is >= 991px
      768: {
        spaceBetween: 45,
        slidesPerView: 2,
      }
    }
  });

  // partners-slider
  var swiper6 = new Swiper('.partners-slider', {
    slidesPerView: 5,
    spaceBetween:30,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      // when window width is >= 991px
      576: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 5,
      }

    }
  });


  
  $('.menu-button').on('click', function(event){
    event.preventDefault()
      $(this).toggleClass('active')
      $(".mob-menu").toggleClass('active')
  })

  $('.close-menu').on('click', function(event){
    event.preventDefault()
      $(".mob-menu,.menu-button").removeClass('active')
  })

  function desroySlider(){
    swiper3.destroy()
  }


  $('.tab-project a').on('click', function(event){
    event.preventDefault()
    desroySlider() 
    $('.screen-7 .scroll-slider').removeClass('active')
    $('.screen-7 .catalog-slider-'+$(this).attr('data-num')+'').addClass('active')

    var swiper3 = new Swiper('.catalog-slider-'+$(this).attr('data-num')+'', {
      slidesPerView: 2,
      spaceBetween:45,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },    
      breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        // when window width is >= 991px
        768: {
          spaceBetween: 45,
          slidesPerView: 2,
        }
      }
    });

    $('.tab-project a').removeClass('active')
    $(this).addClass('active')

  })


  $('.discount-block__icon').on('click', function(event){
    event.preventDefault()

      if($(this).hasClass('active')){
        $(this).removeClass('active')
        $('.more-info').slideUp()
      }else{
        $('.discount-block__icon').removeClass('active')
        $('.more-info').slideUp()
        $(this).addClass('active')
        $(this).parent().find('.more-info').slideDown()
      }
  })


  $('.screen-9 .ask').on('click', function(event){
    event.preventDefault()

    

      if($(this).hasClass('active')){
        $(this).next().slideUp()
        $('.screen-9 .ask').next().slideUp()
      }else{
        $('.screen-9 .ask').removeClass('active')
        $('.screen-9 .ask').next().slideUp()
        $(this).addClass('active')
       $(this).next().slideDown()
      }
  })

  $('.fixed-navigation a').on('click', function(){

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
 
    // $('.fixed-navigation a').prev().removeClass('active')
    // $(this).prev().addClass('active')
  })


  $('input[name="tel"]').inputmask("+7(999)-99-99-999");





  
});

$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".ask"); // тут указываем ID элемента
  var div2 = $(".discount-block__icon"); // тут указываем ID элемента
  var div22 = $(".discount-block__info .more-info"); // тут указываем ID элемента
  var div3 = $(".mob-menu.active"); // тут указываем ID элемента

  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.removeClass('active'); // скрываем его
    div.next().slideUp();
  }
  if (!div2.is(e.target) // если клик был не по нашему блоку
      && div2.has(e.target).length === 0) { // и не по его дочерним элементам
    div2.removeClass('active'); // скрываем его
    div22.slideUp();
  }

  if (!div3.is(e.target) // если клик был не по нашему блоку
      && div3.has(e.target).length === 0) { // и не по его дочерним элементам
        div3.removeClass('active'); // скрываем его
  }
});


$('.screen-main').on('click', function(){
  $('.mob-menu').removeClass('active')
})



var postion = $('#main-screen').offset().top,
      height = $('#main-screen').height(),
      postion2 = $('#out-of-town').offset().top ,
      height2 = $('#out-of-town').height(),
      postion3 = $('#discount').offset().top ,
      height3= $('#discount').height(),
      postion4 = $('#steps').offset().top ,
      height4 = $('#steps').height(),
      postion5 = $('#principes').offset().top ,
      height5 = $('#principes').height(),
      postion6 = $('#private-build').offset().top ,
      height6 = $('#private-build').height(),
      postion7 = $('#to-order').offset().top ,
      height7 = $('#to-order').height(),
      postion8 = $('#catalog').offset().top ,
      height8 = $('#catalog').height(),
      postion9 = $('#done-projects').offset().top,
      height9 = $('#done-projects').height(),
      postion10 = $('#faq').offset().top,
      height10 = $('#faq').height()
      postion11 = $('#information').offset().top ,
      height11 = $('#information').height(),
      postion12 = $('#partners').offset().top ,
      height12 = $('#partners').height(),
      postion13 = $('#contact').offset().top - 250 ,
      height13 = $('#contact').height() ,
      // postion14 = $('#contacts').offset().top - 600,
      // height14 = $('#contacts').height()
     

   


$(document).on('scroll', function (){

var scroll = $(document).scrollTop();

if(scroll >= postion && scroll < (postion + height) ) {
 $('.fixed-navigation ul li:nth-child(1) .circle-nav').addClass('active')
 }else {
    $('.fixed-navigation ul li:nth-child(1) .circle-nav').removeClass('active')
 }

 if(scroll  > postion2 && scroll < (postion2 + height2) ){
  $('.fixed-navigation ul li:nth-child(2) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(2) .circle-nav').removeClass('active')
}

if(scroll  > postion3 && scroll < (postion3 + height3) ){
  $('.fixed-navigation ul li:nth-child(3) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(3) .circle-nav').removeClass('active')
}

if(scroll  > postion4 && scroll < (postion4 + height4) ){
  $('.fixed-navigation ul li:nth-child(4) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(4) .circle-nav').removeClass('active')
}

if(scroll  > postion5 && scroll < (postion5 + height5) ){
  $('.fixed-navigation ul li:nth-child(5) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(5) .circle-nav').removeClass('active')
}

 if(scroll  > postion6 && scroll < (postion6 + height6) ){
  $('.fixed-navigation ul li:nth-child(6) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(6) .circle-nav').removeClass('active')
}
 if(scroll  > postion7 && scroll < (postion7 + height7) ){
  $('.fixed-navigation ul li:nth-child(7) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(7) .circle-nav').removeClass('active')
}
 if(scroll  > postion8 && scroll < (postion8 + height8) ){
  $('.fixed-navigation ul li:nth-child(8) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(8) .circle-nav').removeClass('active')
}
 if(scroll  > postion9 && scroll < (postion9 + height9) ){
  $('.fixed-navigation ul li:nth-child(9) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(9) .circle-nav').removeClass('active')
}
 if(scroll  > postion10 && scroll < (postion10 + height10) ){
  $('.fixed-navigation ul li:nth-child(10) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(10) .circle-nav').removeClass('active')
}
 if(scroll  > postion11 && scroll < (postion11 + height11) ){
  $('.fixed-navigation ul li:nth-child(11) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(11) .circle-nav').removeClass('active')
}
 if(scroll  > postion12 && scroll < (postion12 + height12) ){
  $('.fixed-navigation ul li:nth-child(12) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(12) .circle-nav').removeClass('active')
}
 if(scroll  > postion13 && scroll < (postion13 + height13) ){
  $('.fixed-navigation ul li:nth-child(13) .circle-nav').addClass('active')
}else {
   $('.fixed-navigation ul li:nth-child(13) .circle-nav').removeClass('active')
}
//  if(scroll  > postion14 && scroll < (postion14 + height14) ){
//   $('.fixed-navigation ul li:nth-child(14) .circle-nav').addClass('active')
// }else {
//    $('.fixed-navigation ul li:nth-child(14) .circle-nav').removeClass('active')
// }



  if ($(this).scrollTop() > 500) {
    $('.to-top').fadeIn();
} else {
    $('.to-top').fadeOut();
}




})