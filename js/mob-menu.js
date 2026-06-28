$(function(){
    $(".topwrap").slick({
         slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: false
    
    });

   $(".topwrap").hasClass("slick-initialized")
});





document.addEventListener("DOMContentLoaded",() => {
    document.querySelectorAll(".left li a").forEach(function(a){
        
        a.onclick = function(e) {
            e.preventDefault();

            const id = this.getAttribute("href").replace("#","");
            const target = document.getElementById(id);

            document.querySelectorAll(".left li").forEach(li => {
                li.classList.remove("active");
            });

            this.parentElement.classList.add("active");

            if(target) {
                target.scrollIntoView({
                    behavior:"smooth",
                    block: "start"
                });
            }
        };

    });

});


