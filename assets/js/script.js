var swiper = new Swiper(".abcd", {
    slidesPerView: 3,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
    }
    // pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
    // },
});


