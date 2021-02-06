
//gretting
const gretting = document.querySelector('.gretting');
const grettingForm = document.getElementById('grettingForm');
const grettinginput = document.querySelector('.inputGretting');

// ask name - first screen
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

//set current name
function setName(name) {
    localStorage.setItem('currentuser', name);
}

//show my name
function showName(name) {
    grettingForm.classList.remove('showGretting');
    const time = new Date();
    const hour = time.getHours();

    if (6 < hour && hour < 12) {
        gretting.innerHTML = `<span>Good morning ${name}</span>`;
    } else if (11 < hour && hour < 18) {
        gretting.innerHTML = `<span>Good afternoon ${name}</span>`;
    } else {
        gretting.innerHTML = `<span>Good evening ${name}</span>`;
    }
}