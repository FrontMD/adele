function homeInfo() {
    const homeInfos = document.querySelectorAll('[data-js="homeInfo"]')

    if(homeInfos.length < 1) return

    homeInfos.forEach(homeInfo => {
        const homeInfoSlider = homeInfo.querySelector('[data-js="homeInfoSlider"]')
        const homeInfoPagination =  homeInfo.querySelector('[data-js="homeInfoPagination"]')

        let homeInfoSliderEx = new Swiper(homeInfoSlider, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            pagination: {
                el: homeInfoPagination,
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                501: {
                    slidesPerView: 1.9,
                },
                
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
