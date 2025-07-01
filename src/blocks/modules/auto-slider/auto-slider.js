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
            on: {
                init: function () {
                    const reviewsCardsIntros = autoSlider.querySelectorAll('.c-review__intro')
            
                    if(reviewsCardsIntros.length > 0) {
                        let introHeight = 0

                        reviewsCardsIntros.forEach(intro => {
                            let cIntroHeight = intro.offsetHeight
                            
                            introHeight = introHeight < cIntroHeight ? cIntroHeight : introHeight
                        })
                        
                        reviewsCardsIntros.forEach(intro => {
                            intro.style.minHeight = introHeight + "px"
                        })
                    }
                },
            },
        })

    })

}