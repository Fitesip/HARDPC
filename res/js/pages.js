let open = false
let pages = document.querySelector('.pages')
let pagesContainer = document.querySelector('.pagesContainer')
let arrow = document.querySelector('.arrow')

pages.addEventListener('click', function () {
    if (!open) {
        pagesContainer.style.maxHeight = '170px'
        arrow.style.rotate = 'x 180deg'
        open = true
    }
    else {
        pagesContainer.style.maxHeight = '0'
        arrow.style.rotate = 'x 0deg'
        open = false
    }
})