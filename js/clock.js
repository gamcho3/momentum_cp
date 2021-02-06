const clock = document.querySelector('.clock');


// main time
function realtime() {
    const time = new Date();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    clock.innerHTML = `${hour}:${minutes < 10 ? `0${minutes}` : minutes} `;

}
realtime();
setInterval(realtime, 60000);