function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let initialSlide = 0;

  if (initialSlide === 0) {
    leftArrow.style.display = "none";
  }

  rightArrow.onclick = function() {
    initialSlide += 1;
    if(initialSlide === 3) {
      rightArrow.style.display = "none";
    }
    if(initialSlide !== 3) {
      rightArrow.style.display = "";
    }
    if(initialSlide !== 0) {
      leftArrow.style.display = "";
    }
    carouselInner.style.transform = `translateX(${-carouselInner.offsetWidth * initialSlide}px)`;
  }
  leftArrow.onclick = function() {
    if(initialSlide !== 4) {
      rightArrow.style.display = "";
    }
    if(initialSlide === 1) {
      leftArrow.style.display = "none";
    }
    initialSlide -= 1;
    carouselInner.style.transform = `translateX(${-carouselInner.offsetWidth * initialSlide}px)`;
  }
}
