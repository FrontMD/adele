function sFilter() {
    const sFilters = document.querySelectorAll("[data-js='sFilter']")

    if(sFilters.length < 1) return
    
    sFilters.forEach(sFilter => {
        const slider = sFilter.querySelector('[data-js="sFilterSlider"]')

        const sFilterSliderEx = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                768: {
                    spaceBetween: 20
                }
            }
        })
    })
}