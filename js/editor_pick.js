$(function(){
   let index = 0;
   const group = $(".edigroup");

   function Show(i) {
    group.removeClass("active");
    group.eq(i).addClass("active");
   };

   $(".prev").on("click",function(e){
    e.preventDefault();

    index--;

    if(index < 0) {
       index = group.length-1;
    }
    Show(index);
   });

   $(".next").on("click",function(e){
    e.preventDefault();

    index++;

    if(index >= group.length) {
        index = 0;
    }
    Show(index);
   });

});