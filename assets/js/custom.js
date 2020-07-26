$(document).ready(function() {
    $('.go-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 3000);
    });

    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    $('.my-nav .menu-list li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});