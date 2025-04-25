function sVacancySliders() {
    const sVacances = document.querySelectorAll('[data-js="sVacancy"]');

    if(sVacances.length < 1) return

    
    sVacances.forEach(sVacancy => {
        let sliderPrev = sVacancy.querySelector('[data-js="sliderPrevBtn"]');
        let sliderNext = sVacancy.querySelector('[data-js="sliderNextBtn"]');
        let sVacancySlider = sVacancy.querySelector('[data-js="sVacancySlider"]');

        let sVacancySliderEx = new Swiper(sVacancySlider, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            navigation: {
                nextEl: sliderNext,
                prevEl: sliderPrev,
              },
        })
    })

}