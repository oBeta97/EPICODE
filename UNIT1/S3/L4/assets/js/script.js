const tombolaBoard = document.getElementById('tombolaBoardZone');
const inputsSection = document.getElementById('inputsSection');
const userboardsSection = document.getElementById('userboardsSection');
const pickBoardsForm = document.getElementById('pickBoardsForm');
const drawnNumber = document.getElementById('drawnNumber');

const numbersDrawned = [];

window.addEventListener("load", function(e){
    init();
});

const RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function init(){
    CreateTombolaBoard(tombolaBoard);
    drawnNumber.setAttribute('disabled', 'true');
    userboardsSection.innerHTML = '';
    pickBoardsForm.reset();
    numbersDrawned.splice(0)
}

function CreateTombolaBoard(targetDiv){
    targetDiv.innerHTML = '';

    const tab = document.createElement('table');
    
    const caption = document.createElement('caption');
    const captionTitle = document.createElement('h1');
    captionTitle.innerText = 'TRENBOLONE';
    caption.appendChild(captionTitle);

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    let n = 0;
    for(let i = 1; i <= 10; i++){
        const tr = document.createElement('tr');
        for(let j = 1; j <= 9; j++){
            const td = document.createElement('td');
            let val = ++n
            td.id = `td${val}`;
            td.innerText = val;

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tab
        .appendChild(caption)
        .appendChild(thead)
        .appendChild(tbody);

    targetDiv.appendChild(tab);
}

function CreateUserBoards(targetDiv, nBoards){
    targetDiv.innerHTML = '';

    for(let n = 0; n < nBoards; n++){

        const tab = document.createElement('table');
        tab.classList.add('user-board')
        
        const caption = document.createElement('caption');

        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
       
        
        const numbers = []
        for(let i = 1; i <= 3; i++){
            const tr = document.createElement('tr');
            for(let j = 1; j <= 5; j++){
                const td = document.createElement('td');
                
                let n = RandomNumberGenerator(1,90);
                
                if(!numbers.includes(n)){
                    td.id = `userTd${n}`;
                    numbers.push(n);
                    td.innerText = n;
                    tr.appendChild(td);
                }
                else
                    j--;
            }
            tbody.appendChild(tr);
        }

        tab
            .appendChild(caption)
            .appendChild(thead)
            .appendChild(tbody);

        targetDiv.appendChild(tab);
    }

}

pickBoardsForm.addEventListener('submit', function(e){
    e.preventDefault();

    drawnNumber.removeAttribute('disabled');
    // setAttribute('disabled', 'false');


    const boardQuantity = pickBoardsForm.querySelector('#boardQuantity').value;

    CreateUserBoards(userboardsSection, boardQuantity);

});

drawnNumber.addEventListener('click', function (){
    
    if(numbersDrawned.length === 90){
        if(confirm('Want to replay?')){
            init();
            return;
        }
    }
        
    
    let tempWhile = true; 
    while(tempWhile){
        let numberDrawned = RandomNumberGenerator(1, 90);
        if(!numbersDrawned.includes(numberDrawned)){
            const targetTd = document.getElementById(`td${numberDrawned}`);
            targetTd.classList.add('drawned');
            
            const userTd = document.getElementById(`userTd${numberDrawned}`);
            if(userTd !== null)
                userTd.classList.add('drawned');

            numbersDrawned.push(numberDrawned);

            tempWhile = false;
        }
    }
});