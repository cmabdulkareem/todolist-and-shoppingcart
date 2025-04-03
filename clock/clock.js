let hoursText = document.querySelector("#hour");
let minutesText = document.querySelector("#minute");
let secondsText = document.querySelector("#second");
let periodText = document.querySelector("#period");

function updateTime() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let period = "AM";

    // Convert 24-hour format to 12-hour format
    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }

    // Add leading zeros for single-digit values
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hoursText.innerHTML = hour;
    minutesText.innerHTML = minute;
    secondsText.innerHTML = second;
    periodText.innerHTML = period;
}

updateTime();
setInterval(updateTime, 1000);
