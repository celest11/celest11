$(document).ready(function() {
    $('.list-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: true,
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.transact-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.2,

                }
            }
        ]
    });

    $('.folio-slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1.4,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,

                }
            }
        ]
    });


    if ($(window).width() <= 767) {
        $('.sip-slider, .stp-slider, .swp-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            autoplay: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 545,
                    settings: {
                        slidesToShow: 1.4,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1.1,
                        arrows: false,

                    }
                }
            ]
        });
    }

    $('.equity-slider, .debt-slider, .gold-slider, .liquid-slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 445,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1.2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    $('.list-slider, .equity-slider, .debt-slider, .gold-slider, .liquid-slider, .sip-slider, .stp-slider, .swp-slider').slick('setPosition');
})