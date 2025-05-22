const cases = ['ExeGate BA-202', 'ExeGate BA-201', 'ARDOR GAMING Mystic', 'PowerCase Mistral Micro Z3W', 'PowerCase Vision Micro M', 'PCCooler C3D310 BK', 'Оклик OCC-MN302F']
const casesCharacteristics = {
    "ExeGate BA-202": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Чёрный",
        "Материал": "пластик, сталь",
        "Толщина металла": "0.45 мм",
        "Длина": "355мм",
        "Ширина": "185мм",
        "Высота": "370мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "верхнее",
        "Слоты расширения": "4",
        "Максимальная длина видеокарты": "200мм",
        "Максимальная высота кулера": "130мм",
        "Количество отсеков 2.5\"": "1 шт",
        "Количество внутренних отсеков 3.5\"": "2 шт",
        "Количество внешних отсеков 3.5\"": "2 шт",
        "Число отсеков 5.25\"": "2 шт",
        "Тыловые вентиляторы": "1х92мм или 1х80мм",
        "Верхние вентиляторы": "нет",
        "Фронтальные вентиляторы": "нет",
        "Нижние вентиляторы": "нет",
        "Боковые вентиляторы": "1х120мм или 1х80мм",
        "Разъёмы": "3.5 мм jack (аудио) х 1, 3.5 мм jack (микрофон) х 1, USB 2.0 Type-A х 2"
    },
    "ExeGate BA-201": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Чёрный",
        "Материал": "пластик, сталь",
        "Толщина металла": "0.45 мм",
        "Длина": "355мм",
        "Ширина": "175мм",
        "Высота": "365мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "верхнее",
        "Слоты расширения": "4",
        "Максимальная длина видеокарты": "200мм",
        "Максимальная высота кулера": "130мм",
        "Количество отсеков 2.5\"": "1 шт",
        "Количество внутренних отсеков 3.5\"": "2 шт",
        "Количество внешних отсеков 3.5\"": "2 шт",
        "Число отсеков 5.25\"": "2 шт",
        "Тыловые вентиляторы": "1х92мм или 1х80мм",
        "Верхние вентиляторы": "нет",
        "Фронтальные вентиляторы": "нет",
        "Нижние вентиляторы": "нет",
        "Боковые вентиляторы": "1х120мм или 1х80мм",
        "Разъёмы": "3.5 мм jack (аудио) х 1, 3.5 мм jack (микрофон) х 1, USB 2.0 Type-A х 2"
    },
    "ARDOR GAMING Mystic": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Черный",
        "Материал": "сталь, стекло",
        "Толщина металла": "0.6 мм",
        "Длина": "355мм",
        "Ширина": "175мм",
        "Высота": "365мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX, Mini-ITX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "нижнее",
        "Слоты расширения": "4",
        "Максимальная длина видеокарты": "320мм",
        "Максимальная высота кулера": "160мм",
        "Количество отсеков 2.5\"": "2 шт",
        "Количество внутренних отсеков 3.5\"": "1 шт",
        "Количество внешних отсеков 3.5\"": "0 шт",
        "Число отсеков 5.25\"": "0 шт",
        "Тыловые вентиляторы": "1х120мм",
        "Верхние вентиляторы": "2х120мм",
        "Фронтальные вентиляторы": "нет",
        "Нижние вентиляторы": "2х120мм",
        "Боковые вентиляторы": "2х120мм",
        "Разъёмы": "3.5 мм jack (микрофон/аудио) х 1, USB 2.0 Type-A х 1, USB 3.2 Gen 1 Type-A х 1, USB 3.2 Gen 1 Type-C х 1"
    },
    "PowerCase Mistral Micro Z3W": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Белый",
        "Материал": "пластик, сталь, стекло",
        "Толщина металла": "0.4 мм",
        "Длина": "335мм",
        "Ширина": "200мм",
        "Высота": "385мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX, Mini-ITX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "нижнее",
        "Слоты расширения": "4",
        "Максимальная длина видеокарты": "280мм",
        "Максимальная высота кулера": "160мм",
        "Количество отсеков 2.5\"": "2 шт",
        "Количество внутренних отсеков 3.5\"": "1 шт",
        "Количество внешних отсеков 3.5\"": "0 шт",
        "Число отсеков 5.25\"": "0 шт",
        "Тыловые вентиляторы": "1х120мм",
        "Верхние вентиляторы": "2х120мм",
        "Фронтальные вентиляторы": "2х140мм",
        "Нижние вентиляторы": "2х120мм",
        "Боковые вентиляторы": "нет",
        "Разъёмы": "3.5 мм jack (аудио) х 1, 3.5 мм jack (микрофон) х 1, USB 2.0 Type-A х 2, USB 3.2 Gen 1 Type-A х 1"
    },
    "PowerCase Vision Micro M": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Белый",
        "Материал": "пластик, сталь, стекло",
        "Толщина металла": "0.4 мм",
        "Длина": "333мм",
        "Ширина": "210мм",
        "Высота": "450мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX, Mini-ITX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "нижнее",
        "Слоты расширения": "5",
        "Максимальная длина видеокарты": "340мм",
        "Максимальная высота кулера": "160мм",
        "Количество отсеков 2.5\"": "2 шт",
        "Количество внутренних отсеков 3.5\"": "1 шт",
        "Количество внешних отсеков 3.5\"": "0 шт",
        "Число отсеков 5.25\"": "0 шт",
        "Тыловые вентиляторы": "1х120мм",
        "Верхние вентиляторы": "2х120мм или 2х140мм",
        "Фронтальные вентиляторы": "нет",
        "Нижние вентиляторы": "2х120мм",
        "Боковые вентиляторы": "2х120мм",
        "Разъёмы": "3.5 мм jack (микрофон/аудио) х 1, USB 2.0 Type-A х 1, USB 3.2 Gen 1 Type-A х 1"
    },
    "PCCooler C3D310 BK": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Черный",
        "Материал": "пластик, сталь, стекло",
        "Толщина металла": "0.6 мм",
        "Длина": "406мм",
        "Ширина": "220мм",
        "Высота": "410мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX, Mini-ITX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "нижнее",
        "Слоты расширения": "4",
        "Максимальная длина видеокарты": "350мм",
        "Максимальная высота кулера": "165мм",
        "Количество отсеков 2.5\"": "3 шт",
        "Количество внутренних отсеков 3.5\"": "2 шт",
        "Количество внешних отсеков 3.5\"": "0 шт",
        "Число отсеков 5.25\"": "0 шт",
        "Тыловые вентиляторы": "1х120мм",
        "Верхние вентиляторы": "2х120мм или 2х140мм",
        "Фронтальные вентиляторы": "нет",
        "Нижние вентиляторы": "2х120мм",
        "Боковые вентиляторы": "2х120мм",
        "Разъёмы": "3.5 мм jack (микрофон/аудио) х 1, USB 3.2 Gen 1 Type-A х 2"
    },
    "Оклик OCC-MN302F": {
        "Форм-фактор": "Mini-Tower",
        "Цвет": "Белый",
        "Материал": "сталь, стекло",
        "Толщина металла": "0.4 мм",
        "Длина": "295мм",
        "Ширина": "170мм",
        "Высота": "350мм",
        "Подсветка корпуса": "нет",
        "Форм-фактор совместимых плат": "Micro-ATX, Mini-ITX",
        "Форм-фактор совместимых БП": "ATX",
        "Размещение блока питания": "нижнее",
        "Слоты расширения": "4",
        "Максимальная длина видеокарты": "250мм",
        "Максимальная высота кулера": "150мм",
        "Количество отсеков 2.5\"": "2 шт",
        "Количество внутренних отсеков 3.5\"": "1 шт",
        "Количество внешних отсеков 3.5\"": "0 шт",
        "Число отсеков 5.25\"": "0 шт",
        "Тыловые вентиляторы": "1х80мм",
        "Верхние вентиляторы": "нет",
        "Фронтальные вентиляторы": "2х120мм",
        "Нижние вентиляторы": "нет",
        "Боковые вентиляторы": "нет",
        "Разъёмы": "3.5 мм jack (аудио) х 1, 3.5 мм jack (микрофон) х 1, USB 2.0 Type-A х 1, USB 3.2 Gen 1 Type-A х 1"
    },
}

