const clock = document.querySelector('.clock');
//show todo
const todoBtn = document.querySelector('.todoBtn');
const todoMenu = document.querySelector('.todoMenu');
//gretting
const gretting = document.querySelector('.gretting');
const grettingForm = document.getElementById('grettingForm');
const grettinginput = document.querySelector('.inputGretting');
//search
const formSearch = document.querySelector('.formSearch');
const iconSearch = document.querySelector('.iconSearch');
const inputSearch = document.querySelector('.inputSearch');

// main time
function realtime() {
    const time = new Date();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    clock.innerHTML = `${hour}:${minutes < 10 ? `0${minutes}` : minutes} `;

}

//main gretting

function loadName() {
    const currentName = localStorage.getItem('currentuser');
    if (currentName === null) {
        askName();
    } else {
        showName(currentName);
    }
}

function askName() {
    grettingForm.classList.add('showGretting');
    grettingForm.addEventListener("submit", submitName);
}

grettingForm.addEventListener("submit", submitName);

function submitName(event) {
    const currentValue = grettinginput.value;
    setName(currentValue);
    showName(currentValue);
}

function setName(name) {
    localStorage.setItem('currentuser', name);
}

function showName(name) {
    grettingForm.classList.remove('showGretting');
    const time = new Date();
    const hour = time.getHours();
    if (6 < hour < 12) {
        gretting.innerHTML = `<span>Good morning ${name}</span>`;
    } else if (11 < hour < 18) {
        gretting.innerHTML = `<span>Good afternoon ${name}</span>`;
    } else {
        gretting.innerHTML = `<span>Good evening ${name}</span>`;
    }
}


//show todo-menu
todoBtn.addEventListener('click', () => {
    todoMenu.classList.toggle('showtodoMenu');
});

//search menu
formSearch.addEventListener('submit', engine)

function engine(event) {
    event.preventDefault();
    const word = inputSearch.value;
    window.location.href = `https://www.google.com/search?q=${word}`;
}








function init() {
    loadName();
    realtime();
    setInterval(realtime, 60000);
}

init();







