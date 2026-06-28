$(function(){

    let isDown =false;
    let startX;
    let scrollLeft;

    const $slider = $('.brandwrap');

    $('.brandwrap').on('mousedown',function(e){
        isDown = true;
        $(this).addClass('active');

        startX = e.pageX;
        scrollLeft= $(this).scrollLeft();
    });

    $(document).on('mouseup',function(){
        isDown = false;
        $slider.removeClass('active');
    });

    $slider.on('mouseleave',function(){
        isDown = false;
    });

    $slider.on('mousemove',function(e){
        if(!isDown) return;

        e.preventDefault();

        const x = e.pageX;
        const walk = (x-startX)*1.5;

        $(this).scrollLeft(scrollLeft - walk);
    });

});