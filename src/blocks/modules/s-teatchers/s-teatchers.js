function sTeatchersSliders() {
    const sTeatchers = document.querySelectorAll('[data-js="sTeatchers"]');

    if(sTeatchers.length < 1) return

    
    sTeatchers.forEach(sTeatcher => {
        let sliderPrev = sTeatcher.querySelector('[data-js="sliderPrevBtn"]');
        let sliderNext = sTeatcher.querySelector('[data-js="sliderNextBtn"]');
        let sTeatcherSlider = sTeatcher.querySelector('[data-js="sTeatchersSlider"]');
        const wrapper = sTeatcherSlider.querySelector('.swiper-wrapper');

        let sTeatcherSliderEx = new Swiper(sTeatcherSlider, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            navigation: {
                nextEl: sliderNext,
                prevEl: sliderPrev,
              },
            breakpoints: {
                501: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },
                1340: {
                    slidesPerView: 4
                },
                2000: {
                    slidesPerView: 5
                }
            },
            on: {
                init: function(swiper) {
                    let allSlidesWidth = [...swiper.slides].reduce((acc, item) => {
                        console.log(item.offsetWidth)
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