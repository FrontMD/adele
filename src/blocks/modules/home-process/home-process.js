function homeProcess() {
    const homeProcessBlocks = document.querySelectorAll('[data-js="homeProcess"]')

    if(homeProcessBlocks.length < 1) return

    homeProcessBlocks.forEach(homeProcess => {

        const textSlider = homeProcess.querySelector('[data-js="homeProcessSliderText"]')
        const imgSlider = homeProcess.querySelector('[data-js="homeProcessSliderImg"]')
        const tabsSlider = homeProcess.querySelector('[data-js="homeProcessTabs"]')


        let tabsSliderEx = new Swiper(tabsSlider, {
            slidesPerView: 'auto',
            spaceBetween: 0,
        })

        let imgSliderEx = new Swiper(imgSlider, {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            effect: 'fade'
        })

        let textSliderEx = new Swiper(textSlider, {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            effect: 'fade',
            thumbs: {
                swiper: tabsSliderEx
            },
            controller: {
                control: imgSliderEx
            },
        })

        

    })
}