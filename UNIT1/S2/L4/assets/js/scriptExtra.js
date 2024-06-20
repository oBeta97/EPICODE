// Esercizi aggiuntivi (facoltativi) per D4
console.log('*********************************************** EXTRA ***********************************************')

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log('************************* EXTRA1 *************************')
function checkArray(ar){
    if(ar.constructor !== Array)
        return null;

    let res = 0;
    for(let i = 0; i < ar.length; i++)
        if(ar[i] > 5){
            console.log(`⚠ ${ar[i]} è maggiore di 5 ⚠`);
            res += ar[i]
        }
        else
            console.log(`${ar[i]} è minore di 5`);

    return res;
}

console.log(`checkArray(${giveMeRandom(10)}): `,checkArray(giveMeRandom(10)));


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA2 *************************')

let shoppingCart = [
    {
        "price":20,
        "name": 't-shirt',
        "id": 1,
        "quantity": 2
    },
    {
        "price":30,
        "name": 'felpa',
        "id": 2,
        "quantity": 1
    },
    {
        "price":653,
        "name": 'giacca',
        "id": 3,
        "quantity": 1
    },
    {
        "price": 8,
        "name": 'anello',
        "id": 4,
        "quantity": 7
    }
];


function shoppingCartTotal(shoppingCart){
    let res = 0;
    for(let i = 0; i< shoppingCart.length; i++)
        res += shoppingCart[i].price * shoppingCart[i].quantity;

    return res;
}

console.log('shoppingCart.length', shoppingCart.length);
console.log(`shoppingCartTotal(${shoppingCart}): `,shoppingCartTotal(shoppingCart));


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA3 *************************')

let newItem = {
    "price":20,
    "name": 't-shirt',
    "id": 1,
    "quantity": 2
}

function addToShoppingCart(obj){
    shoppingCart.push(newItem);

    return shoppingCart.length;
}

console.log(`addToShoppingCart(${newItem}): `,addToShoppingCart(newItem));


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA4 *************************')

function maxShoppingCart(cart){
    let maxCostitem = 0, targetIndex = 0;
    
    for(let i = 0; i < cart.length; i++)
        if(cart[i].price > maxCostitem){
            maxCostitem = cart[i].price
            targetIndex = i;
        }

    return cart[targetIndex];   
}

console.log(`maxShoppingCart(${shoppingCart}): `,maxShoppingCart(shoppingCart));


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA5 *************************')

function latestShoppingCart(cart){
    let minCostitem = 0, targetIndex = 0;
    
    for(let i = 0; i < cart.length; i++)
        if(cart[i].price < minCostitem || minCostitem === 0){
            minCostitem = cart[i].price
            targetIndex = i;
        }

    return cart[targetIndex];   
}

console.log(`latestShoppingCart(${shoppingCart}): `,latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA6 *************************')

let numero = 5;

function loopUntil(x){
    let n = 0;
    let arr=[];
    while(n < 3){
        let rn = Math.floor(Math.random()*11);
        if(rn > x){
            arr.push(rn);
            n++
        }
    }

    console.log('loopUntil return:', arr)
    return arr;
}


console.log(`loopUntil(${numero}): `,loopUntil(numero));




/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA7 *************************')

function average(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) !== 'number')
            return null

        sum += arr[i];
    }

    return Math.floor(sum / arr.length);
}

console.log(`average(loopUntil(numero)): `,average(loopUntil(numero)));


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA8 *************************')

let stringList = [
    'ciao',
    'come',
    'stai',
    'io',
    'tutto',
    'bene',
    'grazie',
    'mille',
    'fratello',
    'EPICODER',
]

function longest(arr){
    let longestItem = 0, targetIndex = 0;
    
    for(let i = 0; i < arr.length; i++)
        if(arr[i].length > longestItem){
            longestItem = arr[i].length
            targetIndex = i;
        }

    return arr[targetIndex];    
}

console.log(`longest(stringList): `,longest(stringList));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA9 *************************')

let contentEmail = 'ciao come stai SPAMone amico mio bello';

function antiSpamFun(emailContent){

    let stringArray = emailContent.split(' ');
    let wordFound = true;

    for(let i = 0; i < stringArray.length && wordFound; i++ ){
        wordFound = stringArray[i].toUpperCase() === 'SPAM' ||  stringArray[i].toUpperCase() === 'SCAM'
    }

    return wordFound;
}

console.log(`antiSpamFun(${contentEmail}): `,antiSpamFun(contentEmail));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA10 *************************')

let date = new Date(2024,1,1);

function dayFromNow(d){
    let actualDate = new Date();

    return Math.floor((actualDate - d) / (1000 * 60 * 60 * 24));    ;
};

console.log(`dayFromNow(${date}): `,dayFromNow(date));


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('************************* EXTRA11 *************************')

function matrixGenerator(x, y){
    let matrix = [];

    for(let i = 0; i < x; i++){
        let tempArray = [];
        for(let j = 0; j < y; j++){
            tempArray.push(i + '' + j);
        }
        matrix.push(tempArray);
    }

    return matrix
}

console.log(`matrixGenerator(${base}, ${altezza}): `,matrixGenerator(base, altezza));

