const AUTO_NEXT_SLIDE_DURATION = 4000;

function handleCarousel(identifier) {
  const serviceCaraouselContents = document.querySelectorAll(
    `.service-carousel-content-${identifier}`
  );

  serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
    serviceCaraouselContent.style.transform = `translateX(${index * 100}%)`;
  });

  let curSlide = 0;
  let maxSlide = serviceCaraouselContents.length - 1;

  let interval;
  interval = setInterval(toNextSlide, AUTO_NEXT_SLIDE_DURATION);
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(toNextSlide, AUTO_NEXT_SLIDE_DURATION);
  }

  function toNextSlide() {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
      serviceCaraouselContent.style.transform = `translateX(${
        100 * (index - curSlide)
      }%)`;
    });
  }
  function toPrevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide -= 1;
    }

    serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
      serviceCaraouselContent.style.transform = `translateX(${
        100 * (index - curSlide)
      }%)`;
    });
  }

  function handleNext() {
    resetInterval();
    toNextSlide();
  }
  function handlePrev() {
    resetInterval();
    toPrevSlide();
  }
  const nextSlide = document.getElementById(`btn-next-${identifier}`);
  nextSlide.addEventListener("click", handleNext);
  const prevSlide = document.getElementById(`btn-prev-${identifier}`);
  prevSlide.addEventListener("click", handlePrev);

  return () => {
    clearInterval(interval);
  };
}
