function rightScroll() {
    const rightScrollBlocks = document.querySelectorAll("[data-js='rightScroll']")

    if(rightScrollBlocks.length < 1) return

    let rows = []

    rightScrollBlocks.forEach(block => {
        let currentCols = block.querySelectorAll('.m-columns')

        if(currentCols.length > 0) {
            rows = rows.concat([... currentCols])
        }

    })

    if(rows.length > 0) {
        rows.forEach(row => {
            const ww = window.innerWidth
            const right = row.querySelector('.m-columns__main')

            if(ww > 1340) {

                const left = row.querySelector('.m-columns__header')
    
                left.style.alignSelf = "flex-start"
    
                const maxHeight = left.offsetHeight
    
                left.style.alignSelf = "stretch"
                right.style.maxHeight = maxHeight + "px"
                
            } else if(!row.closest('[data-js="projectModal"]')) {
                right.style.maxHeight = "70vh"
            }


        })
    }
}