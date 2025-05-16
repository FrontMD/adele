function homeInfo() {
    const homeInfoSliders = document.querySelectorAll('[data-js="homeInfoSlider"]')

    if(homeInfoSliders.length < 1) return

    homeInfoSliders.forEach(homeInfoSlider => {
        let homeInfoSliderEx = new Swiper(homeInfoSlider, {
            slidesPerView: 1.5,
            spaceBetween: 10,
            breakpoints: {
                768: {
                    slidesPerView: 2.5,
                },
                
                1024: {
                    slidesPerView: 3,
                },
                
                1201: {
                    slidesPerView: 4,
                },

                1931: {
                    slidesPerView: 5,
                }
            }
        })
    })
}
