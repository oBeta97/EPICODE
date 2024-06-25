/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

let title = document.querySelector('#pageTitle');

const changeTitle = function () {

    title.innerText = 'DOM Manipulation';
}

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    title.classList.add('myHeading')
}

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/
const pInsideDivs = document.querySelectorAll('div p');

const changePcontent = function () {
    pInsideDivs.forEach(item => item.innerText = 'questi sono i p all\' interno dei div');
}

changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const links = document.querySelectorAll('a:not(footer a)')

const changeUrls = function () {
    links.forEach(item => {
        item.setAttribute('href', 'https://www.google.com');
        item.setAttribute('target', '_blank');
    });
}

changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const secondList = document.querySelector('#secondList');
const addToTheSecond = function () {

    const liElement = document.createElement('li');
    liElement.classList.add('second-list-item')
    liElement.innerText = '<li> creato tramite JS';

    secondList.appendChild(liElement);
}

addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/
const titleContainerDiv = document.getElementById('titleContainer');
const addParagraph = function () {

    const pElement = document.createElement('p');
    pElement.classList.add('title-paragraph')
    pElement.innerText = '<p> creato tramite JS';

    titleContainerDiv.appendChild(pElement);
}

addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const firstList = document.querySelector('#firstList');
const hideFirstUl = function () {
    firstList.classList.add('hideElement');
}

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const everyList = document.querySelectorAll('ul');
const paintItGreen = function () {

    everyList.forEach(item => item.classList.add('green-bg-color'));

}

paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
    title.addEventListener("click", function () {
        this.innerText = this.innerText.slice(1);
    });
}

makeItClickable()


/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const footerDiv = document.querySelector('footer');
const revealFooterLink = function () {
    footerDiv.addEventListener("click", function () {
        const footerLinkElement = this.querySelector('a');
        const linkURL = footerLinkElement.getAttribute('href');
        alert(linkURL)
    });
}
revealFooterLink();

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
let tableAreaDiv = document.getElementById('tableArea');
const generateTable = function () {
    const tableRows = [];

    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 4; j++) {

            if (i === 0) {
                const th = document.createElement('th');
                switch (j) {
                    case 0:
                        th.innerText = `immagine`
                        break;
                    case 1:
                        th.innerText = `nome prodotto`
                        break;
                    case 2:
                        th.innerText = `quantità`
                        break;
                    case 3:
                        th.innerText = `prezzo`
                        break;

                }

                tr.appendChild(th);
                continue;
            }

            const td = document.createElement('td');
            td.innerText = `${i}.${j}`

            tr.appendChild(td);
        }

        tableRows.push(tr);
    }

    const tableElement = document.createElement('table');
    tableElement.setAttribute('id', 'jsTable')
    tableRows.forEach(tr => tableElement.appendChild(tr));


    tableAreaDiv.appendChild(tableElement);
}
generateTable()

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const jsTable = document.getElementById('jsTable');
const addRow = function (image, productName, quantity, price) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
        const td = document.createElement('td');
        switch (j) {
            case 0:
                td.innerText = image
                break;
            case 1:
                td.innerText = productName
                break;
            case 2:
                td.innerText = quantity
                break;
            case 3:
                td.innerText = price
                break;

        }

        tr.appendChild(td);
    }

    jsTable.appendChild(tr);

}

addRow('test','della','funzione', 'addRow')

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {

    const tr = jsTable.querySelectorAll('tr');

    for(let i = 0; i < tr.length; i++){
        let targetTr = tr[i];

        targetTr.firstElementChild.classList.add('hideElement');
    }

 }
 hideAllImages();
/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
const subtitle = titleContainerDiv.querySelector('h2');
const changeColorWithRandom = function () { 
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    subtitle.style.color = `rgb(${r} ${g} ${b})`

}

subtitle.addEventListener("click", changeColorWithRandom);