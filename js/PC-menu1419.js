$(function(){

    //상단
    $(".sub1>li>a").click(function(e){
        e.preventDefault();

        const $li = $(this).closest("li");
        const key = $li.data("key");

        console.log("CLICK:", key);

        $(".sub1>li").removeClass("active");
        $li.addClass("active");

        // BEST / EARTH
        if(key === "BEST" || key === "EARTH"){
            $(".menu-contents").removeClass("open");
            $(".menu-panel").removeClass("active");
            $(".sub1>li").removeClass("active");
            $li.addClass("active");
            return;
        }

        // 메뉴 열기 
        $(".menu-contents").addClass("open");

        const $panel = $(".menu-panel[data-key='"+key+"']");

        console.log("FOUND:", $panel.length);

        $(".menu-panel").removeClass("active");

        if($panel.length === 0){
            return;
        }

        $panel.addClass("active");

        // 초기화
        $panel.find(".sub-box").removeClass("active").first().addClass("active");
        $panel.find(".sub2>li").removeClass("active").first().addClass("active");
        $panel.find(".sub3").removeClass("active").first().addClass("active");
    });

    //left 메뉴
    $(".left li").click(function(){

        const $panel = $(this).closest(".menu-panel");

        $panel.find(".left li").removeClass("active");
        $(this).addClass("active");

        const idx = $(this).index();

        const $subBox = $panel.find(".sub-box").removeClass("active")
                                .eq(idx).addClass("active");

        $subBox.find(".sub2>li").removeClass("active").first().addClass("active");
        $subBox.find(".sub3").removeClass("active").first().addClass("active");
    });

    //sub2 메뉴
    $(".sub2>li").click(function(e){
        e.preventDefault();

        const $box = $(this).closest(".sub-box");

        $box.find(".sub2>li").removeClass("active");
        $(this).addClass("active");

        const idx = $(this).index();

        $box.find(".sub3").removeClass("active")
                        .eq(idx).addClass("active");
    });

    $(document).click(function(e){
        if(!$(e.target).closest(".menu-contents, .sub1").length) {
            $(".menu-contents").removeClass("open");
            $(".sub1>li").removeClass("active");
        }
    });
    
});