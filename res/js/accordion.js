const showButton = document.querySelectorAll('.showAllCharacteristicsButton')
const characteristics = document.querySelectorAll('.allCharacteristics')
const accordionArrows = document.querySelectorAll('.accordionArrowImage')
const showText = document.querySelectorAll('.showAllCharacteristicsText')

for (let i = 0; i < showButton.length; i++) {
    showButton[i].addEventListener('click', function () {
        if (characteristics[i].style.maxHeight === '0px') {
            characteristics[i].style.maxHeight = '1200px'
            accordionArrows[i].style.rotate = '180deg'
            showText[i].innerText = 'Скрыть характеристики'
        }
        else {
            characteristics[i].style.maxHeight = '0px'
            accordionArrows[i].style.rotate = '0deg'
            showText[i].innerText = 'Раскрыть характеристики'
        }
    })
}