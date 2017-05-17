$(document).ready(function() {

    //for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function () {
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    // for modal
    if ( $('a').is('.popup-video')) {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    // for FAQs accordion
    $(".accordion-list > li > h2").on('click', function () {
        $(this).toggleClass('active').parent().find('.accordion-box-content').slideToggle(500);
    });
});
