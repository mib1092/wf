$(document).ready(function() {

    //for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function () {
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    // for empty links
    $('.prevent').on('click', function(event){
        event.preventDefault();
    });

    $(function() {
        var top_nav = $('.top-navbar .top-nav');

        top_nav.find('a').focus(function(){
            top_nav.addClass('active');
        }).blur(function(){
            top_nav.removeClass('active');
        });
    });

    // for FAQs accordion
    // $(".accordion-list > li > a").on('click', function () {
    //     $(this).toggleClass('active').parent().find('.accordion-box-content').slideToggle(500);
    // });

    //for select
    if ( $('.select-box').length ) {
        $('.select-box select').select2();
    }

    // for modal
    if ( $('a.popup-video').length ) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

});
