function infoSlider() {
    const infoSliders = document.querySelectorAll('[data-js="infoSlider"]')

    if(infoSliders.length < 1) return

    infoSliders.forEach(infoSlider => {
        let infoSliderEx = new Swiper(infoSlider, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            breakpoints: {
                769: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                }
            }
        })
    })
}