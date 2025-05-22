let array = []
let priceArray = []
for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith('Сборка №')) {
        array.push(localStorage.key(i).replace('Сборка №', ''))
    }
    if (localStorage.key(i).startsWith('Цена Сборка №')) {
        priceArray.push(localStorage.getItem(localStorage.key(i)))
    }
    if (localStorage.key(i).startsWith('Собственная сборка')) {
        array.push(localStorage.key(i))
    }
    if (localStorage.key(i).startsWith('Цена Собственная сборка')) {
        priceArray.push(localStorage.getItem(localStorage.key(i)))
    }
}

array.sort((a, b) => a - b)

for (let i = 0; i < array.length; i++) {
    let arrayNum = 'Сборка №' + array[i]
    let priceNum = priceArray[i]
    if (array[i] === 'Собственная сборка') {
        arrayNum = array[i]
    }
    let product = document.createElement('div')
    product.setAttribute('class', 'product')

    let productName = document.createElement('div')
    productName.setAttribute('class', 'productName')

    let productImage = document.createElement('img')
    productImage.setAttribute('src', `../res/img/PC${array[i]}.png`)

    let productNumber = document.createElement('p')
    productNumber.innerText = arrayNum

    let qtyNPrice = document.createElement('div')
    qtyNPrice.setAttribute('class', 'qtyNPrice')

    let qty = document.createElement('div')
    qty.setAttribute('class', 'qty')

    let minusButton = document.createElement('button')

    let minusButtonImage = document.createElement('img')
    minusButtonImage.setAttribute('src', '../res/img/Minus.svg')

    let qtyText = document.createElement('p')
    qtyText.innerText = localStorage.getItem(arrayNum)

    if (localStorage.getItem(arrayNum) < 2) {
        minusButton.setAttribute('disabled', 'disabled')
    }
    let plusButton = document.createElement('button')
    let plusButtonImage = document.createElement('img')
    plusButtonImage.setAttribute('src', '../res/img/Plus.svg')

    let qtyTextPlaceholder = document.createElement('h3')
    qtyTextPlaceholder.innerText = 'Количество'

    let price = document.createElement('p')
    price.setAttribute('class', 'price')
    price.innerText = (priceNum * parseInt(qtyText.innerText)).toLocaleString() + ' ₽'

    let pricePlaceholder = document.createElement('h3')
    pricePlaceholder.innerText = 'Итоговая цена'

    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete')

    let deleteButtonImage = document.createElement('img')
    deleteButtonImage.setAttribute('src', '../res/img/Minus-White.svg')

    let secondDeleteButtonImage = document.createElement('img')
    secondDeleteButtonImage.setAttribute('src', '../res/img/Minus-White.svg')
    secondDeleteButtonImage.setAttribute('class', 'secondMinus')

    let productsContainer = document.querySelector('.products')
    productsContainer.appendChild(product)

    product.appendChild(productName)
    product.appendChild(qtyNPrice)
    product.appendChild(deleteButton)

    productName.appendChild(productImage)
    productName.appendChild(productNumber)

    qtyNPrice.appendChild(qty)
    qtyNPrice.appendChild(qtyTextPlaceholder)
    qtyNPrice.appendChild(price)
    qtyNPrice.appendChild(pricePlaceholder)

    qty.appendChild(minusButton)
    qty.appendChild(qtyText)
    qty.appendChild(plusButton)

    minusButton.appendChild(minusButtonImage)

    plusButton.appendChild(plusButtonImage)

    deleteButton.appendChild(deleteButtonImage)
    deleteButton.appendChild(secondDeleteButtonImage)

    deleteButton.addEventListener('click', function () {
        product.style.maxHeight = '0px'
        product.style.marginBottom = '0px'
        deleteButton.style.display = 'none'

        setTimeout(function () {
            productsContainer.removeChild(product)

            localStorage.removeItem(arrayNum)
            localStorage.removeItem("Цена " + arrayNum)
            productsContainer = document.querySelector('.products')
            if (productsContainer.children.length === 1) {
                document.querySelector('.naming').style.display = 'none'
                document.querySelector('.empty').style.display = 'flex'
                document.querySelector('.empty').style.marginBottom = '268px'
                document.querySelector('.order').style.display = 'none'
            }
            setPrice()
        }, 600)
    })

    minusButton.addEventListener('click', function () {
        let qty = parseInt(qtyText.innerText)
        if (qty > 1) {
            qtyText.innerText = qty - 1
        }
        qty = parseInt(qtyText.innerText)
        localStorage.setItem(arrayNum, qty)
        price.innerText = (priceNum * parseInt(qtyText.innerText)).toLocaleString() + ' ₽'
        setPrice()
        if (qty === 1) {
            minusButton.setAttribute('disabled', 'disabled')
        }

    })

    plusButton.addEventListener('click', function () {
        let qty = parseInt(qtyText.innerText)
        qtyText.innerText = qty + 1
        qty = parseInt(qtyText.innerText)
        localStorage.setItem(arrayNum, qty)
        price.innerText = (priceNum * parseInt(qtyText.innerText)).toLocaleString() + ' ₽'
        setPrice()
        if (qty > 1) {
            minusButton.removeAttribute('disabled')
        }

    })

    setPrice()
}

let productsContainer = document.querySelector('.products')
if (productsContainer.children.length === 1) {
    document.querySelector('.naming').style.display = 'none'
    document.querySelector('.empty').style.display = 'flex'
    document.querySelector('.empty').style.marginBottom = '268px'
    document.querySelector('.order').style.display = 'none'
}

function setPrice() {
    const productsPrices = document.querySelectorAll('.price')
    let totalPriceText = document.querySelector('.totalPrice')
    let totalPrice = 0
    for (let i = 0; i < productsPrices.length; i++) {
        totalPrice += parseInt(productsPrices[i].innerText.replaceAll(/[^0-9]/g, ''));
    }
    totalPriceText.innerText = totalPrice.toLocaleString() + ' ₽'
}
