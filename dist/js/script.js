const onLoad = () => {
  //

  //
  var swiper = new Swiper(".heroSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-nav .next",
      prevEl: ".swiper-nav .prev",
    },
    pagination: {
      el: ".swiper-nav .pagination",
    },
  });
};

window.addEventListener("load", onLoad);
