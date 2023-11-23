document.addEventListener("DOMContentLoaded", function() {
    new Swiper('.news__slider', { 
        direction: "vertical",
        effect: "cards",
        cardsEffect: {
            perSlideOffset: 10,           
            rotate: false,                   
            slideShadows: true,            
        },
        autoplay: {
            delay: 5000
        }, 
        loop: true,  
        pagination: {                      
            el: '.swiper-pagination',
        },
        navigation: {                       
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            769: {
                allowTouchMove: false,
            }
        }
    })
})