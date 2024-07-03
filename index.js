const currentTime = document.getElementById("currentTime");
const currentDay = document.getElementById("currentDay");

function displayTime(){
    var now = new Date();
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    var hours = now.getUTCHours().toString().padStart(2, '0');
    var minutes = now.getUTCMinutes().toString().padStart(2, '0');
    var seconds = now.getUTCSeconds().toString().padStart(2, '0');
    var day = daysOfTheWeek[now.getUTCDay()];

    var utcTime = hours + ':' + minutes + ':' + seconds

    currentTime.innerHTML = utcTime
    currentDay.innerHTML = day
}

setInterval(displayTime, 1000);

displayTime();