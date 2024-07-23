
const insertName = document.getElementById("insertName");
const deleteName = document.getElementById("deleteName");
const userName = document.getElementById("userName");
const insertedName = document.getElementById('insertedName')
const timer = document.getElementById('timer');

window.addEventListener('load', function () {

    timer.innerText = sessionStorage.getItem("timer") ?? 0;

    let localStorageName = localStorage.getItem('insertedName');

    insertName.addEventListener('click', function () {
        localStorage.setItem('insertedName', userName.value)
        updatedLocalStorage();
    });

    deleteName.addEventListener('click', function () {
        if (!localStorage.getItem('insertedName'))
            return;

        localStorage.removeItem('insertedName')
        updatedLocalStorage ()
    });

    if (localStorageName)
        updatedLocalStorage();

    setInterval(() => {
        let timerNumber = sessionStorage.getItem("timer");
        document.getElementById('timer').innerText = timerNumber ?? 1;
        timerNumber++; 
        sessionStorage.setItem('timer', timerNumber)
    }, 1000);
})

function updatedLocalStorage (){

    let x = localStorage.getItem('insertedName');

    insertedName.innerText = x;
    insertName.value = x;
    userName.value = '';
    
    if(x && deleteName.classList.contains('disabled'))
        deleteName.classList.remove('disabled');
    
    if(!x && !deleteName.classList.contains('disabled'))
        deleteName.classList.add('disabled');

}