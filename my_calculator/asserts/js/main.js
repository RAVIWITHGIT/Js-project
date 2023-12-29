let calculator_head = document.getElementById('calculator_head')

let mysign = ''
function add(g){
    if(mysign=="="){
        calculator_head.innerText = ''
        calculator_head.innerText+= g.innerText
        mysign = ''
        // console.log('if')

    }else{
        calculator_head.innerText+= g.innerText
        // console.log('else')
        console.log(mysign)

    }
    

}

function ad(g){
    calculator_head.innerText+= g.innerText
    mysign = g.innerText
}
function sub(g){
    calculator_head.innerText+= g.innerText
    mysign = g.innerText
}
function mul(g){
    calculator_head.innerText+= g.innerText
    mysign = g.innerText
}
function divid(g){
    calculator_head.innerText+= g.innerText
    mysign = g.innerText
}


function equal(g){
    let a = calculator_head.innerText
    mysign = g.innerText
        let b = eval(a)
        calculator_head.innerText = b

   

}

function clea(g){
    calculator_head.innerText = ''
}

function del(g){
    let a = calculator_head.innerText
    let arr = a.split('')
    console.log(arr)
    arr.length = arr.length-1
    calculator_head.innerText = arr.join('')
    calculator_head.innerText = calculator_head.slice(0,-1)
}