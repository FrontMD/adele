function infoSlider() {
    const infoSliders = document.querySelectorAll('[data-js="infoSlider"]')

    if(infoSliders.length < 1) return

    infoSliders.forEach(infoSlider => {

        let sliderPrev = infoSlider.querySelector('[data-js="sliderPrevBtn"]');
        let sliderNext = infoSlider.querySelector('[data-js="sliderNextBtn"]');
        let infoSliderSlider = infoSlider.querySelector('[data-js="infoSliderSlider"]');

        let infoSliderEx = new Swiper(infoSliderSlider, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            breakpoints: {
                769: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: sliderNext,
                prevEl: sliderPrev,
            },
        })
    })
}