(function() {
    "use strict";
    $('#loader').delay(700).fadeOut();
    $('#mask').delay(1200).fadeOut("slow");	
	
	// Back to Top On Scroll
	$(window).on('scroll', function() {        
        if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
	
	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, 1000
		);
	});// END Back to Top On Scroll
	
	
    
    //WOW JS
    new WOW().init();
	


    // Full page BG
    $('.bg-full').each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
            'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), rgba(0, 0, 0, 0.4) url(' + $src + ')',
            'background-position': 'center top',
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-size': 'cover',
        });
        $(this).remove();
    });

    



    $('#video-item').magnificPopup({
        disableOn: 700,
        type: 'iframe',

        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
	
	$('.screenshot-items').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slide: 'div',
        cssEase: 'linear',
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        dots: true,
        centerPadding: '228px',
        arrows: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '188px',
            }
        }, {
            breakpoint: 970,
            settings: {
                arrows: false,
                centerPadding: '144px',
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerPadding: '0px',
            }
        }, {
            breakpoint: 350,
            settings: {
                arrows: false,
                centerPadding: '0px',
                dots: true,
                slidesToShow: 1,
            }
        }, ]
    });

    // $('.screenshot-items').slick({
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     dots: false,
    //     infinite: false,
    //     speed: 1000,
    //     fade: true,
    //     slide: 'div',
    //     cssEase: 'linear'
    // });

    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });


    if (document.getElementsByClassName("team").length) {
        var eventFired = false,
            objectPositionTop = $('.team').offset().top;
    }
    $(window).on('scroll', function() {
        // Counter On Scroll
        var currentPosition = $(document).scrollTop();
        if (currentPosition > objectPositionTop && eventFired === false) {
            eventFired = true;
            $('.number').each(function() {
                $(this).prop('count', 100).animate({
                    count: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

    });

    $('.carousel-control').on('click', function() {
        $('#tmCarousel').carousel($(this).data());
    });


    // Contact Form
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        $.post('mail/send.php', $(this).serialize()).done(function(data) {
            $('.contact-form').fadeOut('slow', function() {
                $('.contact-form').fadeIn('slow').html(data);
            });
        }).fail(function() {
            alert('SOMETHING WENT WRONG! PLEASE TRY AGAIN.');
        });
    });

})();