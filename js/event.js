$(function(){
    $(".event-tab li").click(function(e){
        e.preventDefault();

        const target = $(this).data("target");

        $(".event-tab li")
            .removeClass("active")
            .attr("aria-selected", "false");

        $(this)
            .addClass("active")
            .attr("aria-selected", "true");

        $(".tab-group")
            .removeClass("active")
            .attr("aria-hidden", "true");

        $("#" + target)
            .addClass("active")
            .attr("aria-hidden", "false");
    });


    $(".event-tab li").on("keydown", function(e){
        if(e.keyCode === 13 || e.keyCode === 32){
            e.preventDefault();
            $(this).trigger("click");
        }
});
});