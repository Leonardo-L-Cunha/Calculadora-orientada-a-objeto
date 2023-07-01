class Calculator {

    constructor() {
        this.upperValue = document.querySelector('#upper-number')
        this.resultValue = document.querySelector('#result-number')
        this.reset = 0
    }

    btnPress() {
        
    }
}

let calc = new Calculator

let buttons = document.querySelectorAll('.btn')

for (let i = 0; buttons.length > i; i++){
    buttons[i].addEventListener('click')
}