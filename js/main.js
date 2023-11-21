document.addEventListener("DOMContentLoaded", function() {
    new Swiper('.news__slider', {    
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
            320: {
                spaceBetween: 20
            },
            769: {
                direction: "vertical",
                allowTouchMove: false,
                effect: "cards",
                cardsEffect: {
                    perSlideOffset: 10,           
                    rotate: false,                   
                    slideShadows: true,            
                }
            }
        }
    })
})