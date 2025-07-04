function projects() {
    const projectsBlocks = document.querySelectorAll('[data-js="projects"]')

    if(projectsBlocks.length < 1) return

    projectsBlocks.forEach(projects => {

        const projectsSlider = projects.querySelector('[data-js="projectsSlider"]')
        const pagination = projects.querySelector('[data-js="projectsPagination"]')


        let projectsSliderEx = new Swiper(projectsSlider, {
            slidesPerView: 1.1,
            spaceBetween: 15,
            autoplay: {
                delay: 2000
            },
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 35,
                }
            },
            pagination: {
                el: pagination,
                type: 'bullets'
            }
        })
    })
}