let hourText = document.querySelector("#hour")
let minuteText = document.querySelector("#minutes")
let secondText = document.querySelector("#seconds")

function updateTime(){
    let date = new Date()
    let hours = date.getHours()
    let mintes = date.getMinutes()
    let seconds = date.getSeconds()

    hourText.innerHTML = hours
    minuteText.innerHTML = mintes
    secondText.innerHTML = seconds
}

updateTime()

setInterval(updateTime, 1000)

