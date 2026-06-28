$(function(){
    $("#header").load("header.html", function(){

        const page = location.pathname.split("/").pop();

        $(".mtop_menu a[href='"+page+"']").addClass("active");

    });
});