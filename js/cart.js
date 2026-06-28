$(function(){
    $(".similar").slick({
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        infinite: false,
        accessibility: true,
        focusOnChange: false
        
    });

    $(".like").on("keydown", function(e){
    if(e.keyCode === 13 || e.keyCode === 32){
        e.preventDefault();
        $(this).trigger("click");
    }
    });

});
