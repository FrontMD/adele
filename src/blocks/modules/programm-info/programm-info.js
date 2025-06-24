function programmInfo() {
    const programmInfoBlocks = document.querySelectorAll('[data-js="programmInfoBlock"]')

    if(programmInfoBlocks.length < 1) return

    const ww = window.innerWidth

    if(ww >= 1024) {
        programmInfoBlocks.forEach(block => {
            const left = block.querySelector('[data-js="programmInfoLeft"]');
            const right = block.querySelector('[data-js="programmInfoRight"]');
    
            right.style.maxHeight = left.offsetHeight + 'px';
        })
    }

}