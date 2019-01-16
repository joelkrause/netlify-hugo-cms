$(document).ready(function () {
    $(window).scroll(function () {
        var sticky = $('.scrolling--header'),
            scroll = $(window).scrollTop();
        if (scroll >= 250) {
            sticky.addClass('scrolled')
        } else {
            sticky.removeClass('scrolled');
        }
    });
});