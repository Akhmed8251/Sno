document.addEventListener("DOMContentLoaded", function() {
    new Swiper('.news__slider', {
        direction: "vertical",
        allowTouchMove: false,
        effect: "cards",  
        autoplay: {
            delay: 5000
        }, 
        loop: true,  
        cardsEffect: {
            perSlideOffset: 10,           
            rotate: false,                   
            slideShadows: true,            
        },
        pagination: {                      
            el: '.swiper-pagination',
        },
        navigation: {                       
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })
})