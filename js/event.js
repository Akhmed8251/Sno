document.addEventListener("DOMContentLoaded", function() {
    const galleryImage = document.querySelector(".gallery__image")
    const galleryPictures = document.querySelector(".gallery__pictures")

    const galleryActionClose = document.querySelector(".actions-pictures__action_close")
    galleryActionClose.addEventListener("click", function() {
        galleryPictures.classList.remove("_active")
    })

    const galleryActionFullScreen = document.querySelector(".actions-pictures__action_fullscreen")
    galleryActionFullScreen.addEventListener("click", function() {
        galleryActionFullScreen.classList.toggle("_active")

        let evt = new KeyboardEvent('keydown', { 'keyCode': 122 });
        document.dispatchEvent(evt);
    })

    new Swiper(".gallery__slider", {
        slidesPerView: 1,
        spaceBetween: 20
    })

    document.addEventListener("keydown", function(evt) {
        if (galleryPictures.classList.contains("_active")) {
            if (evt.key == "F11") {
                galleryActionFullScreen.classList.add("_active")
            }
        }
    })
    
    galleryImage.addEventListener("click", function(e) {
        galleryPictures.classList.add("_active")
    })
})