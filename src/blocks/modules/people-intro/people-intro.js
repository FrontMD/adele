function peopleIntro() {
    const peopleIntros = document.querySelectorAll('[data-js="peopleIntro"]')

    if(peopleIntros.length < 1) return

    const showMoreBtnLayout = `                                
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.748341 9.86383L2.8571 12.1503L6.60429 8.69424L9.14477 6.35118L7.03605 4.06472L3.28711 0L0.746637 2.34306L4.49554 6.40782L0.748341 9.86383Z" fill="currentColor"/>
                                </svg>
                                <span class="show-more">
                                показать все
                                </span>
                                <span class="show-less">
                                    скрыть
                                </span>
                            `

    peopleIntros.forEach(peopleIntro => {
        const peopleIntroImg = peopleIntro.querySelector('[data-js="peopleIntroImg"]')
        const peopleIntroContent = peopleIntro.querySelector('[data-js="peopleIntroContent"]')
        const peopleIntroTitle = peopleIntro.querySelector('[data-js="peopleIntroTitle"]')
        const peopleIntroInfo = peopleIntro.querySelector('[data-js="peopleIntroInfo"]')
        const infoRealHeight = peopleIntroInfo.offsetHeight
        
        if(peopleIntroContent.offsetHeight > peopleIntroImg.offsetHeight) {

            const targetMaxHeight = peopleIntroImg.offsetHeight - peopleIntroTitle.offsetHeight - parseInt(getComputedStyle(peopleIntroContent)['padding-top']) - parseInt(getComputedStyle(peopleIntroContent)['padding-bottom']) - 60;

            peopleIntroInfo.style.maxHeight =  targetMaxHeight + 'px';

            let showMoreBtn = document.createElement('button');
            showMoreBtn.innerHTML = showMoreBtnLayout;
            showMoreBtn.setAttribute('type', 'button')
            showMoreBtn.setAttribute('class', 'people-Intro__showmore')
            showMoreBtn.setAttribute('data-js', 'peopleIntroshowMore')

            peopleIntroContent.classList.add('collapsed')
            peopleIntroContent.appendChild(showMoreBtn)

            showMoreBtn.addEventListener('click', () => {
                if(peopleIntroContent.classList.contains('collapsed')) {
                    peopleIntroContent.classList.remove('collapsed')
                    peopleIntroInfo.style.maxHeight = infoRealHeight + 'px'
                } else {
                    peopleIntroInfo.style.maxHeight = targetMaxHeight + 'px'
    
                    setTimeout(() => {
                        peopleIntroContent.classList.add('collapsed')
                    }, 200)
                }
            }) 
        }

    })
}