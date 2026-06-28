document.addEventListener("DOMContentLoaded", bnSlider);

function bnSlider() {
  const mainImage = document.querySelector(".mainbn_wrap");
  if (!mainImage) return;

  let currentIndex = 0;
  let autoSlideInterval;

  function isMobileTablet() {
    return window.innerWidth < 1024;
  }

  function getActiveUl() {
    const uls = mainImage.querySelectorAll("ul");

    for (let el of uls) {
      if (window.getComputedStyle(el).display !== "none") {
        return el;
      }
    }
  }

  function slideTo(index) {
    if (!isMobileTablet()) return;

    const ul = getActiveUl();
    if (!ul) return;

    const items = ul.querySelectorAll("li");
    const total = items.length;

    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    const item = items[index];

    items.forEach(li => li.classList.remove("active"));

    const move =
      item.offsetLeft - (mainImage.clientWidth - item.clientWidth) / 2;

    ul.style.transition = "none";
    ul.style.transform = "none";

    ul.scrollTo({
      left: move,
      behavior: "smooth"
    });

    item.classList.add("active");
    currentIndex = index;
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval);

    if (!isMobileTablet()) return;

    autoSlideInterval = setInterval(() => {
      slideTo(currentIndex + 1);
    }, 3000);
  }

  function resetSlider() {
    clearInterval(autoSlideInterval);

    const ul = getActiveUl();
    if (!ul) return;

    currentIndex = 0;
    ul.style.transition = "none";
    ul.style.transform = "none";
    ul.scrollLeft = 0;

    slideTo(0);
    startAutoSlide();
  }

  resetSlider();
  window.addEventListener("resize", resetSlider);
}