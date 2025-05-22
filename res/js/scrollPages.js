const leftScrollButton = document.getElementById("leftScrollButton")
const rightScrollButton = document.getElementById("rightScrollButton")
const counter = document.getElementById('counter')
const allPCs = document.querySelectorAll(".PC")
let transformXvalue = 0
let currPage = 1
function reverse() {
    let ret = new Array;
    for (let i = allPCs.length - 1; i >= 0; i--) {
        ret.push(allPCs[i])
    }
    return ret
}
function check(transformXvalue) {
    let size = document.querySelector('.PC').offsetWidth
    let maxSize = -5790
    if (size === 738) {
        maxSize = -10742
        document.getElementById('maxPages').innerText = "из 15"
    }
    if (size === 450) {
        maxSize = -6440
        document.getElementById('maxPages').innerText = "из 15"
    }
    if (size === 420) {
        maxSize = -6020
        document.getElementById('maxPages').innerText = "из 15"
    }
    if (transformXvalue === 0) {
        leftScrollButton.setAttribute('disabled', 'disabled')
        leftScrollButton.removeAttribute('onclick')
    }
    else {
        leftScrollButton.removeAttribute('disabled')
        leftScrollButton.setAttribute('onclick', 'leftScroll()')
    }
    if (transformXvalue <= maxSize) {
        rightScrollButton.removeAttribute('onclick')
        rightScrollButton.setAttribute('disabled', 'disabled')
    }
    else {
        rightScrollButton.removeAttribute('disabled')
        rightScrollButton.setAttribute('onclick', 'rightScroll()')
    }
}
function leftScroll() {
    if (checkTimer <= 0) {
        return
    }
    setTimer()
    let size = document.querySelector('.PC').offsetWidth
    if (size === 385) {
        transformXvalue += 1447.5
    }
    if (size === 738) {
        transformXvalue += 748
    }
    if (size === 450) {
        transformXvalue += 460
    }
    if (size === 420) {
        transformXvalue += 430
    }

    currPage = currPage - 1
    console.log(transformXvalue)
    check(transformXvalue)
    if (transformXvalue <= 0) {
        let a = 50
        counter.innerText = parseInt(counter.innerText) - 1
        let reversedAllPCs = reverse()
        for (let i = 0; i < reversedAllPCs.length; i++) {
            console.log("f")
            setTimeout(b => {
                reversedAllPCs[i].style.transform = `translateX(${transformXvalue}px)`
            }, a)
            a += 50
        }
    }

}
function rightScroll() {
    if (checkTimer <= 0) {
        return
    }
    setTimer()
    let size = document.querySelector('.PC').offsetWidth
    if (size === 385) {
        transformXvalue = transformXvalue - 1447.5
    }
    if (size === 738) {
        transformXvalue = transformXvalue - 748
    }
    if (size === 450) {
        transformXvalue = transformXvalue - 460
    }
    if (size === 420) {
        transformXvalue = transformXvalue - 430
    }

    currPage += 1
    console.log(currPage)
    console.log(transformXvalue)
    check(transformXvalue)
    if (transformXvalue <= 0) {
        let a = 50
        counter.innerText = parseInt(counter.innerText) + 1
        for (let i = 0; i < allPCs.length; i++) {
            setTimeout(b => {
                allPCs[i].style.transform = `translateX(${transformXvalue}px)`
            }, a)
            a += 50
        }
    }

}
let checkTimer = 0
function timer() {
    setInterval(function () {
        checkTimer += 1
    }, 1000)
}
function setTimer() {
    checkTimer = 0
}
timer()
check(0)