let fn = document.getElementById('fn')
let ln = document.getElementById('ln')
let sign = document.getElementById('sign')
let respara = document.getElementById('respara')

function add(){
    let fc = Number.parseInt(fn.value)
    let lc = Number.parseInt(ln.value)
    let g = sign.value

    switch (g) {
        case '+':
            respara.innerText = fc+lc
            console.log(fc+lc)
            break;
        case '-':
            respara.innerText = fc-lc

            console.log(fc-lc)
            break;
        case '*':
            respara.innerText = fc*lc

            console.log(fc*lc)
            break;
        case '/':
            respara.innerText = fc/lc

            console.log(fc/lc)
            break;
    
        default:
            alert('invalid sign')
            console.log('invalue sign')
            break;
    }
    fn.value = ''
    ln.value = ''
    sign.value = ''
}