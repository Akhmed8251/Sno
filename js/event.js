document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".news-item__slider", {
        grabCursor: true,
        navigation: {                       
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })
})