const motherboards = ['MSI MEG X870E GODLIKE']
const motherboardsCharacteristics = {
    "MSI MEG X870E GODLIKE": {
        "Форм-фактор": "E-ATX",
        "Высота": "305мм",
        "Ширина": "277мм",
        "Сокет": "AM5",
        "Чипсет": "X870E",
        "Тип поддерживаемой памяти": "DDR5",
        "Количество слотов памяти": "4",
        "Количество каналов памяти": "2",
        "Максимальный объём памяти": "256 ГБ",
        "Максимальная частота памяти": "5600 МГц",
        "Версия PCI-e": "5.0",
        "Слоты PCI-e x16": "1",
        "Другие слоты расширения": "1xPCI-e x4",
        "Поддержка NVMe": "есть",
        "Версия NVMe": "5.0",
        "Количество разъёмов NVMe": "5",
        "Порты задней панели": "8xUSB 3.2 Gen 2, 2xUSB4 Type-C, 5xUSB 3.2 Gen 2 Type-C, 2xRJ24",
        "Версия аудио": "7.1",
        "Скороть сетевого адаптера": "10 ГБит",
        "Стандарт WIFI": "7 (802.11be)",
        "Версия Bluetooth": "5.4",
        "Подсветка элементов платы": "есть",
    }
}

