// 메인 슬라이드
var swiper = new Swiper(".main_slide", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// 메인 베스트 슬라이드
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

// 메인 뉴 슬라이드
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

// 스파 소개 슬라이드
var swiper = new Swiper(".spa_introduce_slide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 헤어 2depth 모달 위치조정
document.addEventListener("DOMContentLoaded", function () {
  const shopNav = document.querySelector(".shop_nav ul");
  const thirdLi = shopNav.children[2];
  const shopHair2depth = document.querySelector(".shop_hair_2depth");

  function positionHair2depth() {
    const liRect = thirdLi.getBoundingClientRect();
    const navRect = shopNav.getBoundingClientRect();

    const liCenterX = liRect.left + liRect.width / 2;
    const navLeft = navRect.left;
    shopHair2depth.style.left = `${liCenterX - navLeft}px`;
    shopHair2depth.style.top = `${liRect.bottom + window.scrollY + 15}px`;
  }

  positionHair2depth();

  window.addEventListener("resize", positionHair2depth);
});

// 바디 2depth 모달 위치조정
document.addEventListener("DOMContentLoaded", function () {
  const shopNav = document.querySelector(".shop_nav ul");
  const thirdLi = shopNav.children[3];
  const shopBody2depth = document.querySelector(".shop_body_2depth");

  function positionBody2depth() {
    const liRect = thirdLi.getBoundingClientRect();
    const navRect = shopNav.getBoundingClientRect();

    const liCenterX = liRect.left + liRect.width / 2;
    const navLeft = navRect.left;
    shopBody2depth.style.left = `${liCenterX - navLeft}px`;
    shopBody2depth.style.top = `${liRect.bottom + window.scrollY + 15}px`;
  }

  positionBody2depth();

  window.addEventListener("resize", positionHair2depth);
});

// 페이스 2depth 모달 위치조정
document.addEventListener("DOMContentLoaded", function () {
  const shopNav = document.querySelector(".shop_nav ul");
  const forthLi = shopNav.children[4];
  const shopFace2depth = document.querySelector(".shop_face_2depth");

  function positionFace2depth() {
    const liRect = forthLi.getBoundingClientRect();
    const navRect = shopNav.getBoundingClientRect();

    const liCenterX = liRect.left + liRect.width / 2;
    const navLeft = navRect.left;
    shopFace2depth.style.left = `${liCenterX - navLeft - 100}px`;
    shopFace2depth.style.top = `${liRect.bottom + window.scrollY + 15}px`;
  }

  positionFace2depth();

  window.addEventListener("resize", positionHair2depth);
});

$(document).ready(function () {
  $(".shop_hair_2depth, .shop_body_2depth").hide();

  $("#hair_nav, .shop_hair_2depth").mouseenter(function () {
    $(".shop_hair_2depth").show();
  });
  $("#hair_nav, .shop_hair_2depth").mouseleave(function () {
    $(".shop_hair_2depth").hide();
  });

  $("#body_nav, .shop_body_2depth").mouseenter(function () {
    $(".shop_body_2depth").show();
  });
  $("#body_nav, .shop_body_2depth").mouseleave(function () {
    $(".shop_body_2depth").hide();
  });

  $("#face_nav, .shop_face_2depth").mouseenter(function () {
    $(".shop_face_2depth").show();
  });
  $("#face_nav, .shop_face_2depth").mouseleave(function () {
    $(".shop_face_2depth").hide();
  });

  // 헤어 카테고리 분류
  function showCategory(category) {
    $(".hair_all").hide();
    if (category === "all") {
      $(".hair_all").show();
    } else {
      $("li#" + category).show();
    }
    $("button").css("font-weight", "normal");
    $("#hair_" + category).css("font-weight", "700");
  }

  $("#hair_all").click(function () {
    showCategory("all");
  });

  $("#hair_shampoobar").click(function () {
    showCategory("shampoobar");
  });

  $("#hair_shampoo").click(function () {
    showCategory("shampoo");
  });

  $("#hair_conditioner").click(function () {
    showCategory("conditioner");
  });

  $("#hair_treatment").click(function () {
    showCategory("treatment");
  });

  $("#hair_styling").click(function () {
    showCategory("styling");
  });

  // 바디 카테고리 분류
  function showCategory(category) {
    $(".body_all").hide();
    if (category === "all") {
      $(".body_all").show();
    } else {
      $("li#" + category).show();
    }
    $("button").css("font-weight", "normal");
    $("#body_" + category).css("font-weight", "700");
  }

  $("#body_all").click(function () {
    showCategory("all");
  });

  $("#body_cleanser").click(function () {
    showCategory("cleanser");
  });

  $("#body_handnfoot").click(function () {
    showCategory("handnfoot");
  });

  $("#body_lotion").click(function () {
    showCategory("lotion");
  });

  $("#body_massagebar").click(function () {
    showCategory("massagebar");
  });

  $("#body_dustingpowder").click(function () {
    showCategory("dustingpowder");
  });

  // 페이스 카테고리 분류
  function showCategory(category) {
    $(".face_all").hide();
    if (category === "all") {
      $(".face_all").show();
    } else {
      $("li#" + category).show();
    }
    $("button").css("font-weight", "normal");
    $("#face_" + category).css("font-weight", "700");
  }

  $("#face_all").click(function () {
    showCategory("all");
  });

  $("#face_washoff").click(function () {
    showCategory("washoff");
  });

  $("#face_cleanser").click(function () {
    showCategory("cleanser");
  });

  $("#face_toner").click(function () {
    showCategory("toner");
  });

  $("#face_shaving").click(function () {
    showCategory("shaving");
  });

  $("#face_moisturizer").click(function () {
    showCategory("moisturizer");
  });

  $("#face_lip").click(function () {
    showCategory("lip");
  });

  $("#face_eyepad").click(function () {
    showCategory("eyepad");
  });
});
