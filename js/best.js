$(function(){

    $(".bestgroup > li:not("+$(".best_sub li a.live").attr("href")+")").hide();

    $(".best_sub li a").click(function(e){

        e.preventDefault();

        $(".best_sub li a").removeClass("live");
        $(this).addClass("live");
        $(".bestgroup>li").hide();
        $($(this).attr("href")).css("display","grid");
        return false;

    })
});