const cpus = ['AMD Ryzen 9 9950X3D']
const cpusCharacteristics = {
    "AMD Ryzen 9 9950X3D": {
        "Сокет": "AM5",
        "Количество ядер": "16",
        "Количество потоков": "32",
        "Объём кэша L3": "128 МБ",
        "Техпроцесс": "4нм",
        "Базовая частота": "4.3 ГГц",
        "Максимальная частота": "5.7 ГГц",
        "Тип памяти": "DDR5",
        "Максимальный объём памяти": "192 ГБ",
        "Частота оперативной памяти": "5600 МГц",
        "Тепловыделение": "170 Вт",
        "Интегрированное графическое ядро": "есть",
        "Максимальная частота графического ядра": "2200 МГц",
        "Версия PCI-e": "5.0",
        "Число линий PCI-e": "24 шт",
    }
}

const gpus = ['MSI GeForce RTX 5090 VANGUARD SOC']
const gpusCharacteristics = {
    "MSI GeForce RTX 5090 VANGUARD SOC": {
        "Графический процессор": "GeForce RTX 5090",
        "Микроархитектура": "NVIDIA Blackwell",
        "Техпроцесс": "5нм",
        "Безовая частота видеочипа": "2017 МГц",
        "Максимальная частота видеочипа": "2527 МГц",
        "Объём видеопамяти": "32 ГБ",
        "Тип памяти": "GDDR7",
        "Разрядность шины памяти": "512 бит",
        "Максимальная пропускная способность памяти": "1792 ГБ/сек",
        "Частота памяти": "28000 МГц",
        "Количество разъёмов": "3xDisplayPort, 3xHDMI",
        "Версия HDMI": "2.1b",
        "Версия DisplayPort": "2.1b",
        "Максимальное разрешение": "7680x4320 (8K Ultra HD)",
        "Интерфейс подключения": "PCI-e 5.0",
        "Форм-фактор разъёма подключения": "PCIe x16",
        "Количество линий PCIe": "16",
        "Потребляемая мощность": "575 Вт",
        "Количество вентиляторов": "3",
        "Длина видеокарты": "357мм",
        "Ширина видеокарты": "151мм",
        "Толщина видеокарты": "76мм",
        "Количество занимаемых слотов расширения": "3.8",
    }
}

const rams = ['Kingston FURY Beast White RGB']
const ramsCharacteristics = {
    "Kingston FURY Beast White RGB": {
        "Тип памяти": "DDR5",
        "Количество модулей в комплекте": "4",
        "Суммарный объём памяти": "128 ГБ",
        "Объём памяти 1 модуля": "32 ГБ",
        "Тактовая частота": "5600 МГц",
        "Наличие радиатора": "есть",
        "Цвет радиатора": "белый",
        "Подсветка элементов платы": "RGB",
        "Высота": "42.23 мм",
    }
}

