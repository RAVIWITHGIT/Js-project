let text_box = document.getElementById('text_box')
let atodo = document.getElementById('atodo')
text_box.addEventListener("keyup",function (event) {
    if(event.key=="Enter"){
        addtodo(this.value)
        console.log(this.value)
        this.value = ""
    }    
    
})

const addtodo = (item)=>{
    const listitem = document.createElement("li")
    listitem.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark" id="icon" style="color: #fafcff;"></i>
    
    `;
    console.log(listitem)
    atodo.appendChild(listitem)
    listitem.querySelector("i").addEventListener("click",function () {
        listitem.remove()
        
    })


} 
