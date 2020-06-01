$(document).ready(function() {
    $('.slider__container').slick({
        dots: false,
        autoplay: true,
        infinite: true
    });
	
	$('.footer__slider').slick({
        dots: false,
        autoplay: true,
        prevArrow: '<i class="fas fa-angle-left footer__navLeft"></i>',
        nextArrow: '<i class="fas fa-angle-right footer__navRight"></i>',
        infinite: true
    });
	
	$('.multiSlider')
        .jcarousel({
            items: '.multiSlider__item',
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
});