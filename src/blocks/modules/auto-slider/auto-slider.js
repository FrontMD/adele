function autoSliders() {
    const autoSliders = document.querySelectorAll('[data-js="autoSlider"]');

    if(autoSliders.length < 1) return

    
    autoSliders.forEach(autoSlider => {
        let sliderPrev = autoSlider.querySelector('[data-js="sliderPrevBtn"]');
        let sliderNext = autoSlider.querySelector('[data-js="sliderNextBtn"]');
        let autoSliderSlider = autoSlider.querySelector('[data-js="autoSliderSlider"]');

        let autoSliderEx = new Swiper(autoSliderSlider, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            navigation: {
                nextEl: sliderNext,
                prevEl: sliderPrev,
              },
        })
    })

}