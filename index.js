const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    let today = new Date();
    let date = new Date().getDate()
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let remainingTime = christmas - date
    let time = (24 - hour) + "hours:" + (60 - minute) + "minutes:" + (60 - second) + "seconds"
    countdownDisplay.innerHTML = remainingTime + " days and " + time; 
}

renderCountdown()
setInterval(renderCountdown, 1000);