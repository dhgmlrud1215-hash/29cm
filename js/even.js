$(function(){
    $(".event-tab li").click(function(e){
        e.preventDefault();

        const target = $(this).data("target");

        $(".event-tab li").removeClass("active");
        $(this).addClass("active");

        $(".tab-group").removeClass("active");
        $("#" + target).addClass("active");
    });
});