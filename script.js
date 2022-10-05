function updateTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var am_pm = document.getElementById("am-or-pm");

    if (hours >= 12) {
        am_pm.innerHTML = "PM";
    } else {
        am_pm.innerHTML = "AM";

    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = dateTime.getMinutes();
    document.getElementById("seconds").innerHTML = dateTime.getSeconds();



    if (hours > 12) {
        hours = hours - 12;
    }

}
setInterval(updateTime, 1000);
updateTime();