const ssds = ['ADATA XPG BLADE S70']
const ssdsCharacteristics = {
    "ADATA XPG BLADE S70": {
        "Объём накопителя": "8000 ГБ",
        "Форм-фактор": "2280",
        "Физический интерфейс": "PCIe 4.0 x4",
        "NVMe": "да",
        "Максимальная скорость последовательного чтения": "7300 МБ/с",
        "Максимальная скорость последовательной записи": "6300 МБ/с",
        "Максимальный ресурс записи": "5920 ТБ",
        "Радиатор": "есть",
    }
}

const psus = ["ADATA XPG FUSION 1600 TITANIUM"]
const psusCharacteristics = {
    "ADATA XPG FUSION 1600 TITANIUM": {
        "Форм-фактор": "ATX",
        "Модульный": "полностью",
        "Мощность по линии 12 В": "1600 Вт",
        "Система охлаждения": "активная",
        "Сертификат 80 PLUS": "Titanium",
    }
}


function casesPopup() {
    const popup = document.querySelector('.casesPopup')
    popup.style.display = 'flex'
}

function motherboardsPopup() {
    const popup = document.querySelector('.motherboardsPopup')
    popup.style.display = 'flex'
}

function cpusPopup() {
    const popup = document.querySelector('.cpusPopup')
    popup.style.display = 'flex'
}

function gpusPopup() {
    const popup = document.querySelector('.gpusPopup')
    popup.style.display = 'flex'
}

function ramsPopup() {
    const popup = document.querySelector('.ramsPopup')
    popup.style.display = 'flex'
}

function ssdsPopup() {
    const popup = document.querySelector('.ssdsPopup')
    popup.style.display = 'flex'
}

function psusPopup() {
    const popup = document.querySelector('.psusPopup')
    popup.style.display = 'flex'
}



