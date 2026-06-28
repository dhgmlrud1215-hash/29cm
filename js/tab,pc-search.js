$(function(){

    $(".topsearch").on("click", function(e){
        e.preventDefault();

        $(".search-model")
            .addClass("active")
            .attr("aria-hidden", "false");

        $(".popular").removeClass("show");

     
        setTimeout(function(){
            $(".popular").addClass("show");
        }, 450);

        $("#search-input").focus();
    });

    $(".search-close-switch").on("click", function(){
        $(".search-model")
            .removeClass("active")
            .attr("aria-hidden", "true");

      
        $(".popular").removeClass("show");

        $(".topsearch").focus();
    });

    $(".search-close-switch").on("keydown", function(e){
        if(e.keyCode === 13 || e.keyCode === 32){
            e.preventDefault();
            $(this).trigger("click");
        }
    });

});