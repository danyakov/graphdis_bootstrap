$(function() {
     /* Top Menu class Toggle */
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 90) {
            $('.navbar').addClass('shadow-sm');
        }
        else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

});