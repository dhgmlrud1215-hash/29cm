$(function(){
    $(".licate ul li").click(function(e){
        e.preventDefault();

        const target = $(this).data("target")

        $(".licate ul li")
            .removeClass("active")
            .attr("aria-selected", "false");

        $(this)
            .addClass("active")
            .attr("aria-selected", "true");

        $(".livingwrap")
            .removeClass("active")
            .attr("aria-hidden", "true");

        $("#"+target)
            .addClass("active")
            .attr("aria-hidden", "false");
    });

    $(".licate li").on("keydown", function(e){
    if(e.keyCode === 13 || e.keyCode === 32){
        e.preventDefault();
        $(this).trigger("click");
        }
    });
})