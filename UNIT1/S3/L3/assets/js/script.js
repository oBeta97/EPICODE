const form = document.getElementById('addItemTodo');
const newItemValue = document.getElementById('newItemValue');
const todoSectionDiv = document.querySelector('#todoSection .items-container');

const todoList = [];


form.addEventListener("submit", event => {
    event.preventDefault();
    todoList.push(newItemValue.value);
    InitLists();
});

function InitLists() {
    todoSectionDiv.innerHTML = '';
    todoList.forEach((item, index) => AddItemToList(todoSectionDiv, item, index))
}


function AddItemToList(targetList, val, valIndex) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const paragraph = document.createElement('p');
    paragraph.classList.add('item-text')
    paragraph.innerText = val;

    paragraph.addEventListener('click', function (event) {
        event.preventDefault();

        if (this.classList.contains('line-through-text'))
            this.classList.remove('line-through-text');
        else
            this.classList.add('line-through-text')
    })


    const doneButton = document.createElement('button');
    doneButton.type = 'button';
    doneButton.classList.add('done-button')

    const binIcon = document.createElement('i');
    binIcon.classList.add('fa-solid','fa-trash');
    
    doneButton.appendChild(binIcon);
    doneButton.addEventListener('click', function(event){
        event.preventDefault();
        todoList.splice(valIndex, 1);
        InitLists();
    })

    itemContainer.appendChild(paragraph);
    itemContainer.appendChild(doneButton);

    targetList.appendChild(itemContainer);
}

