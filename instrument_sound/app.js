let Harmonium = document.getElementById('Harmonium')
let Breton = document.getElementById('Breton')
let Sitar = document.getElementById('Sitar')
let Flute = document.getElementById('Flute')
// let value = false
document.body.addEventListener('keydown',(event)=>{
    if (event.key=='h') {
        if(Harmonium.paused){
            Harmonium.play()
            console.log(value)
        }
        else{
            Harmonium.pause()

        }

    }
    else if (event.key=='b') {
        if(Breton.paused){
            Breton.play()
            console.log(value)
        }
        else{
            Breton.pause()
        }

    }
    else if (event.key=='s') {
        if(Sitar.paused){
            Sitar.play()
            console.log(value)
        }
        else{
            Sitar.pause()
        }
    

    }
    else if (event.key=='f') {
        if(Flute.paused){
            Flute.play()
            console.log(value)
        }
        else{
            Flute.pause()
        }

    }

})