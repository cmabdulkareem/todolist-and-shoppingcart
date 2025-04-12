// a sample button in html
{/* <div class="btn" id="+">+</div> */}

let btns = document.querySelectorAll(".btn")
let display = document.querySelector("#display")

btns.forEach((btn)=>{
    btn.onclick = ()=>{
        if(display.value == "0"){
            display.value = ""
        }else{
            display.value == "0"
        }
        display.value += `${btn.id}`
    }
})

document.querySelector("#c").onclick = ()=>{
    display.value = "0"
}

document.querySelector("#eq").onclick = ()=>{
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}