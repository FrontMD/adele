function projects() {
    const projectsBlocks = document.querySelectorAll('[data-js="projects"]')

    if(projectsBlocks.length < 1) return

    projectsBlocks.forEach(projects => {

        const projectsSlider = projects.querySelector('[data-js="projectsSlider"]')
        const pagination = projects.querySelector('[data-js="projectsPagination"]')


        let projectsSliderEx = new Swiper(projectsSlider, {
            slidesPerView: 1.1,
            spaceBetween: 20,
            autoplay: {
                delay: 2000
            },
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                }
            },
            pagination: {
                el: pagination,
                type: 'bullets',
                clickable: true,
            }
        })
    })
}