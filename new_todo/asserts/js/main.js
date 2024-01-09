let input_box = document.getElementById('input_box')
input_box.focus();
let add_button = document.getElementById('add_button')
let mytbody = document.getElementById('mytbody')
let edit_box = document.getElementById('edit_box')
let edit_div = document.getElementById('edit_div')
edit_div.style.display = "none"
let myinput_div = document.getElementById('myinput_div')

let g = 0
let l = 1
let arr = []

input_box.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (input_box.value) {

            event.preventDefault();
            arr.push([input_box.value, ''])
            mytbody.innerHTML = ''
            for (let i = 0; i < arr.length; i++) {
                mytbody.innerHTML += `
          <tr>
              <th scope="row" id="a${i}" class="check_th"  onclick="check(${i})" ><i id="c${i}" class="fa-solid fa-ucheck check_box"></i></th>
              <td id="text${i}" class="todo_text"><b>${arr[i][g]}</b></td>
              
              <td class="edit_td"><i class="fa-solid fa-pen-to-square" onclick="edit_todo(${i})"></i></td>
              <td class="delete_td"><i class="fa-solid fa-trash" onclick="del(${i})" ></i></td>
          </tr>
      `

            }

            console.log(arr)
            input_box.value = ''

        }

    }
});




function edit_todo(geti) {
    if (edit_div.style.display = "block") {
        myinput_div.style.display = "none"
        edit_box.value = arr[geti][0]
        index_box.value = geti
        console.log(edit_box)
        edit_box.focus();
    }
}

edit_box.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (edit_box.value) {

            event.preventDefault();
            if (edit_div.style.display = "block") {
                edit_div.style.display = "none"
                myinput_div.style.display = "block"
                input_box.focus();



            }
            arr[index_box.value][0] = edit_box.value
            console.log(arr)
            mytbody.innerHTML = ''
            for (let i = 0; i < arr.length; i++) {
                mytbody.innerHTML += `
        <tr>
            <th scope="row" id="a${i}" class="check_th"  onclick="check(${i})" ><i id="c${i}" class="fa-solid fa-ucheck check_box"></i></th>
            <td id="text${i}" class="todo_text"><b>${arr[i][g]}</b></td>
            <td class="edit_td"><i class="fa-solid fa-pen-to-square" onclick="edit_todo(${i})"></i></td>
            <td class="delete_td"><i class="fa-solid fa-trash" onclick="del(${i})" ></i></td>
        </tr>
    `

            }
        }

    }
});




function del(geti) {
    if (arr[geti][1]) {
        arr.splice(geti, 1)
        mytbody.innerHTML = ''
        
        for (let i = 0; i < arr.length; i++) {
            mytbody.innerHTML += `
        <tr>
        <th scope="row" id="a${i}" class="check_th" onclick="check(${i})" ><i id="c${i}" class=""></i></th>
            <td id="text${i}" class="todo_text">${arr[i][g]}</td>
            <td class="edit_td"><i class="fa-solid fa-pen-to-square" onclick="edit_todo(${i})"></i></td>
            <td class="delete_td"><i class="fa-solid fa-trash" onclick="del(${i})" ></i></td>
        </tr>
    `
            let checkid = document.getElementById(`c${i}`)
            let text = document.getElementById(`text${i}`)
            if (arr[i][1]) {
                checkid.className = 'fa-solid fa-check check_box'
                text.innerHTML = `<b><del class="line_throw">${arr[i][0]}</del></b>`
            } else {
                checkid.className = 'fa-solid fa-ucheck check_box'
                text.innerHTML = `<b>${arr[i][0]}</b>`
            }

        }
    input_box.focus();


    }
    else {
        alert('Plese Check The Box')
    input_box.focus();

    }

}


function check(geti) {
    let checkid = document.getElementById(`c${geti}`)
    let text = document.getElementById(`text${geti}`)
    if (checkid.classList[1] == 'fa-ucheck') {
        checkid.className = 'fa-solid fa-check check_box'
        text.innerHTML = `<b><del class="line_throw">${arr[geti][0]}</del></b>`
        arr[geti][1] = true
        console.log(arr[geti])
    } else {
        checkid.className = 'fa-solid fa-ucheck check_box'
        text.innerHTML = `<b>${arr[geti][0]}</b>`
        arr[geti][1] = ''
        console.log(arr[geti])
    }
}

