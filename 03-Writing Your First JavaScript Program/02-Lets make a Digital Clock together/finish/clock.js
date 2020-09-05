var clockElement = document.getElementById("clock");

function tick() {
    var now = new Date();
    clockElement.innerHTML = now.getHours() + " : " + 
        now.getMinutes() + " : " + now.getSeconds();
}

setInterval(tick, 1000);