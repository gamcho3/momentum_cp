const clock = document.querySelector('.clock');
//show todo
const todoBtn = document.querySelector('.todoBtn');
const todoMenu = document.querySelector('.todoMenu');
//gretting
const gretting = document.querySelector('.gretting');
const grettingForm = document.getElementById('grettingForm');
const grettinginput = document.querySelector('.inputGretting');

// main time
function realtime() {
    const time = new Date();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    clock.innerHTML = `${hour}:${minutes < 10 ? `0${minutes}` : minutes} `;

}


grettingForm.addEventListener("submit", submitName);

function submitName(event) {
    const currentValue = grettinginput.value;
    setName(currentValue);
}

function setName(name) {
    localStorage.setItem('currentuser', name);
}


//show todo-menu
todoBtn.addEventListener('click', () => {
    todoMenu.classList.toggle('showtodoMenu');
});


function init() {

    realtime();
    setInterval(realtime, 60000);
}

init();







