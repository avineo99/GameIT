$(document).ready(function () { 
  new Swiper("#swp", {
    loop: true,
    nextButton: "#swpbtnnext1",
    prevButton: "#swpbtnprev1",
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 40,
    breakpoints: {
      1920: { slidesPerView: 4, spaceBetween: 40 },
      1028: { slidesPerView: 3, spaceBetween: 30 },
      767: { slidesPerView: 2, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 10 }
    },
  });

  new Swiper("#swp2", {
    loop: true,
    nextButton: "#swpbtnnext2",
    prevButton: "#swpbtnprev2",
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 40,
    breakpoints: {
      1920: { slidesPerView: 4, spaceBetween: 40 },
      1028: { slidesPerView: 3, spaceBetween: 30 },
      767: { slidesPerView: 2, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 10 }
    },
  });
});









$(".srch_btn").click(function () {
  $("header").toggleClass("serch_show");
});

AOS.init({
  duration: 1200,
  once: true
});