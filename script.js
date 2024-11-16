function createCanvas () {
    const sectionDOM = document.querySelector('#canvas')
    for (let i = 1; i <= 10; i++) {
        const divDom = document.createElement('div')
        sectionDOM.insertAdjacentElement('beforeend', divDom)
        const selectedDiv = document.querySelector(`#canvas>div:nth-child(${i})`)
        for (let j = 0; j < 10; j++) {
            const pDom = document.createElement('p')
            selectedDiv.insertAdjacentElement('beforeend', pDom)
        }
    }
}


function addEventListners () {
    const pDomArr = document.querySelectorAll("p")
    for (pDom of pDomArr) {
        pDom.addEventListener('click', colorElement)
    }
}

function colorElement () {
    event.target.style.backgroundColor = 'black'
}

createCanvas()
addEventListners()