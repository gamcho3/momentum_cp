
//focus
const enterFocus = document.querySelector('.enterFocus');
const focusContainer = document.querySelector('.focusContainer');
const enterFocusForm = document.getElementById('enterFocusForm');
const mainFocus = document.querySelector('.mainFocus')
const mainFocusContainer = document.querySelector('.mainFocusContainer');

//focus
function loadFocus() {
    const focus = localStorage.getItem('point');
    if (focus !== null) {
        focusContainer.innerHTML = '';
        const focusDiv = document.createElement('div');
        focusDiv.classList.add('focusEl');
        focusDiv.innerHTML = `
        <input type="checkbox"></button>
        <span>${focus} <i class="fa fa-trash"></i></span>
        `;

        focusContainer.appendChild(focusDiv);
    }

}

enterFocusForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const focus = enterFocus.value;
    localStorage.setItem('point', focus);
    focusContainer.classList.remove('showing');
    mainFocus.classList.add('mainFocusShowing');
})



loadFocus();