let base = document.querySelector('#firstNumber')
let height = document.querySelector('#secondNumber')
let calculate = document.querySelector('#calculate').addEventListener('click',calArea)

function calArea () {
    output.innerText = 'Area is: ' + (base.value * height.value)  * 0.5;
}