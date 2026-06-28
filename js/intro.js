document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector("#introVisual");
  const closeBtn = document.querySelector(".intro-close");
  const scrollBtn = document.querySelector(".scroll-btn");

  if (!intro || !closeBtn) return;

  document.body.classList.add("intro-open");

  function closeIntro() {
    intro.style.display = "none";
    document.body.classList.remove("intro-open");
  }

  closeBtn.addEventListener("click", closeIntro);

  if (scrollBtn) {
    scrollBtn.addEventListener("click", closeIntro);
  }

  let wheelAmount = 0;

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      wheelAmount += e.deltaY;

      if (wheelAmount > 500) {
        closeIntro();
      }
    }
  });

  let touchStartY = 0;

  window.addEventListener("touchstart", function (e) {
    touchStartY = e.touches[0].clientY;
  });

  window.addEventListener("touchmove", function (e) {
    const touchMoveY = e.touches[0].clientY;

    if (touchStartY - touchMoveY > 120) {
      closeIntro();
    }
  });
});