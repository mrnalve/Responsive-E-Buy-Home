$(function () {
    "use strict";

    let menuOffset = $('#nav').offset().top;
    // window scroll
    $(window).scroll(function () {
        let winscroll = $(window).scrollTop();
        if (winscroll > menuOffset) {
            $('#nav').addClass('menufixed');
        } else {
            $('#nav').removeClass('menufixed');
        }
        // backtop button
        if (winscroll > 400) {
            $('.backtop').fadeIn(500);
        } else {
            $('.backtop').fadeOut(500);
        }
    });
    
    // preloader
    // $(window).load(function () {
    //     $('.preloader').delay(1000).fadeOut(1000);
    //   });

    // backtop button click
    $('.backtop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    // slick slider
    $('#banner_part').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<span class="arrow left_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="arrow right_arrow"><i class="fas fa-chevron-right"></i></span>'
    });
    // Aos animation
    AOS.init();
    // mixitup
    var mixer = mixitup('.mixitup');
    // water ripple
    $('#new_product').ripples({
        dropRadius: 10,
        perturbance: 0.01,
        resolution: 256,
        interactive: true
    });

    //   typed js
    var typed = new Typed('.type', {
        strings: [
            'Trendy', 
            'Unique',
            'Awesome',
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });
});