document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".bn-track");
  if (!track) return;

  const slides = track.querySelectorAll(":scope > li");
  let index = 0;
  let timer = null;

  function isPc() {
    return window.innerWidth >= 1024;
  }

  function moveSlide() {
    track.style.transition = "transform 0.8s ease";
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function startPcSlide() {
    clearInterval(timer);

    if (!isPc() || slides.length <= 1) return;

    timer = setInterval(function () {
      index = (index + 1) % slides.length;
      moveSlide();
    }, 5000);
  }

  function resetPcSlide() {
    clearInterval(timer);

    index = 0;
    track.style.transition = "none";
    track.style.transform = "translateX(0)";

    setTimeout(startPcSlide, 100);
  }

  resetPcSlide();

  window.addEventListener("resize", resetPcSlide);
});