function selectCase(num) {
    const caseContainer = document.querySelector('.case')
    if (caseContainer.children[0].children[1].children.length !== 1) {
        caseContainer.children[0].children[1].removeChild(caseContainer.children[0].children[1].children[0])
        caseContainer.children[0].children[1].removeChild(caseContainer.children[0].children[1].children[0])
        let a = caseContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            caseContainer.children[0].children[1].children[0].removeChild(caseContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = cases[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    caseContainer.children[0].children[1].prepend(characteristicsText)
    caseContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = caseContainer.children[0].children[1].children[2]

    caseContainer.children[0].children[2].innerText = '4000 ₽'
    caseContainer.children[0].children[3].innerText = 'Поменять'
    caseContainer.children[0].children[3].setAttribute('class', 'change')
    caseContainer.children[1].setAttribute('src', `../res/img/cases/${cases[num]}.png`)
    for (let i = 0; i < Object.keys(casesCharacteristics[cases[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(casesCharacteristics[cases[num]])[i]
        let p = document.createElement('p')
        p.innerText = casesCharacteristics[cases[num]][Object.keys(casesCharacteristics[cases[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.casesPopup')
    popup.style.display = 'none'
    changePrice()
}

function selectMotherboard(num) {
    const motherboardContainer = document.querySelector('.motherboard')
    if (motherboardContainer.children[0].children[1].children.length !== 1) {
        motherboardContainer.children[0].children[1].removeChild(motherboardContainer.children[0].children[1].children[0])
        motherboardContainer.children[0].children[1].removeChild(motherboardContainer.children[0].children[1].children[0])
        let a = motherboardContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            motherboardContainer.children[0].children[1].children[0].removeChild(motherboardContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = motherboards[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    motherboardContainer.children[0].children[1].prepend(characteristicsText)
    motherboardContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = motherboardContainer.children[0].children[1].children[2]

    motherboardContainer.children[0].children[2].innerText = '127 000 ₽'
    motherboardContainer.children[0].children[3].innerText = 'Поменять'
    motherboardContainer.children[0].children[3].setAttribute('class', 'change')
    motherboardContainer.children[1].setAttribute('src', `../res/img/motherboards/${motherboards[num]}.png`)
    for (let i = 0; i < Object.keys(motherboardsCharacteristics[motherboards[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(motherboardsCharacteristics[motherboards[num]])[i]
        let p = document.createElement('p')
        p.innerText = motherboardsCharacteristics[motherboards[num]][Object.keys(motherboardsCharacteristics[motherboards[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.motherboardsPopup')
    popup.style.display = 'none'
    changePrice()
}

function selectCPU(num) {
    const cpuContainer = document.querySelector('.cpu')
    if (cpuContainer.children[0].children[1].children.length !== 1) {
        cpuContainer.children[0].children[1].removeChild(cpuContainer.children[0].children[1].children[0])
        cpuContainer.children[0].children[1].removeChild(cpuContainer.children[0].children[1].children[0])
        let a = cpuContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            cpuContainer.children[0].children[1].children[0].removeChild(cpuContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = motherboards[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    cpuContainer.children[0].children[1].prepend(characteristicsText)
    cpuContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = cpuContainer.children[0].children[1].children[2]

    cpuContainer.children[0].children[2].innerText = '81 000 ₽'
    cpuContainer.children[0].children[3].innerText = 'Поменять'
    cpuContainer.children[0].children[3].setAttribute('class', 'change')
    cpuContainer.children[1].setAttribute('src', `../res/img/cpus/${cpus[num]}.png`)
    for (let i = 0; i < Object.keys(cpusCharacteristics[cpus[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(cpusCharacteristics[cpus[num]])[i]
        let p = document.createElement('p')
        p.innerText = cpusCharacteristics[cpus[num]][Object.keys(cpusCharacteristics[cpus[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.cpusPopup')
    popup.style.display = 'none'
    changePrice()
}

function selectGPU(num) {
    const gpuContainer = document.querySelector('.gpu')
    if (gpuContainer.children[0].children[1].children.length !== 1) {
        gpuContainer.children[0].children[1].removeChild(gpuContainer.children[0].children[1].children[0])
        gpuContainer.children[0].children[1].removeChild(gpuContainer.children[0].children[1].children[0])
        let a = gpuContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            gpuContainer.children[0].children[1].children[0].removeChild(gpuContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = motherboards[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    gpuContainer.children[0].children[1].prepend(characteristicsText)
    gpuContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = gpuContainer.children[0].children[1].children[2]

    gpuContainer.children[0].children[2].innerText = '470 000 ₽'
    gpuContainer.children[0].children[3].innerText = 'Поменять'
    gpuContainer.children[0].children[3].setAttribute('class', 'change')
    gpuContainer.children[1].setAttribute('src', `../res/img/gpus/${gpus[num]}.png`)
    for (let i = 0; i < Object.keys(gpusCharacteristics[gpus[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(gpusCharacteristics[gpus[num]])[i]
        let p = document.createElement('p')
        p.innerText = gpusCharacteristics[gpus[num]][Object.keys(gpusCharacteristics[gpus[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.gpusPopup')
    popup.style.display = 'none'
    changePrice()
}

function selectRAM(num) {
    const ramContainer = document.querySelector('.ram')
    if (ramContainer.children[0].children[1].children.length !== 1) {
        ramContainer.children[0].children[1].removeChild(ramContainer.children[0].children[1].children[0])
        ramContainer.children[0].children[1].removeChild(ramContainer.children[0].children[1].children[0])
        let a = ramContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            ramContainer.children[0].children[1].children[0].removeChild(ramContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = motherboards[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    ramContainer.children[0].children[1].prepend(characteristicsText)
    ramContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = ramContainer.children[0].children[1].children[2]

    ramContainer.children[0].children[2].innerText = '53 000 ₽'
    ramContainer.children[0].children[3].innerText = 'Поменять'
    ramContainer.children[0].children[3].setAttribute('class', 'change')
    ramContainer.children[1].setAttribute('src', `../res/img/rams/${rams[num]}.png`)
    for (let i = 0; i < Object.keys(ramsCharacteristics[rams[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(ramsCharacteristics[rams[num]])[i]
        let p = document.createElement('p')
        p.innerText = ramsCharacteristics[rams[num]][Object.keys(ramsCharacteristics[rams[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.ramsPopup')
    popup.style.display = 'none'
    changePrice()
}

function selectSSD(num) {
    const ssdContainer = document.querySelector('.ssd')
    if (ssdContainer.children[0].children[1].children.length !== 1) {
        ssdContainer.children[0].children[1].removeChild(ssdContainer.children[0].children[1].children[0])
        ssdContainer.children[0].children[1].removeChild(ssdContainer.children[0].children[1].children[0])
        let a = ssdContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            ssdContainer.children[0].children[1].children[0].removeChild(ssdContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = motherboards[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    ssdContainer.children[0].children[1].prepend(characteristicsText)
    ssdContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = ssdContainer.children[0].children[1].children[2]

    ssdContainer.children[0].children[2].innerText = '68 000 ₽'
    ssdContainer.children[0].children[3].innerText = 'Поменять'
    ssdContainer.children[0].children[3].setAttribute('class', 'change')
    ssdContainer.children[1].setAttribute('src', `../res/img/ssds/${ssds[num]}.png`)
    for (let i = 0; i < Object.keys(ssdsCharacteristics[ssds[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(ssdsCharacteristics[ssds[num]])[i]
        let p = document.createElement('p')
        p.innerText = ssdsCharacteristics[ssds[num]][Object.keys(ssdsCharacteristics[ssds[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.ssdsPopup')
    popup.style.display = 'none'
    changePrice()
}

function selectPSU(num) {
    const psuContainer = document.querySelector('.psu')
    if (psuContainer.children[0].children[1].children.length !== 1) {
        psuContainer.children[0].children[1].removeChild(psuContainer.children[0].children[1].children[0])
        psuContainer.children[0].children[1].removeChild(psuContainer.children[0].children[1].children[0])
        let a = psuContainer.children[0].children[1].children[0].children.length
        for (let i = 0; i < a; i++) {
            psuContainer.children[0].children[1].children[0].removeChild(psuContainer.children[0].children[1].children[0].children[0])
        }
    }
    let productName = document.createElement('h1')
    productName.innerText = motherboards[num]
    let characteristicsText = document.createElement('h2')
    characteristicsText.innerText = 'Характеристики'
    psuContainer.children[0].children[1].prepend(characteristicsText)
    psuContainer.children[0].children[1].prepend(productName)


    let constructorElementCharacteristicsContainer = psuContainer.children[0].children[1].children[2]

    psuContainer.children[0].children[2].innerText = '52 000 ₽'
    psuContainer.children[0].children[3].innerText = 'Поменять'
    psuContainer.children[0].children[3].setAttribute('class', 'change')
    psuContainer.children[1].setAttribute('src', `../res/img/psus/${psus[num]}.png`)
    for (let i = 0; i < Object.keys(psusCharacteristics[psus[num]]).length; i++) {
        let constructorCharacteristic = document.createElement('div')
        constructorCharacteristic.setAttribute('class', 'constructorCharacteristic')
        let h3 = document.createElement('h3')
        h3.innerText = Object.keys(psusCharacteristics[psus[num]])[i]
        let p = document.createElement('p')
        p.innerText = psusCharacteristics[psus[num]][Object.keys(psusCharacteristics[psus[num]])[i]]
        constructorElementCharacteristicsContainer.appendChild(constructorCharacteristic)
        constructorCharacteristic.appendChild(h3)
        constructorCharacteristic.appendChild(p)
    }
    const popup = document.querySelector('.psusPopup')
    popup.style.display = 'none'
    changePrice()
}
let constructorPrices = document.querySelectorAll('.constructorPrice')
function changePrice() {
    let totalPrice = 0
    let totalComponents = 0
    for (let i = 0; i < constructorPrices.length; i++) {
        let total = document.querySelector('.total')

        let price = 0
        if (!isNaN(parseInt(constructorPrices[i].innerText.replaceAll(/[^0-9]/g, "")))) {
            price = parseInt(constructorPrices[i].innerText.replaceAll(/[^0-9]/g, ""))
            totalComponents += 1
        }

        totalPrice += price
        total.children[0].innerText = 'Итого: ' + totalPrice.toLocaleString() + ' ₽'
        if (totalComponents === 7) {
            total.children[1].removeAttribute('disabled')
        }
    }

}

function addToCart() {
    let total = document.querySelector('.total')
    let price = total.children[0].innerText.replaceAll(/[^0-9]/g, "")
    localStorage.setItem('Собственная сборка', '1')
    localStorage.setItem('Цена Собственная сборка', price)
    document.location.href = 'cart.html'
}