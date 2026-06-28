document.addEventListener("DOMContentLoaded",bnSlider);

function bnSlider() {
    const mainImage = document.querySelector(".mainbn_wrap");
    
    let currentIndex = 0;
    let autoSlideInterval;

    function getActiveUl() {
        const uls = mainImage.querySelectorAll("ul");
        for (let el of uls) {
            if (window.getComputedStyle(el).display !== "none"){
                return el;
            }
        }
    }



    function slideTo(index) {
        const ul = getActiveUl();
        const imgs =ul.querySelectorAll("li");
        const totalSlides = imgs.length;
        if(index < 0) index = 0;
        if(index >= totalSlides) index = totalSlides-1;

        const slideWidth = mainImage.clientWidth;

        ul.style.transition ="transform 0.5s";
        ul.style.transform = `translateX(-${slideWidth * index}px)`;

        currentIndex = index;
    }

    function startAutoSlide(){
        autoSlideInterval = setInterval(()=>{
            const ul = getActiveUl();
            const totalSlides = ul.querySelectorAll("li").length;
            let nextIndex = currentIndex +1;
            if(nextIndex >= totalSlides) nextIndex = 0;
            slideTo(nextIndex);
        },3000);

        function stopAutoSlide(){
            clearInterval(autoSlideInterval);
        }
        

        
    }
slideTo(0);
startAutoSlide();

}
