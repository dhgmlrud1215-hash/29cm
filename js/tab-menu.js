$(function(){ $(".tab_ham").click(function(){ 
    $(".tab-menu").stop().slideToggle(); 

      const isOpen = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !isOpen); 
    });

    $(".tab_ham").on("keydown", function(e){ if(e.keyCode === 13 || e.keyCode === 32){ 
        e.preventDefault(); $(this).trigger("click"); 
    } 
    });

$(".tm1>li>a").click(function(e){ 
    e.preventDefault(); 

    const $li = $(this).parent();
    const $tm2 = $(this).next(".tm2"); 

    $(".tm1>li").removeClass("active"); 
    $li.addClass("active"); 

    $(".tm2").not($tm2).removeClass("open"); 
    $(".tm3").removeClass("open");
    $(".tm2>li").removeClass("active");

    if ($tm2.length) {
        $tm2.toggleClass("open");

    if ($tm2.hasClass("open")) {
        const $firstLi = $tm2.children("li").first();

        $firstLi.addClass("active");
        $firstLi.children(".tm3").addClass("open");
    }
    }
});

    $(".tm2>li>a").click(function(e){ 
        e.preventDefault();

        const $tm3 = $(this).next(".tm3");

        $(".tm3").not($tm3).removeClass("open");

        $tm3.toggleClass("open");

        $(".tm2>li").removeClass("active");
        $(this).parent().addClass("active"); 
    });

    $(document).on("click", function(e){
        if($(e.target).closest(".tab-menu").length) return;

        if($(e.target).closest(".tab_ham").length) return;

        $(".tab-menu").stop().slideUp(); 
    }); 
});