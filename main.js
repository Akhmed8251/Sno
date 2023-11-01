document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.news__slider', {
        direction: "vertical",
        allowTouchMove: false,
        effect: "cards",                    //make slider card
        cardsEffect: {
            perSlideOffset: 10,             // slide gap(px)
            //perSlideRotate: 10,             // Rotation angle of second and subsequent slides
            rotate: false,                   // Rotation presence of second and subsequent slides(true/false)
            slideShadows: true,            // Shadow presence of second and subsequent slides(true/false)
        },
        //grabCursor: true,                   //grab cursor
        pagination: {                       //pagination(dots)
            el: '.swiper-pagination',
        },
        navigation: {                       //navigation(arrows)
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
})