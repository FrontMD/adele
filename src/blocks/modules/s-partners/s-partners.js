function sPartners() {
    const sPartnersBlocks = document.querySelectorAll('[data-js="sPartners"]');
    
    if(sPartnersBlocks.length < 1) return
    
    sPartnersBlocks.forEach(sPartnersBlock => {

        const sPartnersSlider = sPartnersBlock.querySelector('[data-js="sPartnersSlider"]');
        const sPartnersSliderPrev = sPartnersBlock.querySelector('[data-js="sliderPrevBtn"]');
        const sPartnersSliderNext = sPartnersBlock.querySelector('[data-js="sliderNextBtn"]');
        const wrapper = sPartnersBlock.querySelector('.swiper-wrapper');

        let sPartnersSliderEx = new Swiper(sPartnersSlider, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            a11y: false,
            navigation: {
                nextEl: sPartnersSliderNext,
                prevEl: sPartnersSliderPrev,
            },
            breakpoints: {
                1024: {
                    spaceBetween: 20
                }
            },
            on: {
                init: function(swiper) {
                    let allSlidesWidth = [...swiper.slides].reduce((acc, item) => {
                        acc += item.offsetWidth
                        return acc
                    }, 0)
        
                    if(allSlidesWidth < wrapper.offsetWidth) {
                        wrapper.classList.add('centered')
                    }
                }
            }
        })

    })

}