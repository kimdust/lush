var swiper = new Swiper(".main_slide", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".main_best_slide", {
  slidesPerView: 5.5,
  spaceBetween: 30,
  freeMode: true,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".main_new_slide", {
  slidesPerView: 5.5,
  spaceBetween: 30,
  freeMode: true,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".spa_introduce_slide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const shopNav = document.querySelector(".shop_nav ul");
  const thirdLi = shopNav.children[2];
  const shopHair2depth = document.querySelector(".shop_hair_2depth");

  function positionHair2depth() {
    const liRect = thirdLi.getBoundingClientRect();
    const navRect = shopNav.getBoundingClientRect();

    // 가운데 위치 계산
    const liCenterX = liRect.left + liRect.width / 2;
    const navLeft = navRect.left;

    // .shop_hair_2depth의 위치 설정
    shopHair2depth.style.left = `${liCenterX - navLeft}px`;
    shopHair2depth.style.top = `${liRect.bottom + window.scrollY + 15}px`; // 20px 아래로 내림
  }

  // 페이지 로드 시 위치 설정
  positionHair2depth();

  // 윈도우 리사이즈 시 위치 재설정
  window.addEventListener("resize", positionHair2depth);
});
