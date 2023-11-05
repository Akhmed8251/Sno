document.addEventListener("DOMContentLoaded", function() {
    const galleryImage = document.querySelector(".gallery__image")
    const galleryPictures = document.querySelector(".gallery__pictures")

    const galleryActionClose = document.querySelector(".actions-pictures__action_close")
    galleryActionClose.addEventListener("click", function() {
        document.body.classList.remove("no-scroll")
        galleryPictures.classList.remove("_active")

        if (galleryActionFullScreen.classList.contains("_active")) {
            galleryActionFullScreen.classList.remove("_active")
            fullScreen(galleryPictures, false)
        }
    })

    const galleryActionFullScreen = document.querySelector(".actions-pictures__action_fullscreen")
    galleryActionFullScreen.addEventListener("click", function() {
        galleryActionFullScreen.classList.toggle("_active")

        const isFullScreen = galleryActionFullScreen.classList.contains("_active")
        fullScreen(galleryPictures, isFullScreen)
    })

    const fullScreen = (element, isFullScreen = true) => {
        if (isFullScreen) {
            if (element.requestFullScreen) {
                element.requestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    new Swiper(".gallery__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            prevEl: ".gallery__slider-arrow_prev",
            nextEl: ".gallery__slider-arrow_next",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        }
    })

    galleryImage.addEventListener("click", function(e) {
        document.body.classList.add("no-scroll")
        galleryPictures.classList.add("_active")
    })
})