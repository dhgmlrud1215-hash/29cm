$(function(){

    //상단
    $(".sub1>li>a").click(function(e){
        e.preventDefault();

        const $li = $(this).closest("li");
        const key = $li.data("key");

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

        $(".menu-panel").removeClass("active");

        if($panel.length === 0){
            return;
        }

        $panel.addClass("active");

        $panel.find(".left li").removeClass("active").first().addClass("active");
        $panel.find(".sub-box").removeClass("active").first().addClass("active");

        $panel.find(".sub2>li").removeClass("active");
        $panel.find(".sub3").removeClass("active");

        if ($panel.find(".sub2").length === 0) {
            $panel.find(".sub3").first().addClass("active");
        }

        });

    //left 메뉴
    $(".left li").click(function(){

    const $panel = $(this).closest(".menu-panel");

    $panel.find(".left li").removeClass("active");
    $(this).addClass("active");

    const idx = $(this).index();

    const $subBox = $panel.find(".sub-box").removeClass("active")
                            .eq(idx).addClass("active");

    $subBox.find(".sub2>li").removeClass("active");
    $subBox.find(".sub3").removeClass("active");

    if ($subBox.find(".sub2").length === 0) {
        $subBox.find(".sub3").first().addClass("active");
    }
    });

    $(".left li").on("keydown", function(e){
    if(e.keyCode === 13 || e.keyCode === 32){
        e.preventDefault();
        $(this).trigger("click");
    }
    });

    //sub2 메뉴
    $(".sub2 > li>a").click(function(e){
    e.preventDefault();

    const $li = $(this).parent();
    const $box = $(this).closest(".sub-box");


    $box.find(".sub2 > li").removeClass("active");
    $li.addClass("active");

    const idx = $li.index();


    $box.find(".sub3").removeClass("active");
    $box.find(".sub3").eq(idx).addClass("active");
    });

    //빈 화면 터치 시 메뉴 닫아짐
    $(document).click(function(e){
        if(!$(e.target).closest(".menu-contents, .sub1").length) {
            $(".menu-contents").removeClass("open");
            $(".sub1>li").removeClass("active");
        }
    });
    
});
