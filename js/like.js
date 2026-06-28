$(function(){

    $(".tab li").click(function(e){
        e.preventDefault();

        const target = $(this).data("target");

        $(".tab li")
            .removeClass("active")
            .attr("aria-selected", "false");

        $(this)
            .addClass("active")
            .attr("aria-selected", "true");

        $(".content")
            .removeClass("active")
            .attr("aria-hidden", "true");

        $("#" + target)
            .addClass("active")
            .attr("aria-hidden", "false");

        // 이런 상품 어때요
        if(target === "box1"){
            $(".recommend").show();
        } else {
            $(".recommend").hide();
        }
    });

    $(".tab li , .blike, .plike").on("keydown", function(e){
        if(e.keyCode === 13 || e.keyCode === 32){
            e.preventDefault();
            $(this).trigger("click");
        }
    });

});