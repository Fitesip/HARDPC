const checkbox = document.querySelector('.checkbox')
const checkboxMark = document.querySelector('.checkboxMark')
let checked = false

checkbox.addEventListener('click', function () {
    if (!checked) {
        checkbox.setAttribute('class', 'checkbox checked')
        checkboxMark.style.display = 'unset'
        checked = true
    }
    else {
        checkbox.setAttribute('class', 'checkbox')
        checkboxMark.style.display = 'none'
        checked = false
    }
})