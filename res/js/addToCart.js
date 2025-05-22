const inCartButtons = document.querySelectorAll('.inCart')

if (document.location.pathname === '/HARDPC/index.html') {
    const PCsContainerChildren = document.querySelector('.PCsContainer').children
    for (let i = 0; i < 15; i++) {
        if (localStorage.getItem('Сборка №'+i) !== null) {
            PCsContainerChildren[i-1].children[2].children[1].style.background = '#7A7A7A'
            PCsContainerChildren[i-1].children[2].children[1].style.color = '#F4F4F4'
            PCsContainerChildren[i-1].children[2].children[1].innerText = 'В корзине'
        }
    }
}
if (document.location.pathname === '/HARDPC/pages/catalog.html') {
    const PCsContainerInCatalogChildren = document.querySelector('.PCsContainerInCatalog').children
    for (let i = 0; i < 15; i++) {
        if (localStorage.getItem('Сборка №'+i) !== null) {
            PCsContainerInCatalogChildren[i-1].children[2].children[1].style.background = '#7A7A7A'
            PCsContainerInCatalogChildren[i-1].children[2].children[1].style.color = '#F4F4F4'
            PCsContainerInCatalogChildren[i-1].children[2].children[1].innerText = 'В корзине'
        }
    }
}



for (let i = 0; i < inCartButtons.length; i++) {
    inCartButtons[i].addEventListener('click', function () {
        let number = inCartButtons[i].parentNode.parentNode.children[1].innerText
        if (inCartButtons[i].innerText === 'В корзину') {
            inCartButtons[i].innerText = 'В корзине'
            inCartButtons[i].style.background = '#7A7A7A'
            inCartButtons[i].style.color = '#F4F4F4'

            localStorage.setItem(number, '1')
            localStorage.setItem("Цена " + inCartButtons[i].parentNode.parentNode.children[1].innerText, inCartButtons[i].parentNode.parentNode.children[2].children[0].innerText.replaceAll(/[^0-9]/g, ''))
        }
        else {
            inCartButtons[i].innerText = 'В корзину'
            inCartButtons[i].removeAttribute('style')

            localStorage.removeItem(number)

        }
    })
}