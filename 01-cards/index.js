function slidePlugin(changeActive = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[changeActive].classList.add("active");

  for (let slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveSlide();
      slide.classList.add("active");
    });
  }

  function clearActiveSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidePlugin(2);
