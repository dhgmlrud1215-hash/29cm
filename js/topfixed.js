$(function(){
    const stickyPoint = $("#main").offset().top;

    $(window).on("scroll", function(){
        if($(window).scrollTop() > stickyPoint) {
            $("#main").addClass("sticky");
            $(".mtop_menu").addClass("sticky");
        } else {
            $("#main").removeClass("sticky");
            $(".mtop_menu").removeClass("sticky");
        }
    });
});